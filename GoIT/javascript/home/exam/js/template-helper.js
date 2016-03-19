function Gallery(options) {
    var elem;

    function getElem() {
        if (!elem) render();
        return elem;
    }

    function render() {
        var html = options.template({
            images: options.images
        });

        elem = document.createElement('div');
        elem.innerHTML = html;
        elem.classList.add("vintage-bicycle-gallery-container");
    }

    this.getElem = getElem;
}

function SliderModel(options) {
    var elem;

    function getElem() {
        if (!elem) render();
        return elem;
    }

    function render() {
        var html = options.template({
            slides: options.slides
        });

        elem = document.createElement('div');
        elem.innerHTML = html;
        elem.classList.add("slider-layout");
    }

    this.getElem = getElem;
}

function addGallery(){
    var tmpl = _.template(document.getElementById('vintage-bicycle-gallery-template').innerHTML);
    var gallery = new Gallery({
        template: tmpl,
        images: vintageBicycleGallery
    });

    var galleryContainer = document.getElementsByClassName("vintage-bicycle-gallery")[0];

    galleryContainer.appendChild(gallery.getElem());

    $('.grid').masonry({
        // options
        itemSelector: '.grid-item',
        columnWidth: 400
    });
}

function addSlider(){
    var tmpl = _.template(document.getElementById('slider-images-template').innerHTML);
    var sliderModel = new SliderModel({
        template: tmpl,
        slides: bikeSliders
    });

    var sliderContainer = document.getElementsByClassName("slider")[0];

    sliderContainer.appendChild(sliderModel.getElem());
}

function removeGallery(){
    vintageBicycleGallery = [];
    var gallery = document.getElementsByClassName("vintage-bicycle-gallery")[0];
    $(gallery).empty();
}

function removeSlider(){
    bikeSliders = [];
    var slider = document.getElementsByClassName("slider")[0];
    $(slider).empty();
}

(function () {
    addGallery();
    addSlider();
})();