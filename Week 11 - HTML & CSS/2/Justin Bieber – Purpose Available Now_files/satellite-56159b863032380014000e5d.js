_satellite.pushAsyncScript(function(event, target, $variables){
  
var _sdi = _sdi || {};
_sdi.social = {
  listener: function(d) {
    // Google Plus
    if (d.origin.indexOf('google.com') > -1) {
      var data = d.data || '';
      if (data.indexOf('onPlusOne') > -1 && data.indexOf('"state":"on"') > -1) {
        _sdi.social.track('google plus','like');
      } else if (data.indexOf('onPlusOne') > -1 && data.indexOf('"state":"off"') > -1) {
        _sdi.social.track('google plus','unlike');
      }
    }
    // Twitter
    else if (d.origin.indexOf('platform.twitter.com') > -1) {
      var data = JSON.parse(d.data),
        params = data.params || [],
        type = '',
        track = false;

      for (var i = 0; i < params.length; i++) {
        var p = params[i];
        if (typeof p == 'string') {
          if (p == 'tweet') {
            type = 'tweet';
            track = true;
          }
        }
      }
      if (track && type != '') {
        // this tracks the actual tweet, not the intent
        _sdi.social.track('twitter','like');
                DDO.eventData = {
   						  "action": "Tweet" 
                }
							_satellite.track('sendEventDTM');
      }
    }
    // Facebook Like
    else if (d.origin.indexOf('facebook.com') > -1) {
      var data = d.data.split('&'),
        p = {};
      for (var i = 0; i < data.length; i++) {
        var param = data[i].split('=');
        p[param[0]] = param[1];
      }
      if (p.event == 'edge.create') {
        _sdi.social.track('facebook','like');
      } else if (p.event == 'edge.remove') {
        _sdi.social.track('facebook','unlike');
      }
    }
  },
  track: function(service, type) {
    if(type == 'like'){
     DDO.eventData = {
    "action": "FBLike" 
    }
    _satellite.track('sendEventDTM'); 
    }
  }
};

if (window.addEventListener) {
  window.addEventListener('message', _sdi.social.listener, false);
} else if (window.attachEvent) {
  window.attachEvent('onmessage', _sdi.social.listener);
}


});
