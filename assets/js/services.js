const serviceList = document.getElementById("serviceList");
const services = [
  {
    title: "Кмплексный уход",
    description: "Все необходимое для ухода за вашим питомцем включая стрижку.",
    items: [
        "Мытьё",
        "Кондиционирование",
        "Сушка",
        "Расчёсывание",
        "Стрижка",
        "Стрижка когтей с полировкой",
        "Выбривание шерсти между подушечками",
        "Уход за глазами и ушами"
    ],
  },
  {
    title: "Гигиенический уход",
    description: "Помоем, вычешем, почистим ушки, подстрижем когти",
    items: [
        "Мытье",
        "Кондиционирование",
        "Сушка",
        "Стрижка когтей с полировкой",
        "Выбривание шерсти между подушечками",
        "Окантовка лап и ушей",
        "Уход за глазами и ушами"
    ],
  },
  {
    title: "Услуги для кошек",
    description: "Услуги для кошек",
    items: [
        "Вычёсывание",
        "Стрижка когтей",
        "Уход за глазами и ушами",
        "Мытье в несколько этапов по типу шерсти",
        "Сушка"
    ],
  },
  {
    title: "Тримминг",
    description: "",
    items: [
        "Мытьё",
        "Кондиционирование",
        "Сушка",
        "Тримминг",
        "Стрижка когтей с полировкой",
        "Выбривание шерсти между подушечками",
        "Уход за глазами и ушами",
        "Стрижка по породе"
    ],
  },
  {
    title: "Экспресс линька",
    description: "",
    items: [
        "Мытьё",
        "Кондиционирование",
        "Сушка",
        "Вычёсывание",
        "Стрижка когтей с полировкой",
        "Выбривание шерсти между подушечками",
        "Уход за глазами и ушами"
    ],
  },
];

function initServiceList() {
    for (const service of services) {
        serviceList.appendChild(getServiceCard(service))
    }
}

function getServiceCard(service){
    let card = document.createElement("article");
    card.classList.add("card");

    let cardHeader = document.createElement("div");
    cardHeader.classList.add("header");
    
    let cardTitle = document.createElement("h3");
    cardTitle.textContent = service.title;

    let cardButton = document.createElement("button");
    cardButton.innerHTML = `<img src="assets/img/icons/plus.svg" alt="Открыть"/>`;

    cardHeader.appendChild(cardTitle);
    cardHeader.appendChild(cardButton);

    card.appendChild(cardHeader);
    card.innerHTML += `<div class="content">
                            <p>${service.description}</p>
                            <p>Этапы услуги:</p>
                            <ul>`;
    for (const item of service.items) {
        card.innerHTML += `<li>${item}</li>`;
    }
    card.innerHTML += `</ul></div>`;

    return card;
}