const imageModal = document.getElementById("imageModal");
const imageModalContent = document.getElementById("imageContent");

function openImageModal(url){
    imageContent.src = url;
    imageModal.classList.add("open");
    document.body.classList.add("disable");
}

function closeImageModal(){
    imageModal.classList.remove("open");
    document.body.classList.remove("disable");
}