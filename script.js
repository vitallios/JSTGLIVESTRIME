const navBTN = document.querySelector("#menu-btn");
const menu = document.querySelector(".menu");
const menuListItem = document.querySelector("#menu__list-item");
const menuList = document.querySelector("#menu__list");
let iframeSeaction = document.querySelector("#videoPleer");
let wrapPleer = document.querySelector(".wrap");
const loader = document.querySelector(".loader");
const rundomFilms = document.querySelector("#rundomFilms");
const btnToHome = document.querySelector("#btnToHome");
const MenuBtnToHome = document.querySelector("#MenuBtnToHome");
const Strimlists = document.querySelector("#listStrimes");
// Тв программы
const catalogLinks = [
  {
    id: 1,
    name: "Regby",
    link: "https://rutube.ru/play/embed/0369d61bfb8ce126d15fada863cfd08f",
    // link: '2',
  },
  {
    id: 2,
    name: "Hockey",
    link: "https://rutube.ru/play/embed/7a485ef5da9fe50ba939f36ca3e6ed96",
    // link: '1',
  },
  {
    id: 3,
    name: "NBA",
    link: "https://rutube.ru/play/embed/876cf3628c698e956de40c1c911b0c5f",
    // link: '1',
  },
  {
    id: 3,
    name: "Football Premier League",
    link: "https://rutube.ru/play/embed/e6fa77441a3b019526498775c5a5b9dc",
    // link: '1',
  },
];
// Фильмы
const randomFilms = [
  {
    id: 1,
    name: "Битлджус Битлджус | Beetlejuice Beetlejuice (2024)",
    link: `<iframe
    width="720"
    height="405"
    src="https://rutube.ru/play/embed/0b87b1557018d8ff86c86cf3492ad5a8"
    frameBorder="0"
    allow="clipboard-write; autoplay"
    webkitAllowFullScreen
    mozallowfullscreen
    allowFullScreen
  ></iframe>
`
    // link: '2',
  },
  {
    id: 2,
    name: "Чужой: Ромул / Alien: Romulus (2024)",
    link: `
      <iframe
        width="720"
        height="405"
        src="https://rutube.ru/play/embed/edf4662bfdf97433ced02ab6154313c4"
        frameBorder="0"
        allow="clipboard-write; autoplay"
        webkitAllowFullScreen
        mozallowfullscreen
        allowFullScreen
      ></iframe>
    `,
    // link: '1',
  },
  {
    id: 3,
    name: "Дэдпул и Росомаха (2024)",
    link: `
      <iframe
        width="720"
        height="405"
        src="https://rutube.ru/play/embed/f893c0764662db0b17b277d15d6e0871"
        frameBorder="0"
        allow="clipboard-write; autoplay"
        webkitAllowFullScreen
        mozallowfullscreen
        allowFullScreen
      ></iframe>
    `,
    // link: '1',
  },
  {
    id: 4,
    name: "Джокер (2019)",
    link: `
      <iframe
        width="720"
        height="405"
        src="https://rutube.ru/play/embed/81e784b6eba4c9d3d0539536d7e58243"
        frameBorder="0"
        allow="clipboard-write; autoplay"
        webkitAllowFullScreen
        mozallowfullscreen
        allowFullScreen
      ></iframe>
    `,
    // link: '1',
  },
  {
    id: 5,
    name: "Криминальное чтиво (1994)",
    link: `
      <iframe
        width="720"
        height="405"
        src="https://rutube.ru/play/embed/b655f8af33deef0514481b2bb39b90e2"
        frameBorder="0"
        allow="clipboard-write; autoplay"
        webkitAllowFullScreen
        mozallowfullscreen
        allowFullScreen
      ></iframe>
    `,
    // link: '1',
  },
  {
    id: 6,
    name: "Оппенгеймер (2023)",
    link: `
      <iframe
        width="720"
        height="405"
        src="https://rutube.ru/play/embed/ffe77a61fb1ab119c33638900d8a77e4"
        frameBorder="0"
        allow="clipboard-write; autoplay"
        webkitAllowFullScreen
        mozallowfullscreen
        allowFullScreen
      ></iframe>
    `,
    // link: '1',
  },
  {
    id: 7,
    name: "Дом у дороги (2024)",
    link: `
      <iframe
        width="720"
        height="405"
        src="https://rutube.ru/play/embed/22bd521930719eedd02383e9c81b16e2"
        frameBorder="0"
        allow="clipboard-write; autoplay"
        webkitAllowFullScreen
        mozallowfullscreen
        allowFullScreen
      ></iframe>
    `,
    // link: '1',
  },
  {
    id: 8,
    name: "Меч короля Артура (2017)",
    link: `
      <iframe
        width="720"
        height="405"
        src="https://rutube.ru/play/embed/129b5b143a47f3d208b5aa151c72780b"
        frameBorder="0"
        allow="clipboard-write; autoplay"
        webkitAllowFullScreen
        mozallowfullscreen
        allowFullScreen
      ></iframe>
    `,
    // link: '1',
  },
];



// Трансляции которые будут
let transLinks = [
  {
    id: 0,
    name: `Челбаскет (Челябинск) - ЦСКА-2 (Москва)`,
    link: `<iframe src="https://vk.com/video_ext.php?oid=-200149158&id=456275397&hash=e77cd508bc6594c2"  frameborder="0" allowfullscreen="1" allow="autoplay; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
    data: "2024.11.22",
    time: "14:00",
    img: "",
    premium: false,
    active: 0,
  },
 
];

// if (
//   window.innerWidth < 900 &&
//   window.userAgentData.mobile
// ) {

// Открытие и закрытие меню
const burgerSvg = () => {
  navBTN.classList.toggle("active");
  menu.classList.toggle("active");
  navBTN.firstElementChild.children[0].attributes[2].value =
    menu.classList.contains("active")
      ? "M6 18L18 6M6 6l12 12"
      : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5";
};

// Прием ссылки и запуск плеера
const openVideoIFrame = (linkVideo) => {
  wrapPleer.innerHTML = `${linkVideo}`;
  // document.querySelector("#videoPleer").play();
  // burgerSvg();
};
// загрузка контента
// document.addEventListener("DOMContentLoaded", () => {
window.addEventListener("load", () => {
  document.querySelector(".content").style.opacity = "0";

  if (!window.onload) {
    setTimeout(() => {
      loader.style.display = "none";
      document.querySelector(".content").style.opacity = "1";
    }, 3000);
  }
});

// Получение текужего времени и даты
let Data = new Date();
const hours = Data.getHours() > 9 ? Data.getHours() : "0" + Data.getHours();
const minutes =
  Data.getMinutes() > 9 ? Data.getMinutes() : "0" + Data.getMinutes();

// формат отображения времени для сравнения с временем показа
const time = `${hours}:${minutes}`;
// Формат отображения даты для сравнения с датой показа
const day = `${Data.getUTCFullYear()}.${
  Data.getUTCMonth() + 1 > 9
    ? Data.getUTCMonth() + 1
    : "0" + (Data.getUTCMonth() + 1)
}.${
  Data.getUTCDate() > 9 ? Data.getUTCDate() : "0" + Number(Data.getUTCDate())
}`;

// console.log(link.data);

// при нажатии, открывается home страница
btnToHome.addEventListener("click", () => {
  document.querySelector(".wrap__pages").classList.add("info__none");
});

// Обновление и возврат на страницу Info
MenuBtnToHome.addEventListener("click", () => {
  window.location.reload();
});

// при нажатии, запускается рандомный фильм из списка
rundomFilms.addEventListener("click", () => {
  const randomLink =
    randomFilms[Math.floor(Math.random() * randomFilms.length)];
  openVideoIFrame(randomLink.link);
  burgerSvg();
});

// при нажатии, открывается меню
navBTN.addEventListener("click", () => {
  burgerSvg();
});

// в открытом меню формируется список ссылок
catalogLinks.forEach((item) => {
  const li = document.createElement("li");
  li.classList.add("menu__list-item");
  li.innerHTML = `<button class="menu__list-link" id="${item.id}" name="${item.name}">${item.name}</butt>`;
  menuList.appendChild(li);

  li.firstChild.addEventListener("click", () => {
    console.log('11');
    openVideoIFrame(item.link);
    
    burgerSvg();
  });
});

// ListStrime
transLinks.forEach((item) => {
  const li = document.createElement("li");
  //
  li.classList.add("list__strim-item");
  li.setAttribute("data", item.data);
  li.setAttribute("id", item.id);
  li.setAttribute("time", item.time);
  li.setAttribute("premium", item.premium);
  li.setAttribute("img", item.img);
  li.setAttribute("href", item.link);
  li.setAttribute("active", item.active);



  li.innerHTML = `<button
  class="list__strim-link"
  id="${item.id}"
  name="${item.name}">
  <h3>
  ${item.name}
  </h3>
  <span>
  Начало в - ${item.time}
  </span>
  </butt>`;

  // выводим сегоднишние трансляции
  const itemAtrinut = li.attributes;
  // все сегодняшние трансляции
  if (itemAtrinut.data.value === day) {
    // время старта трансляции
    const timeStart = `${Number(itemAtrinut.time.value.split(":")[0])+":"+Number(itemAtrinut.time.value.split(":")[1])}`;
    // время окончания трансляции
    const timeFinish=`${Number(itemAtrinut.time.value.split(":")[0])+2+":"+Number(itemAtrinut.time.value.split(":")[1])}`;

    if (Number(timeFinish.split(":")[0]) > Number(time.split(":")[0]))
      {
        itemAtrinut.active.value = 1;
      }

    // проверка старта и окончания трансляции
    if (timeStart <= time && timeFinish >= time) {
      li.children[0].classList.add("active");
      li.children[0].children[1].textContent = `Трансляция началась`;
      itemAtrinut.active.value = 2;
      li.addEventListener("click", () => {
        openVideoIFrame(itemAtrinut.href.value);
      });
    }
    if (Number(timeFinish.split(":")[0]) <= Number(time.split(":")[0])) {
      li.children[0].children[1].textContent = `Трансляция закончилась`;
      itemAtrinut.active.value = 0;
      li.children[0].style.color = "var(--disableGraay)";
      li.children[0].setAttribute("disabled", true);
    }

    // li.attributes.active.value.sort();
    Strimlists.insertBefore(li, Strimlists.lastChild);
    // if (li.attributes.active.value == "0") {
    //   Strimlists.insertBefore(li, Strimlists.children[0]);
    // }
    // if (li.attributes.active.value == "2") {
    //   Strimlists.insertBefore(li, Strimlists.children[0]);
    // } else {
    //   Strimlists.insertBefore(li, Strimlists.lastChild);
    // }
  // } else {
    // Strimlists.insertBefore(li, Strimlists.lastChild);
  }

  // for (const key in item) {
  //   console.log(key.id);
  // }


});
// console.log(Strimlists.children);

// const tt = [1,5,2,9,6]

// tt.sort((a, b) => {
//   return a - b
// })

// console.dir('ok');
// console.dir(window.userAgentData.mobile);

// } else {
//   document.querySelector(".container").innerHTML = `<h1>Сори, только для мобильных устройств</h1>`;
//   setTimeout(() => {
//       window.location.reload();
//   }, 5000);
// }
