var takeImages = 7;
var takeSliders = 4;
var perPageCount = 30;
var perPageSlidesCount = 40;
var API_KEY = '2217298-38addbee8ad85b3796d49a68a';
var vintageBicycleGallery = [];
var bikeSliders = [];

var req;

function createRequest() {
    if (window.XMLHttpRequest) req = new XMLHttpRequest();
    else if (window.ActiveXObject) {                            // IE
        try {
            req = new ActiveXObject('Msxml2.XMLHTTP');          // IE разных версий
        } catch (e){}                                           // может создавать
        try {                                                   // объект по разному
            req = new ActiveXObject('Microsoft.XMLHTTP');
        } catch (e){}
    }

    return req;
}

function getData(url, params) {
    req = createRequest();
    if (req) {
        req.open("GET", url, false);
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        req.send(params);
        if (req.status == 200) {
            var rData = req.responseText;
            var eData = !(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(rData.replace(/"(\\.|[^"\\])*"/g, ''))) && eval('(' + rData + ')');
            var eArray = new Object(eData);
        } else {
            alert("Не удалось получить данные:\n" + req.statusText);
        }
    } else {
        alert("Браузер не поддерживает AJAX");
    }
    return eArray;
}

function fillRandomImages(images){
    for (var i=0; i<=takeImages; i++) {
        var imageIndex = _.random(0, perPageCount-1);
        var currImage = images.hits[imageIndex];
        var itemClassName = '';
        var imgClassName = 'item-img';
        // var imgCaption = currImage.tags;
        if(i == 2 || i == 5){ itemClassName = 'grid-item--width2'; imgClassName = 'item-img-grid-item--width2'; }
        var imageData = { url: currImage.webformatURL, className: itemClassName, imageClassName: imgClassName, };
        vintageBicycleGallery.push(imageData);
    }
}

function fillRandomSlides(slides){
    for (var i=0; i<=takeSliders; i++) {
        var slideIndex = _.random(0, perPageSlidesCount-1);
        var currSlide = slides.hits[slideIndex];
        var imgNumber = i+1;
        var imgUrl = currSlide.webformatURL;
        var imgVisibleClass = '';
        if(i == 0){ imgVisibleClass = 'visible'; }
        var slideData = { imageNumber: imgNumber, imageUrl: imgUrl, imageVisibleClass: imgVisibleClass };
        bikeSliders.push(slideData);
    }
}

function getUrlForImages(query){
    return "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(query)+"&per_page="+perPageCount;
}

function getUrlForSlides(query){
    return "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(query)+"&per_page="+perPageSlidesCount;
}

function getDefaultSearchUrl(){
    return getUrlForImages('vintage bike');
}

var pixabayImages = getData(getDefaultSearchUrl(),'');
fillRandomImages(pixabayImages);

var pixabaySlides = getData(getUrlForSlides('bike'), '');
fillRandomSlides(pixabaySlides);
