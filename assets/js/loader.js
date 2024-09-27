document.addEventListener("DOMContentLoaded", (ev) => {
    setTimeout(() => {
        document.body.classList.remove("disable");
        document.getElementById("loader").classList.add("hidden");
    }, 2000);
})