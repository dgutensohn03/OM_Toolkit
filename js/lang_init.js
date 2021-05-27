$(".lang-btn").on('click', function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.popup').hide();
        $(".lang-btn img").attr('src', './assets/Home_LangArrow_UP.png')
        $(".lang-btn i").removeClass('fa-chevron-down');
        $(".lang-btn i").addClass('fa-chevron-up');
    } else {
        $(this).addClass('active');
        $(".lang-btn img").attr('src', './assets/Home_LangArrow_down.png')
        $(".lang-btn i").removeClass('fa-chevron-up');
        $(".lang-btn i").addClass('fa-chevron-down');
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

    //console.log(langArray)
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
    var pageLanguage = localStorage.getItem('language');
    console.log(pageLanguage)
    if (pageLanguage == "en" || pageLanguage == "en-US") {
        altDocs = document.querySelectorAll('[-altversion-]');
        for (var i = 0; i < altDocs.length; i++) {
            var oldHref = $(altDocs[i]).attr("href");
            console.log(oldHref)

            //console.log($(altDocs[i]).attr("href"));
            var tempArray = oldHref.split("/");
            console.log(tempArray)
            var temVal_1 = tempArray[0]
            var temVal_2 = tempArray[1]
            var temVal_3 = tempArray[tempArray.length - 1]
            console.log(temVal_1)
            console.log(temVal_2)
            console.log(temVal_3)
            var newArray = [temVal_1, temVal_2, temVal_3]
            //tempArray.splice(2, 0, localStorage.getItem('language'));
            var newHref = newArray.join("/");
            console.log(newHref)
            $(altDocs[i]).attr("href", newHref)
        }
    }

    if (pageLanguage != "en" && pageLanguage != "en-US") {
        altDocs = document.querySelectorAll('[-altversion-]');
        for (var i = 0; i < altDocs.length; i++) {
            var oldHref = $(altDocs[i]).attr("href");
            console.log(oldHref)

            //console.log($(altDocs[i]).attr("href"));
            var tempArray = oldHref.split("/");
            // console.log(tempArray)
            // var temVal_1 = tempArray[0]
            // var temVal_2 = tempArray[1]
            // var temVal_3 = tempArray[tempArray.length-1]
            // console.log(temVal_1)
            // console.log(temVal_2)
            // console.log(temVal_3)
            // tempArray.splice(2, 0, localStorage.getItem('language'));
            // var newHref = tempArray.join("/");
            // console.log(newHref)
            // $(altDocs[i]).attr("href", newHref)

            console.log(tempArray)
            var temVal_1 = tempArray[0]
            var temVal_2 = tempArray[1]
            var temVal_3 = tempArray[tempArray.length - 1]
            console.log(temVal_1)
            console.log(temVal_2)
            console.log(temVal_3)
            var newArray = [temVal_1, temVal_2, localStorage.getItem('language'), temVal_3]
            //tempArray.splice(2, 0, localStorage.getItem('language'));
            var newHref = newArray.join("/");
            console.log(newHref)
            $(altDocs[i]).attr("href", newHref)
        }
    }

    pageLangItems = document.querySelectorAll('[-transl-]');
    for (var i = 0; i < pageLangItems.length; i++) {

        pageLangItems[i].innerHTML = newLangObject['transl' + (i + 1)];

        // $(pageLangItems[i]).css({
        //     'word-break': 'break-word',
        //     '-ms-hyphens': 'auto',
        //     '-moz-hyphens': 'auto',
        //     '-webkit-hyphens': 'auto',
        //     'hyphens': 'auto'
        // });

        if (!$(pageLangItems[i]).hasClass('select-topic-label')) {
            if ($(pageLangItems[i]).css("text-align") == "right" && $(pageLangItems[i]).css("text-align") != "center") {
                $(pageLangItems[i]).css({
                    "text-align": "left"
                });
            }
        }
        $('body').attr('dir', 'ltr');
        $('.m-flex-center').css('float', 'right');
        $('.team-resources label').css('text-align', 'right !important');
        if (pageLanguage == "ar") {

            $("body footer section.wrapper div div div div nav ul li a").css({
                "display": "block",
                "float": "right",
                "width": "100%"

            });
        }
        if (pageLanguage == "ar") {
            console.log(!$(pageLangItems[i]).hasClass('select-topic-label'))
            if (!$(pageLangItems[i]).hasClass('select-topic-label')) {
                if ($(pageLangItems[i]).css("text-align") == "left") {
                    $(pageLangItems[i]).css({
                        "text-align": "right"
                    });
                }
            } else {
                $('.team-resources label').css('text-align', 'left !important');
            }



            // $('.global-footer .navigation--utility li+li').css({
            //     'position': 'initial !important'
            // })
            $('.navigation--footer li a').css('right', '0');
            $('body').attr('dir', 'rtl');
            $('.m-flex-center').css('float', 'left');
        }

    }
$('.lang-override-css').remove();
    $('head').append(`<style class="lang-override-css">
    .rtl-adjustment > div > div > div.card-footer > div:after {
        right: auto !important;
    }
.rtl-adjustment {
    float: right;
    margin-right: 0px;
    margin-left: 40px;
}
    </style>`);

if (pageLanguage != "en-US" && pageLanguage != "en")  {
    $('head').append(`<style class="lang-override-css">
        .eng-else-hide {
            display: none;
        }
        </style>`);
}
    if (pageLanguage == "en-US" || pageLanguage == "en") {

        $('.sub-header').css({
            "border-left": "1px solid #373A38;",
            "border-right": "none"
        })
        $('.link-table tr font').css({
            "padding-left": "0px"
        });
        $('.link-table tr td').css({
            'text-align': 'left'
        });
        $('.rtl-adjustment').css('margin-right', '0px');
        $('.rtl-adjustment').css('margin-left', '40px');
        $('.global-footer__copyright > p:nth-child(2)').attr('dir', 'ltr')
        $('.global-footer__copyright p').css('text-align', 'left')


        $('head').append(`<style class="lang-override-css">
        .h2-5 {
            font-size: 4rem;
            line-height: 4rem;
        }
        .button--arrow:after {
            right: auto;
        }
        .button--arrow:focus:after, .button--arrow:hover:after {
            -webkit-transform: translateX(5px) scale(1.2) scaleX(1);
            -ms-transform: translateX(5px) scale(1.2) scaleX(1);
            transform: translateX(5px) scale(1.2) scaleX(1);
        }
    
        .button--arrow, .button--arrow:hover {
            color: #862633;
            cursor: pointer;
            padding: 0;
            padding-left: 0px;
            
        }
        .card__content .card-footer {
            left: 0;
            bottom: 0px;
            padding-left: 0px;
            padding-right: 0;
            margin-bottom: 40px;
            left: 40px;
        }
        .button--arrow:after {
            transform: scaleX(1);
        }

        .lang-btn img {
            padding-right: 0;
            padding-left: 20px;
        }

        .sub-header {
            border-left: 1px solid #373A38;
            margin-left: -30px;
            padding-left: 30px;
        }.sub-navigation ul .active img { transform: scaleX(1); padding-right: 0px; padding-left: 30px; }.global-footer .navigation--utility li+li:before{position:absolute !important;} .team-resources label {text-align: right;}
        .card-footer {
            padding-left: 40px;
        }
        .h2-5 {
            font-size: 4rem;
    line-height: 4rem;
        }
        </style>`);
    } else if (pageLanguage == "th") {
        $('head').append(`<style class="lang-override-css">
        .h2-sm {
            font-size: 1.7rem;
          }
        `);
    } else if (pageLanguage == "nl") {
        $('head').append(`<style class="lang-override-css">
        .h2-sm {
            font-size: 1.5rem;
          }
        .h2-5 {
            font-size: 2.5rem;
            line-height: 3.5rem;
        }
        @media (max-width: 500px) {
            .link-table tbody tr {
              display: table-row;
            }
          .link-table tbody tr td {
            display: table-row;
          border-bottom: 10px solid transparent;
          border-top: 10px solid transparent;
          padding: 0;
          }
          }
          
        `);
    } else if (pageLanguage == "de") {
        $('head').append(`<style class="lang-override-css">
        .h2-sm {
            font-size: 1.5rem;
          }
          @media (max-width: 500px) {
            .link-table tbody tr {
              display: table-row;
            }
          .link-table tbody tr td {
            display: table-row;
          border-bottom: 10px solid transparent;
          border-top: 10px solid transparent;
          padding: 0;
          }
          }
          
        `);
    } else if (pageLanguage == "pt-BR") {
        $('head').append(`<style class="lang-override-css">
        .h2-sm {
            font-size: 1.5rem;
          }
        .h2-5 {
            font-size: 2.5rem;
            line-height: 3.5rem;
        }
        .button--arrow {
            font-size: 1.5rem;
            line-height: 2.5rem;
            text-align: left;
        }
        .button--arrow:after {
            right: auto;
        }

        .custom-card-sm {
            margin-left: 15px !important;
        }

        .card__content .card-footer {
            left: 0;
            bottom: 0px;
            padding-left: 0px;
            padding-right: 0;
            margin-bottom: 40px;
            left: 40px;
        }

        </style>`);
    } else
    if (pageLanguage == "fr") {
        $('head').append(`<style class="lang-override-css">
        .h2-sm {
            font-size: 1.5rem;
          }
        .h2-5 {
            font-size: 2.5rem;
            line-height: 3.5rem;
        }
        .button--arrow {
            font-size: 1.5rem;
            line-height: 2.5rem;
            text-align: left;
        }
        .button--arrow:after {
            right: auto;
        }

        .custom-card-sm {
            margin-left: 15px !important;
        }

        .card__content .card-footer {
            left: 0;
            bottom: 0px;
            padding-left: 0px;
            padding-right: 0;
            margin-bottom: 40px;
            left: 40px;
        }
        </style>`);
    } else if (pageLanguage == "es-ES" || pageLanguage == "es-LA") {
        $('head').append(`<style class="lang-override-css">
        .h2-sm {
            font-size: 1.5rem;
          }

        .h2-5 {
            font-size: 1.5rem;
            line-height: 2.5rem;
        }
        .button--arrow {
            font-size: 1.5rem;
            line-height: 2.5rem;
            text-align: left;
        }
        .button--arrow:after {
            right: auto;
        }
        .card__content .card-footer {
            left: 0;
            bottom: 0px;
            padding-left: 0px;
            padding-right: 0;
            margin-bottom: 40px;
            left: 40px;
        }

        .card .card-body p {

            line-height: 2.4rem;
        }

        .title-text {
            font-size: 3rem;
            line-height: 3.8rem; 
        }
        </style>`);
    } else if (pageLanguage == "ru") {
        $('head').append(`<style class="lang-override-css">
        .h2-sm {
            font-size: 1.2rem;
          }
        .h2-5 {
            font-size: 1.5rem;
            line-height: 2.5rem;
        }
        .button--arrow {
            font-size: 1.5rem;
            line-height: 2.5rem;
            text-align: left;
        }

        .card__content .card-footer {
            left: 0;
            bottom: 0px;
            padding-left: 0px;
            padding-right: 0;
            margin-bottom: 40px;
            left: 40px;
        }
        .rtl-adjustment > div > div > div.card-footer > div:after {
            right: 20px !important;
        }
        .title-header-red {
            font-size: 2.5rem; color: #862633;line-height: 2.5rem; 
          }
        @media (max-width: 500px) {
            .title-header-red {
                font-size: 1.5rem; color: #862633;line-height: 2.5rem; 
              }
            .link-table tbody tr {
              display: table-row;
            }
          .link-table tbody tr td {
            display: table-row;
          border-bottom: 10px solid transparent;
          border-top: 10px solid transparent;
          padding: 0;
          }
          }

        </style>`);
    } else if (pageLanguage == "ja") {
        $('head').append(`<style class="lang-override-css">
        .h2-sm {
            font-size: 1.5rem;
          }
        .h2-5 {
            font-size: 1.5rem;
            line-height: 2.5rem;
        }
        .button--arrow {
            font-size: 1.5rem;
            line-height: 2.5rem;
            text-align: left;
        }
        .button--arrow:after {
            right: -50px !important;
        }
        .card__content .card-footer {
            left: 0;
            bottom: 0px;
            padding-left: 0px;
            padding-right: 0;
            margin-bottom: 40px;
            left: 40px;
        }
        </style>`);
    } else if (pageLanguage == "ar") {
        $('.sub-header').css({
            "border-left": "none",
            "border-right": "1px solid #373A38;"
        })
        $('.link-table tr td').css({
            'text-align': 'right',
            "padding-left": "10px"
        });
        $('.link-table tr font').css({
            "padding-left": "10px"
        });
$('.slick-prev').attr("dir", "ltr"); 
        // $('.rtl-adjustment').css('margin-right','40px');
        // $('.rtl-adjustment').css('margin-left','0px');
        // $('.global-footer__copyright > p:nth-child(2)').attr('dir', 'rtl')
        // $('.global-footer__copyright p').css('text-align', 'right')
        $('ul li span.ubermenu-target-text:not(ul li span.ubermenu-target-text:has(i))').css({'text-align': 'right', 'display': 'block'})
        $('.ubermenu-submenu > ul').css({'float': 'right'})

        $('head').append(`<style class="lang-override-css">
.logo-slider {
    direction:ltr;
}

[dir="rtl"] .slick-next {
    right: 25px;
    left: auto;
}

[dir="rtl"] .slick-prev {
    right: auto;
    left: 25px;
}

.col-2-icon-table {
    text-align:right;
}


        .arrow-holder {
            display: inline-block;
            -webkit-transform: scaleX(-1);
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  transform: scaleX(-1);

  filter: FlipH;
  -ms-filter: "FlipH";
        }
    .rtl-adjustment {

        margin-right: 40px;
        margin-left: 0;
    }
    .span-12@desktop {
        float: none !important;
    }

    @media screen and (max-width: 1000px) {
[class^=span-] {
    float: none !important;
}
    }

    .navigation--utility, .navigation--utility ul,  {
        float: left !important;
    }
    .span3 {
        float: left !important;
    }

    .lang-btn img {
        padding-right: 20px;
        padding-left: 0;
    }
    .button--arrow:focus:after, .button--arrow:hover:after {
        -webkit-transform: translateX(-5px) scale(1.2) scaleX(-1);
        -ms-transform: translateX(-5px) scale(1.2) scaleX(-1);
        transform: translateX(-5px) scale(1.2) scaleX(-1);
    }

    .button--arrow, .button--arrow:hover {
        color: #862633;
        cursor: pointer;
        padding: 0;
        padding-right: 0px;
    }
    .card__content .card-footer {
        right: 0;
        bottom: 0px;
        padding-right: 40px;
        margin-bottom: 40px;
        left: auto;
    }
    .button--arrow:after {
        transform: scaleX(-1);
    }
    .card-footer {
        left: auto;
        right: 20px;
    }
    .sub-header {
        border-right: 1px solid #373A38;
        margin-right: -30px;
        padding-right: 30px;
    }.sub-navigation ul .active img { transform: scaleX(-1); padding-right: 0px; padding-left: 0; }.global-footer .navigation--utility li+li:before{position:initial !important;} .team-resources label {text-align: left;} @media screen and (max-width: 600px){ .team-resources label { margin-right: 1.5rem; text-align: center;  width: 100%; }

}

@media screen and (max-width: 1000px) {
    .rtl-adjustment {

        margin-right: 0;
        margin-left: 0;
    }

}
</style>`);
    } else {
        $('.sub-header').css({
            "border-left": "1px solid #373A38;",
            "border-right": "none"
        })
        $('.link-table tr font').css({
            "padding-left": "0px"
        });
        $('.link-table tr td').css({
            'text-align': 'left'
        });
        $('.rtl-adjustment').css('margin-right', '0px');
        $('.rtl-adjustment').css('margin-left', '40px');
        $('.global-footer__copyright > p:nth-child(2)').attr('dir', 'ltr')
        $('.global-footer__copyright p').css('text-align', 'left')

        $('head').append(`<style class="lang-override-css">

        .h2-5 {
            font-size: 4rem;
            line-height: 4rem;
        }


        .button--arrow:after {
            right: auto;
        }
        .button--arrow:focus:after, .button--arrow:hover:after {
            -webkit-transform: translateX(5px) scale(1.2) scaleX(1);
            -ms-transform: translateX(5px) scale(1.2) scaleX(1);
            transform: translateX(5px) scale(1.2) scaleX(1);
        }
    
        .button--arrow, .button--arrow:hover {
            color: #862633;
            cursor: pointer;
            padding: 0;
            padding-left: 0px;
            
        }
        .card__content .card-footer {
            left: 0;
            bottom: 0px;
            padding-left: 0px;
            padding-right: 0;
            margin-bottom: 40px;
            left: 40px;
        }
        .button--arrow:after {
            transform: scaleX(1);
        }

        .lang-btn img {
            padding-right: 0;
            padding-left: 20px;
        }

        .sub-header {
            border-left: 1px solid #373A38;
            margin-left: -30px;
            padding-left: 30px;
        }.sub-navigation ul .active img { transform: scaleX(1); padding-right: 0px; padding-left: 30px; }.global-footer .navigation--utility li+li:before{position:absolute !important;} .team-resources label {text-align: right;}</style>`);
    }
    //$('.search-btn').val(newLangObject.Search);
    $('.global-footer__copyright:first-child').attr('dir', 'ltr')




    const keys = Object.keys(newLangObject)
    const values = Object.values(newLangObject)
    const entries = Object.entries(newLangObject)
    var foundItem;
    for (const [key, value] of entries) {
        //for (const key of keys) {
        //console.log(key)

        if (key.includes("search-btn")) {
            var searchPlaceholder = document.getElementsByClassName("sf-input-text");
            $(searchPlaceholder).attr("placeholder", value)
        }
        if (key.includes("training-href") && document.getElementsByClassName(key).length > 0) {
            //console.log(document.getElementsByClassName(key))
            var item = document.getElementsByClassName(key);
            //console.log(item)
            $(item).attr("href", value);
        }

        if (key.includes("image") && document.getElementsByClassName(key).length > 0) {
            //console.log(document.getElementsByClassName(key))
            var item = document.getElementsByClassName(key);
            //console.log(item)
            $(item).attr("src", value);
        } else if (document.getElementsByClassName(key).length > 0) {
            //console.log(document.getElementsByClassName(key))
            var item = document.getElementsByClassName(key);
            //console.log(item)
            $(item).val(value);
        }
    }

    //$("select").reload();

    var data = []
    var sel = document.querySelector("select");
    //console.log(sel)
    // for (var i = 0, n = sel.options.length; i < n; i++) { // looping over the options
    //     //console.log(sel.options[i].innerHTML)
    //     if (sel.options[i].innerHTML) data.push(sel.options[i].innerHTML);
    // }


    //var $select = $('#select-topic'); // you might wanna empty it first with .empty()

    // for (var i = 0, n = data.length; i < n; i++) { // looping over the options
    //     //console.log(sel.options[i].innerHTML)
    //     sel.options[i].innerHTML = data[i]
    // }
    //console.log(data[0])

    $('.customSelectInner').text(data[0])
    $("html").fadeIn();
    console.log("text replace fade in")
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
    var pagePathArray = window.location.pathname.slice(0, -5).split("/");
    var currentPageName = pagePathArray[pagePathArray.length - 1];
    (localStorage.getItem('language') == null) ? setLanguage('en-US'): false;
    console.log('./lang/' + currentPageName + "_" + localStorage.getItem('language') + '.json')
    langData = $.ajax({
        url: './lang/' + currentPageName + "_" + localStorage.getItem('language') + '.json',
        dataType: 'json',
        async: false,
        success: function (lang) {
            language = lang
        }
    });
    var holderObject = langData.responseText;
    console.log(JSON.parse(holderObject));
    newLangObject = JSON.parse(holderObject);
    //console.log('newLangObject');
    //console.log(newLangObject);



}



function setLanguage(lang) {
    console.log(lang)
    localStorage.setItem('language', lang);
    window.location.hash = lang
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
        'en-US', //English
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

    console.log("defaultLang: " + defaultLang)
    console.log("currLang: " + currLang)
    for (var i = 0; i < trans.versions.length; i++) {
        console.log("lang array item: " + trans.versions[i])
        console.log("langSet: " + langSet)
        if (!langSet) {
            console.log(defaultLang == currLang)

            var currLang = trans.versions[i]
            console.log("currLang: " + currLang)
            if (defaultLang == currLang) {
                // console.log("GERMAN")
                localStorage.setItem('language', currLang);
                window.location.hash = currLang
                getLanguage();
                replaceNewLangText();

                $(".lang-list li").each(function (index) {
                    $(this).removeClass('selected');
                });
                $("#" + currLang).addClass('selected');

                langSet = true;
            } else if (!defaultLang) {
                localStorage.setItem('language', 'en-US');
                window.location.hash = 'en-US'
                getLanguage();
                replaceNewLangText();
                langSet = true;
            }
        }

    }
    if (!langSet) {
        console.log('setDefault Lang')
        localStorage.setItem('language', 'en-US');
        window.location.hash = 'en-US'
        getLanguage();
        replaceNewLangText();
        langSet = true;
    }

    if (defaultLang == "ja") {
        $('.h2-5').css("font-size", "2rem");
    } else if (defaultLang == "ru") {

        $('.h2-5').css({
            "font-size": "1.5rem",
            "line-height": "2.5rem"
        });
        $('.button--arrow').css({
            "font-size": "1.5rem",
            "line-height": "2.5rem",
            "text-align": "left"
        });
        $('.custom-trans-header').css({
            "font-size": "2.8rem",
            "line-height": "3.6rem"
        })


    } else {
        // $('.button--arrow').css({
        //     "font-size": "1.5rem",
        //     "line-height": "2.5rem",
        //     "text-align": "center"
        // });
        // $('.h2-5').css({
        //     "font-size": "4rem",
        //     "line-height": "4rem"   
        // });
    }
}