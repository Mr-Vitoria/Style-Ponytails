const portfolioImages = [
    "assets/img/portfolio/first.png",
    "assets/img/portfolio/second.jpeg",
    "assets/img/portfolio/third.jpeg",
    "assets/img/portfolio/four.jpeg",
    "assets/img/portfolio/five.jpeg",
    "assets/img/portfolio/six.jpeg",
    "assets/img/portfolio/seven.jpeg",
    "assets/img/portfolio/eight.jpeg"
]

const portfolioList = document.getElementById("portfolioList");

for (const image of portfolioImages) {
    portfolioList.appendChild(getPortfolioImage(image));
}

function getPortfolioImage(content){
    let image = document.createElement("img");

    image.src = content;
    image.alt = "Портфолио";

    image.addEventListener("click", (ev) => {
        openImageModal(content);
    });

    return image;
}