jQuery(document).ready(function($) {

    if(jQuery('.umgecrm-casl-country-block').length) {
        jQuery('.umgecrm-casl-country-block select.umgecrm-casl-country-selector').change(function() {
            var country_code = jQuery(this).val();
            UMGECRM.check_casl(country_code);
        });
    } else {
        AEJSWP.get_user_country('UMGECRM.check_casl');
    }
});

if(typeof UMGECRM.sub_data !== 'undefined' && typeof UMGECRM.sub_data.ecrm !== 'undefined' && UMGECRM.sub_data.ecrm == 'umgapi' && UMGECRM.lytics_env !== 'none') {
    if(typeof AEJSWP !== 'undefined') {
        //add waiter that makes AE Connect wait before executing user optins. This is required when we are waiting for Lytics Cookie ID
        AEJSWP.add_wait_for_event('send_user_optins');
    }

    /**
     * Lytics Callback Handler
     */
    !function(l,a){a.liosetup=a.liosetup||{},a.liosetup.callback=a.liosetup.callback||[],a.liosetup.addEntityLoadedCallback=function(l,o){if("function"==typeof a.liosetup.callback){var i=[];i.push(a.liosetup.callback),a.liosetup.callback=i}a.lio&&a.lio.loaded?l(a.lio.data):o?a.liosetup.callback.unshift(l):a.liosetup.callback.push(l)}}(document,window);

    // Custom Callback Function
    window.liosetup.addEntityLoadedCallback(function(data){

        //get lytics cookie uid
        var lytics_uid = window.jstag.getid();

        //append the lytics uid to user data object so it can be used when sending optin API call
        AEJSWP.add_data_filter('filter__optin_user_data', function(data) {
            data['lytics_uid'] = lytics_uid;

            return data;
        });

        AEJSWP.add_data_filter('filter__redirect_login_return_url', function(return_url) {
            return AEJSWP.addURLParameter(return_url, 'lytics-uid', lytics_uid);
        });

        AEJSWP.execute_wait_for_event('send_user_optins');
    });
}

//Check if user is from Canada and amend any fields that require different labels for Canada
UMGECRM.check_casl = function(country) {
    if(country == 'CA') {
        //user country is Canada so let's use CASL labels
        jQuery('.umgecrm-adhoc-block[data-umgecrm-casl="1"]').each(function() {
            jQuery('.umgecrm-text-container').each(function() {
                if(jQuery('.umgecrm-casl', jQuery(this)).length) {
                    jQuery('.umgecrm-casl', jQuery(this)).show();
                    jQuery('.umgecrm-non-casl', jQuery(this)).hide();
                }
            });
        });
    }
};

//Add event listener for AEJS ready
AEJSWP.add_aejsready_handler("UMGECRM.ae_wpaejsready");
UMGECRM.ae_wpaejsready = function(aeJS) {
    aeJS.events.onLogin.addHandler(UMGECRM.ae_login_handle);
    aeJS.events.onUser.addHandler(UMGECRM.ae_user_handle);
};


//Function executed when AE Framework logs in user
UMGECRM.ae_login_handle = function(ae_user) {

    //find all adhoc ecrm forms and save their opt-in states to localStorage so they can be executed once AE onUser event fires
    //if AJAX login is not used then onUSer event will fire after page refresh (that's why save states in localStorage)
    jQuery('.umgecrm-adhoc-block[data-umgecrm-submission-type="auth-connect"]').each(function() {
        UMGECRM.set_adhoc_block_states(jQuery(this), ae_user);
    });
};

//Function executed when AE framework returns a user object to the client
UMGECRM.ae_user_handle = function(ae_user) {
    UMGECRM.update_adhoc_blocks(ae_user);

    //AE user logged in so we can execute opt-ins that are set to 'auth-connect' submission type
    jQuery('.umgecrm-adhoc-block[data-umgecrm-submission-type="auth-connect"]').each(function() {
        var subs = UMGECRM.get_adhoc_block_states(jQuery(this), ae_user);
        if(typeof subs !== 'undefined') {
            UMGECRM.execute_adhoc_block(jQuery(this), ae_user, subs);
            UMGECRM.clear_adhoc_block_states(jQuery(this), ae_user);
        }
    });

    //Add listeners to submit buttons where adhoc submission type is set to submit-button
    jQuery('.umgecrm-adhoc-block[data-umgecrm-submission-type="submit-button"]').each(function() {
        var block = jQuery(this);
        jQuery('.umgecrm-submit-button button', jQuery(this)).click(function(e) {
            e.preventDefault();
            UMGECRM.execute_adhoc_block(block, ae_user);
        });
    });
};

//check which adhoc block have been complete and set complete message if they are complete
//complete states are checked and saved inside of localStorage
UMGECRM.update_adhoc_blocks = function(ae_user) {
    jQuery('.umgecrm-adhoc-block').each(function() {
        var adhoc_id = jQuery(this).attr('data-adhoc-id');

        if(UMGECRM.session_check_adhoc_exists(adhoc_id, ae_user)) {
            jQuery(this).children('div').hide();
            jQuery('.umgecrm-complete-block', jQuery(this)).show();
        }
    });
};

//run opt-in actions from specified ad-hoc block/shortcode
UMGECRM.execute_adhoc_block = function(block, ae_user, subs) {
    var adhoc_id = jQuery(block).attr('data-adhoc-id');
    if(!UMGECRM.session_check_adhoc_exists(adhoc_id, ae_user)) {
        UMGECRM.session_set_adhoc(adhoc_id, ae_user);

        jQuery.ajax({
            url: UMGECRM.ajaxurl,
            type: 'post',
            data: {
                action: 'execute_adhoc_block',
                user: ae_user,
                subs: subs,
                adhoc_id: adhoc_id
            },
            success: function(response) {
                UMGECRM.update_adhoc_blocks(ae_user);
                //track analytics event for adhoc form
                UMGECRM.trackEvent('optin_success_adhoc', {form_id: adhoc_id, user: ae_user, subs: subs});
            }
        });
    }
};

/** localStorage session functions **/
UMGECRM.clear_adhoc_block_states = function(block, ae_user) {
    if(typeof Storage !== "undefined") {
        if(typeof ae_user.data !== 'undefined' && typeof ae_user.data['ID'] !== 'undefined') {
            var user_id = ae_user.data['ID'];
            var adhoc_id = jQuery(block).attr('data-adhoc-id');
            return localStorage.removeItem('umgecrm-adhoc-state-' + user_id + '-' + adhoc_id);
        }
    }
};
UMGECRM.get_adhoc_block_states = function(block, ae_user) {
    if(typeof Storage !== "undefined") {
        if(typeof ae_user.data !== 'undefined' && typeof ae_user.data['ID'] !== 'undefined') {
            var user_id = ae_user.data['ID'];
            var adhoc_id = jQuery(block).attr('data-adhoc-id');
            return JSON.parse(localStorage.getItem('umgecrm-adhoc-state-' + user_id + '-' + adhoc_id));
        }
    }
};
UMGECRM.set_adhoc_block_states =  function (block, ae_user) {
    if(typeof Storage !== "undefined") {
        if(typeof ae_user.data !== 'undefined' && typeof ae_user.data['ID'] !== 'undefined') {
            var adhoc_id = jQuery(block).attr('data-adhoc-id');
            var subs = {};
            jQuery('input[type="checkbox"]', jQuery(block)).each(function() {
                var optin_id = jQuery(this).attr('data-optin-id');
                var checked = jQuery(this).is(':checked');
                subs[optin_id] = checked;
            });

            var user_id = ae_user.data['ID'];
            localStorage.setItem('umgecrm-adhoc-state-' + user_id + '-' + adhoc_id, JSON.stringify(subs));
        }
    }
};


UMGECRM.session_check_adhoc_exists = function(adhoc_id, ae_user) {
    var exists = false;
    if(typeof Storage !== "undefined") {
        if(typeof ae_user.data !== 'undefined' && typeof ae_user.data['ID'] !== 'undefined') {
            var user_id = ae_user.data['ID'];
            exists = localStorage.getItem('umgecrm-adhoc-' + user_id + '-' + adhoc_id) ? true : false;
        }
    }
    return exists;
};

UMGECRM.session_set_adhoc = function(adhoc_id, ae_user) {
    if(typeof Storage !== "undefined") {
        if(typeof ae_user.data !== 'undefined' && typeof ae_user.data['ID'] !== 'undefined') {
            var user_id = ae_user.data['ID'];
            localStorage.setItem('umgecrm-adhoc-' + user_id + '-' + adhoc_id, true);
        }
    }
};



/** Analytics Event Tracking **/

//function fired by AE Connect once custform form opt-ins are submitted
// NB: we check for trackingDelegate.AEConnect first and don't overwrite it if it already exists as it may or may not be on the page already from other plugins
var trackingDelegate = window.trackingDelegate || {};
if(typeof(trackingDelegate.AEConnect) == 'undefined') {
  trackingDelegate.AEConnect = {};
}
trackingDelegate.AEConnect.optinsUpdated = function(data) {
    UMGECRM.trackEvent('optin_success_ae', data);
};

UMGECRM.trackEvent = function(type, data) {
    switch(type) {
        //track opt-in for ae custom forms
        case 'optin_success_ae':
            switch(UMGECRM.sub_data.ecrm) {
                case 'umgappi':
                    for(var sub_index in data.optins) {
                        var optin = data.optins[sub_index];
                        if(optin.user_choice) {
                            var optins = UMGECRM.sub_data['ae'][data.cform_id]['subs'];
                            for(var i in optins) {
                                if(optins[i].optin_id == optin.optin_id) {
                                    var sub_data = optins[i];
                                    var analytics_data = {
                                        list_id: sub_data['umgapi-form-id'],
                                        list_name: sub_data['umgapi-optin-ids'],
                                        business_unit: sub_data['umgapi-form-id']
                                    };
                                    AEJSWP.debugOutput('Firing optin_success_ae event with data: ', analytics_data);
                                    AEJSWP.executeFunctionByName(UMGECRM.analytics_tracking_delegate + '.optin_success', window, analytics_data);
                                }
                            }
                        }
                    }
                    break;
                case 'exacttarget':
                    for(var sub_index in data.optins) {
                        var optin = data.optins[sub_index];
                        if(optin.user_choice) {
                            var optins = UMGECRM.sub_data['ae'][data.cform_id]['subs'];
                            for(var i in optins) {
                                if(optins[i].optin_id == optin.optin_id) {
                                    var sub_data = optins[i];
                                    var analytics_data = {
                                        list_id: sub_data['et-list-id'],
                                        list_name: sub_data['et-list-name'],
                                        business_unit: sub_data['et-client-id']
                                    };
                                    AEJSWP.debugOutput('Firing optin_success_ae event with data: ', analytics_data);
                                    AEJSWP.executeFunctionByName(UMGECRM.analytics_tracking_delegate + '.optin_success', window, analytics_data);
                                }
                            }
                        }
                    }
                break;
                case 'viceversa':
                	for(var sub_index in data.optins) {
                        var optin = data.optins[sub_index];
                        if(optin.user_choice) {
                            var optins = UMGECRM.sub_data['ae'][data.cform_id]['subs'];
                            for(var i in optins) {
                                if(optins[i].optin_id == optin.optin_id) {
                                    var sub_data = optins[i];
                                    var analytics_data = {
                                        list_id: sub_data['vv-cf-optin-campaign-id'],
                                        list_name: null,
                                        business_unit: null
                                    };
                                    AEJSWP.debugOutput('Firing optin_success_ae event with data: ', analytics_data);
                                    AEJSWP.executeFunctionByName(UMGECRM.analytics_tracking_delegate + '.optin_success', window, analytics_data);
                                }
                            }
                        }
                    }
                break;
                case 'neolane':
                    for(var sub_index in data.optins) {
                        var optin = data.optins[sub_index];
                        if(optin.user_choice) {
                            var optins = UMGECRM.sub_data['ae'][data.cform_id]['subs'];
                            for(var i in optins) {
                                if(optins[i].optin_id == optin.optin_id) {
                                    var sub_data = optins[i];
                                    var list_id = null;
                                    var list_name = null;
                                    var business_unit = null;
                                    if(typeof sub_data['nl-artist-id'] != 'undefined') {
                                        list_id = sub_data['nl-artist-id'];
                                        business_unit = sub_data['nl-source'];
                                        list_name = sub_data['nl-label'];
                                    } else if(typeof sub_data['nl-cf-optin-artist-id'] != 'undefined') {
                                        list_id = sub_data['nl-cf-optin-artist-id'];
                                        business_unit = sub_data['nl-cf-optin-source'];
                                        list_name = sub_data['label'];
                                    }
                                    var analytics_data = {
                                        list_id: list_id,
                                        list_name: list_name,
                                        business_unit: business_unit
                                    };
                                    AEJSWP.debugOutput('Firing optin_success_ae event with data: ', analytics_data);
                                    AEJSWP.executeFunctionByName(UMGECRM.analytics_tracking_delegate + '.optin_success', window, analytics_data);
                                }
                            }
                        }
                    }
                break;
            }
        break;
        //track opt-in for adhoc forms
        case 'optin_success_adhoc':
            switch(UMGECRM.sub_data.ecrm) {
                case 'umgapi':
                    //loop through the opt-in choices
                    for(var sub_id in data.subs) {
                        var checked = data.subs[sub_id];
                        if(checked) {
                            var optins = UMGECRM.sub_data['adhoc'][data.form_id]['subs'];
                            if(typeof optins[sub_id] !== 'undefined') {
                                var sub_data = optins[sub_id];
                                var analytics_data = {
                                    list_id: sub_data.list_id,
                                    list_name: sub_data.list_name,
                                    business_unit: sub_data.business_unit
                                };
                                AEJSWP.debugOutput('Firing optin_success_adhoc event with data: ', analytics_data);
                                AEJSWP.executeFunctionByName(UMGECRM.analytics_tracking_delegate + '.optin_success', window, analytics_data);
                            }
                        }
                    }
                    break;
                case 'exacttarget':
                    //loop through the opt-in choices
                    for(var sub_id in data.subs) {
                        var checked = data.subs[sub_id];
                        if(checked) {
                            var optins = UMGECRM.sub_data['adhoc'][data.form_id]['subs'];
                            if(typeof optins[sub_id] !== 'undefined') {
                                var sub_data = optins[sub_id];
                                var analytics_data = {
                                    list_id: sub_data.list_id,
                                    list_name: sub_data.list_name,
                                    business_unit: sub_data.business_unit
                                };
                                AEJSWP.debugOutput('Firing optin_success_adhoc event with data: ', analytics_data);
                                AEJSWP.executeFunctionByName(UMGECRM.analytics_tracking_delegate + '.optin_success', window, analytics_data);
                            }
                        }
                    }
                break;
                case 'viceversa':
                    var send_ecrm = false;
                    //check if ecrm call is being made if auto-post enabled or user ticked the opt-in box
                    if(UMGECRM.sub_data['adhoc'][data.form_id]['vv-auto-post-enabled']) {
                        send_ecrm = true;
                    } else if(typeof data.subs['vv-manual'] !== 'undefined') {
                        send_ecrm = true;
                    }

                    if(send_ecrm) {
                        var analytics_data = {
                            list_id: UMGECRM.sub_data['vv-campaign-id'],
                            list_name: null,
                            business_unit: null
                        };
                        AEJSWP.debugOutput('Firing optin_success_adhoc event with data: ', analytics_data);
                        AEJSWP.executeFunctionByName(UMGECRM.analytics_tracking_delegate + '.optin_success', window, analytics_data);
                    }
                break;
                case 'neolane':
                    for(var sub_id in data.subs) {
                        var checked = data.subs[sub_id];
                        if(checked) {
                            var optins = UMGECRM.sub_data['adhoc'][data.form_id]['subs'];
                            if(typeof optins[sub_id] !== 'undefined') {
                                var sub_data = optins[sub_id];
                                var analytics_data = {
                                    list_id: sub_data['nl-artist-id'],
                                    list_name: sub_data['nl-label'],
                                    business_unit: sub_data['nl-source']
                                };
                                AEJSWP.debugOutput('Firing optin_success_adhoc event with data: ', analytics_data);
                                AEJSWP.executeFunctionByName(UMGECRM.analytics_tracking_delegate + '.optin_success', window, analytics_data);
                            }
                        }
                    }
                break;
            }

        break;
    }
};
