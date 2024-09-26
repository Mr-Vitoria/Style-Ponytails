const reviewList = document.getElementById("reviewList");
const reviews = [
  {
    user: {
      image: "assets/img/user.jpg",
      login: "Анастасия"
    },
    score: 5,
    description: "Как хозяйка куна в полном восторге от проделанной работы😍 у котика были колтуны, которые уже было не разобрать, плюс требовался профессиональный уход. Котик стал как с обложки, шерстка мягкая, блестящая, а пахнет🥰 колтуны по-максимуму все вычесали, а не вырезали. Девочки работали вдвоем, огромная благодарность🙏🏻 очень все понравилось, теперь приведем второго кота☺️"
  },
  {
    user: {
      image: "assets/img/user.jpg",
      login: "Дарья"
    },
    score: 5,
    description: "Хаски искупался в болоте и очень вонял, искали запись день в день. Ребята пошли навстречу и вписали нас. К собаке отнеслись очень внимательно, пес вышел от них в прекрасном настроении. Вычесали его так, что вот уже на третий день он почти не сыпет шерстью - что для него нонсенс. Пахнет и выглядит просто прекрасно, а на ощупь как в щенячестве. Обязательно придем еще! Спасибо специалистам за внимание и заботу. А потом еще вкусняшку дали и попить."
  },
  {
    user: {
      image: "assets/img/user.jpg",
      login: "Елена"
    },
    score: 5,
    description: "Сегодня Нэнси посетила Pro Grooming и осталась очень довольная. Прекрасная, активная, девушка, всю лишнюю шерсть убрала с кошки и очень вкусными на запах помыла ее. Теперь Нэнси как пёрышко с шелковистой шерстью."
  },
  {
    user: {
      image: "assets/img/user.jpg",
      login: "Сергей"
    },
    score: 5,
    description: "Во первых огромное спасибо прекрасному мастеру Елене!!!пёс практически просится к ней сам)))каждый визит только положительные эмоции и отличный результат!!!так что места лучше думаю не найти…"
  },
  {
    user: {
      image: "assets/img/user.jpg",
      login: "Мария"
    },
    score: 5,
    description: "Вычесали и постригли когти. Собака капризная, но девочки нашли общий язык ❤️ рекомендую!"
  },
  {
    user: {
      image: "assets/img/user.jpg",
      login: "Игорь"
    },
    score: 5,
    description: "Спасибо Вам за стрижку моего Чарли, я доволен он тоже шлёт вам привет советую данное место для стрижек животных и тд."
  },
];

function initReviewList() {
    for (const review of reviews) {
        reviewList.appendChild(getReviewCard(review))
    }
}

function getReviewCard(review){
    let card = document.createElement("article");
    card.classList.add("card");

    card.innerHTML = `<div class="userInfo">
                        <img src="${review.user.image}" alt="${review.user.login}" />
                        <div class="textContainer">
                            <p>${review.user.login}</p>
                            <div class="starContainer">
                                <img src="assets/img/icons/star.svg" alt="Звезда" />
                                <img src="assets/img/icons/star.svg" alt="Звезда" />
                                <img src="assets/img/icons/star.svg" alt="Звезда" />
                                <img src="assets/img/icons/star.svg" alt="Звезда" />
                                <img src="assets/img/icons/star.svg" alt="Звезда" />
                            </div>
                        </div>
                    </div>
                    <div class="content">
                        <p>${review.description}</p>
                    </div>`;
}

initReviewList();