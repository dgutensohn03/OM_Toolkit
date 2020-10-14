var demoMode = true;

$(".lang-btn").on('click', function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.popup').hide();
        $(".lang-btn img").attr('src', './assets/Home_LangArrow_UP.png')
    } else {
        $(this).addClass('active');
        $(".lang-btn img").attr('src', './assets/Home_LangArrow_down.png')
        $('.popup').fadeIn();
    }
})

$(".lang-list li").on('click', function () {
    $(".lang-list li").each(function (index) {
        $(this).removeClass('selected');
    });
    console.log(this.id)
    $(this).addClass('selected');
    //langItem[0].innerHTML = "newTitle"
    $('.popup').hide();
    $(".lang-btn").removeClass('active');
    $(".lang-btn img").attr('src', './assets/Home_LangArrow_UP.png')
if(!demoMode)
    setLanguage(this.id);
})


// 		var rockets, altitude, speed, distance;
// function activateRockets(){
// 	rockets = document.querySelectorAll('div.rockets');
// 	for(var i=0; i < rockets.length; i++){
// 		altitude = rockets[i].dataset.altitude;
// 		speed = rockets[i].dataset.speed;
// 		distance = rockets[i].dataset.rocketDistance;
// 		rockets[i].style.top = altitude+"px";
// 		rockets[i].style.transitionDuration = speed+"s";
// 		rockets[i].style.left = distance+"px";
// 	}
// }
// window.addEventListener("load", activateRockets);




var langItems;
var pageLangItems;
var langArray = [];
var langObject = {};
function getlangItems() {
langItems = document.querySelectorAll('[-transl-]');
for(var i=0; i < langItems.length; i++){

langArray[i] = (langItems[i].innerText.trim() || langItems[i].textContent.trim());
}

//console.log(langArray)
arrayToList(langArray, 1);

}
function arrayToList (arr, counter) {
for (var i = 0;i < arr.length; i++, counter++){
langObject['transl' + counter] = arr[i];
}
console.log(langObject)
//replaceNewLangText()
return langObject;
}

function replaceNewLangText() {

// 	Object.size = function(obj) {
//     var size = 0, key;
//     for (key in obj) {
//         if (obj.hasOwnProperty(key)) size++;
//     }
//     return size;
// };

// // Get the size of an object
// langObject.size = Object.size(langObject);


//console.log(size)

pageLangItems = document.querySelectorAll('[-transl-]');
for(var i=0; i < pageLangItems.length; i++){

pageLangItems[i].innerHTML = newLangObject['transl' + (i + 1)];
$(pageLangItems[i]).css({
    'word-break': 'break-word',
    '-ms-hyphens': 'auto',
    '-moz-hyphens': 'auto',
    '-webkit-hyphens': 'auto',
    'hyphens': 'auto'
});
}
}

var language; 
var langData;
var newLangObject


function getLanguage() {

//(localStorage.getItem('language') == null) ? setLanguage('en') : false;

langData = $.ajax({ 
url:  './lang/' +  localStorage.getItem('language') + '.json', 
dataType: 'json', 
async: false,
success: function (lang) { 
language = lang } });
var holderObject = langData.responseText;
//console.log(JSON.parse(holderObject));
newLangObject = JSON.parse(holderObject);
console.log(newLangObject);

}



function setLanguage(lang) {
console.log(lang)
localStorage.setItem('language', lang);
getLanguage();
replaceNewLangText();
//window.location.reload(true)
}


window.addEventListener("load", initLangCheck);
//window.addEventListener("load", getLanguage);

function initLangCheck() {
var trans = {};

trans.versions = [
'ar', //Arabic
'pt-BR', //Brazilian Portuguese
'zh-CN', //Chinese (Simplified)
'nl', //Dutch
'en', //English
'fr', //French (European)
'de', //German
'ja', //Japanese
'ru', //Russian
'es-ES', //Spanish (European)
'es-LA', //Spanish (Latin American)
'th' //Thai
]

var defaultLang = window.navigator.userLanguage || window.navigator.language;
var langSet;
//alert(defaultLang)

for(var i = 0; i < trans.versions.length; i++) {
//console.log(trans.versions[i])
if (!langSet) {
    console.log(defaultLang == currLang)
    var currLang = trans.versions[i]
if(defaultLang == currLang) {
    
    console.log("GERMAN")
    localStorage.setItem('language', currLang);
    getLanguage();
    replaceNewLangText();

    $(".lang-list li").each(function (index) {
        $(this).removeClass('selected');
    });
    $("#" + currLang).addClass('selected');
    
    langSet = true;
} else if (!defaultLang) {
    localStorage.setItem('language', 'en');
    getLanguage();
    replaceNewLangText();
    langSet = true;
}
}

}

}