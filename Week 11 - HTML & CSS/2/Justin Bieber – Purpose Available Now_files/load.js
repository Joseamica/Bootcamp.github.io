

/* UMGTAG_F4_ADTM V3 */

var DDO = {};
DDO.specVersion = "V3 8/1/2017 16:08"
DDO.siteType = "standard"
DDO.prodURL = "www.justinbiebermusic.com"
DDO.prodRSID = "univmusicjustinbieber"
DDO.globalRSID = "univmusicglobal"
DDO.devRSID = "univmusicglobal-stage"
DDO.artistStore = "justinbieber.shop.bravadousa.com"
DDO.storeType = "Bravado"
DDO.addFilter = "twitter.com,formbuilder.umgd.net,smarturl.it,bieberforever.com,instagram.com,vine.co,facebook.com,youtube.com,privacypolicy.umusic.com,parentalguide.org,whymusicmatters.org,fahlo.me,shots.com,instagram.com,justinbieber.tumblr.com,pages.umusic-mail.com,defjam.com"

  
DDO.siteData = {
"siteDomain": window.location.host,
"siteName":"Justin Bieber Music",
"siteStoreName":"Justin Bieber Shop",
"siteFormat":"Artist"
}; 

DDO.artistData = {
"artistName":"Justin Bieber", 
"artistLabel":"Def Jam Records",
"artistSubLabel":"N/A"
};

DDO.pageData = {
"pageURL": window.location.href, 
"pageRef": (document.referrer || "No Referrer") 
};

DDO.navData = {
"K7621":"Justin Bieber Music:Home",
"K7622":"Justin Bieber Music:News",
"K7623":"Justin Bieber Music:Music",
"K7631":"Justin Bieber Music:Release",
"K7638":"Justin Bieber Music:News",
"K7639":"Justin Bieber Shop:Store Home",
"K7640":"Justin Bieber Shop:Product Detail",
"K7641":"Justin Bieber Shop:View Cart",
"K7642":"Justin Bieber Shop:Checkout",
"K7643":"Justin Bieber Shop:Order Confirm",
"K7644":"Justin Bieber Shop:Product Category:" + (document.title || "")
,"default":"K7621"

};

DDO.sectionData = {
"K7621":"Home",
"K7622":"News",
"K7623":"Music",
"K7631":"Release",
"K7638":"News",
"K7639":"Shop-Home",
"K7640":"Shop-Product",
"K7641":"Shop-Cart",
"K7642":"Shop-Checkout",
"K7643":"Shop-Confirm",
"K7644":"Shop-Category"
,"default":"K7621"

};

DDO.getPageNav = {
"/":"K7621",
"/news/":"K7622",
"/music/":"K7623",
"/release/":"K7631",
"news/":"K7638",
"shop-/store/":"K7639",
"shop-/product.aspx":"K7640",
"shop-/cart.aspx":"K7641",
"shop-/checkout.aspx":"K7642",
"shop-/confirmed.aspx":"K7643",
"shop-/dept.aspx":"K7644",
"default":"K7621"

};
    
DDO.getLinkDetail = {
"http://smarturl.it/JustinShop?IQid=site":"Navigation Click:Shop",
"http://www.bieberfever.com/":"Navigation Click:FanClub",
"http://smarturl.it/justinitunes":"Page Interaction:Music",
"http://www.facebook.com/JustinBieber#!/JustinBieber/app_130121696309":"Page Interaction:Events",
"http://twitter.com/justinbieber":"Social Click:Twitter",
"http://www.facebook.com/JustinBieber":"Social Click:Facebook",
"http://parentalguide.org/":"Page Interaction:Parental Guide",
"http://www.whymusicmatters.org/":"Page Interaction:WhyMusicMatters",
"http://privacypolicy.umusic.com/":"Page Interaction:PrivacyPolicy",
"http://privacypolicy.umusic.com/terms/":"Page Interaction:TermsOfUse",
"http://formbuilder.umgd.net/FormSubmission/View/642":"Page Interaction:FormBuilder",
"javascript:janrain.capture.ui.modal.open();":"Page Interaction:SignIn",
"https://instagram.com/justinbieber/":"Navigation Click:Photos",
"http://justinbieber.tumblr.com/":"Navigation Click:Fan Art",
"https://fahlo.me/justinbieber/":"Social Click:Fahlo",
"https://shots.com/justinbieber":"Social Click:Shots",
"https://www.youtube.com/user/JustinBieberVEVO":"Social Click:YouTube",
"https://twitter.com/justinbieber":"Social Click:Twitter",
"https://www.facebook.com/JustinBieber":"Social Click:Facebook",
"https://instagram.com/justinbieber":"Social Click:Instagram",
"http://smarturl.it/iWDYM?IQid=site":"Page Interaction:Buy on iTunes",
"http://smarturl.it/gWDYM?IQid=site":"Page Interaction:Get it on Google Play",
"default":"noMatch"

};

DDO.getLinkTitle = {
"default":"noMatch"

};

DDO.getImageDetail = {
"http://d1do9jefdc5amy.cloudfront.net/wp-content/themes/justinbieber2/images/btn-itunes.png":"Purchase:Buy on iTunes",
" http://d1do9jefdc5amy.cloudfront.net/wp-content/themes/justinbieber2/images/btn-google.png":"Purchase:Get it on Google Play",
"default":"noMatch"

}; 

DDO.getLinkText = {
"K7621":"None",
"K7622":"None",
"K7623":"None",
"K7631":"None",
"K7638":"None",
"default":"None"

};




//LOAD ADTM
document.write("<script src='//assets.adobedtm.com/e264f00eb0c37aa53085fd9876f9ec341123f732/satelliteLib-00855dce39693d0411d5f95c946521711ecf8531.js'><\/script>");