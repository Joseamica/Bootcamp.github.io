// first, add custom aejsready handler
AEJSWP.add_aejsready_handler("myAeJSReadyFunction");
 
// custom handler is passed the aeJS object, which can then
// be used to add settings and custom event handlers
function myAeJSReadyFunction(aeJS) {
    aeJS.events.onLogin.addHandler(myLoginHandler);
    aeJS.events.onUser.addHandler(myLoginHandler);
}
function myLoginHandler(event) {
    // replace login area with logged in html
    var html = '<a id="login" class="logout tracking-event" data-tracking-event="AE|Sign-Out" onclick="AEJSWP.aeJS.logout()" href="#"><i class="icon">u</i><span>Sign Out</span></a>';
    jQuery('#login-target').html(html);
}
