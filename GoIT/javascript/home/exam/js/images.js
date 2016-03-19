function getDataByQuery(){
    removeGallery();
    var searchInput = document.getElementsByClassName("search__form_input")[0];
    var query = searchInput.value;
    var pixabayImagesByQuery = getData(getUrlForImages(query),'');
    fillRandomImages(pixabayImagesByQuery);
    addGallery();
}
