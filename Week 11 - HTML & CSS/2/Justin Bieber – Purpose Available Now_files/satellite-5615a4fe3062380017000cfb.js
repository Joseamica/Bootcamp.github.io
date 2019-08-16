_satellite.pushAsyncScript(function(event, target, $variables){
  // Send DDO to Console for Validation

if (DDO){
  
var ddoString = JSON.stringify(DDO);
dtm_notify('DTM:DDO:'+ddoString);
  
}else{
  
dtm_notify('DTM:DDO not defined'); 
}







});
