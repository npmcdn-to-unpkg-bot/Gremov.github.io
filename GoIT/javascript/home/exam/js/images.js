function getDataByQuery(){
    removeGallery();
    var searchInput = document.getElementsByClassName("search__form_input")[0];
    var query = searchInput.value;
    var pixabayImagesByQuery = getData(getUrlForImages(query),'');
    fillRandomImages(pixabayImagesByQuery);
    addGallery();
}

var searchInput = document.getElementsByClassName("search__form_input")[0];

searchInput.onkeypress = pressed;

function pressed(e) {

    key = e.keyCode || e.which;

    if(key == 13) {
        getDataByQuery();
    }
}
