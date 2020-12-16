
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
    for (var i = 0; i < langItems.length; i++) {

        langArray[i] = (langItems[i].innerText.trim() || langItems[i].textContent.trim());
    }

    console.log(langArray)
    arrayToList(langArray, 1);

}

function arrayToList(arr, counter) {
    for (var i = 0; i < arr.length; i++, counter++) {
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
    for (var i = 0; i < pageLangItems.length; i++) {

        pageLangItems[i].innerHTML = newLangObject['transl' + (i + 1)];

        $(pageLangItems[i]).css({
            'word-break': 'break-word',
            '-ms-hyphens': 'auto',
            '-moz-hyphens': 'auto',
            '-webkit-hyphens': 'auto',
            'hyphens': 'auto'
        });
    }

    //$('.search-btn').val(newLangObject.Search);

const keys = Object.keys(newLangObject)
const values = Object.values(newLangObject)
const entries = Object.entries(newLangObject)
var foundItem;
for (const [key, value] of entries) {
//for (const key of keys) {
    console.log(key)
    if (key.includes("image") && document.getElementsByClassName(key).length > 0) {
        //console.log(document.getElementsByClassName(key))
        var item = document.getElementsByClassName(key);
        console.log(item)
        $(item).attr("src", value);
    } else if (document.getElementsByClassName(key).length > 0) {
      //console.log(document.getElementsByClassName(key))
      var item = document.getElementsByClassName(key);
      console.log(item)
      $(item).val(value);
  }
}

//$("select").reload();

var data = []
var sel = document.querySelector("select");
console.log(sel)
for (var i=0, n=sel.options.length;i<n;i++) { // looping over the options
    console.log(sel.options[i].innerHTML)
  if (sel.options[i].innerHTML) data.push(sel.options[i].innerHTML);
}


//var $select = $('#select-topic'); // you might wanna empty it first with .empty()

for (var i=0, n=data.length;i<n;i++) { // looping over the options
    //console.log(sel.options[i].innerHTML)
    sel.options[i].innerHTML = data[i]
}
//console.log(data[0])

$('.customSelectInner').text(data[0])
$("html").fadeIn();
//for (var i=0, n=sel.options.length;i<n;i++) {
    //var o = $('<option/>').text(data[i]);
    //o.appendTo($select);
    //console.log(data)
    //sel.options[i].innerHTML = data[i]
//}​


}

var language;
var langData;
var newLangObject


function getLanguage() {
    var currentPageName = window.location.pathname.slice(0, -5);
    (localStorage.getItem('language') == null) ? setLanguage('en'): false;

    langData = $.ajax({
        url: './lang' + currentPageName + "_" + localStorage.getItem('language') + '.json',
        dataType: 'json',
        async: false,
        success: function (lang) {
            language = lang
        }
    });
    var holderObject = langData.responseText;
    //console.log(JSON.parse(holderObject));
    newLangObject = JSON.parse(holderObject);
    //console.log('newLangObject');
    //console.log(newLangObject);



}



function setLanguage(lang) {
    console.log(lang)
    localStorage.setItem('language', lang);
    getLanguage();
    replaceNewLangText();
    if(lang == "ja") {
        $('.h2-5').css("font-size", "2rem" );
    } else {
        $('.h2-5').css("font-size", "4rem" );
    }
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
        'ko', //Korean 
        'ru', //Russian
        'es-ES', //Spanish (European)
        'es-LA', //Spanish (Latin American)
        'th' //Thai
    ]
    var defaultLang;
    if (localStorage.getItem('language') == null) {
    
    defaultLang = window.navigator.userLanguage || window.navigator.language;
} else {
    defaultLang = localStorage.getItem('language');
}
    var langSet;
    console.log('defaultLang')
    console.log(defaultLang)

    for (var i = 0; i < trans.versions.length; i++) {
        //console.log(trans.versions[i])
        if (!langSet) {
            console.log(defaultLang == currLang)
            var currLang = trans.versions[i]
            if (defaultLang == currLang) {

                // console.log("GERMAN")
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

    if(defaultLang == "ja") {
        $('.h2-5').css("font-size", "2rem" );
    } else {
        $('.h2-5').css("font-size", "4rem" );
    }

}