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

function removeGallery(){
    vintageBicycleGallery = [];
    var gallery = document.getElementsByClassName("vintage-bicycle-gallery")[0];
    $(gallery).empty();
}

(function () {
    addGallery();
})();