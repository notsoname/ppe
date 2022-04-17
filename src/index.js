import "./styles/index.scss";
let platform = require('platform')


const questions = [
  {
    question: "Пользовались ли Вы телефоном Samsung?",
    options: ["Да", "Нет"],
    name: "usePhone",
    type: "radio",
    class: "radio checkbox",
    ratings: [],
    classwrapper: "form-control",
    omni: ['men', 'woman']
  },
  {
    question: "Основываясь на Вашем опыте пользования смартфоном Samsung, насколько вероятно, что Вы рекомендуете эту марку смартфонов другу или коллеге, по 10-балльной шкале, где 1-\"Точно не буду рекомендовать\", а 10-\"Точно буду рекомендовать\"?",
    options: ["1 - Точно НЕ буду рекомендовать", "2", "3", "4", "5 - Не уверены", "6", "7", "8", "9", "10 - Точно буду рекомендовать"],
    name: "phoneRating",
    type: "radio",
    ratings: [],
    class: "radio checkbox",
    classwrapper: "form-control",
    omni: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  },
  {
    question: "Почему Вы снизили оценку?",
    options: ["Не понравились технические особенности", "Есть трудности в процессе взаимодействия со смартфоном", "Пользование смартфоном порой негативно влияет на мою жизнь"],
    name: "lowRatingReason",
    ratings: [],
    type: "checkbox",
    class: "radio checkbox",
    classwrapper: "form-control",
    omni: ["lowRatingReason"]
  },
  {
    question: "Какая из технических особенностей не оправдала ваши ожидания?",
    options: [
      "Камера",
      "Батарея",
      "Память",
      "Производительность",
      "Интерфейс",
      "Экран"
    ],
    name: "technicalFeatures",
    ratings: [],
    type: "checkbox",
    class: "radio checkbox",
    classwrapper: "form-control",
    omni: ["camera", "battery", "memory", "performance", "interface", "display"]
  },
  {
    question:
      "С какими трудностями или неудобными моментами Вы столкнулись при взаимодействии с телефоном?",
    options: [
      "Непонятный интерфейс", 
      "Недостаточно памяти", 
      "Не знаю как перенести данные на компьютер", 
      "Не знаю как оградить ребенка от вредного контента", 
      "Не знаю как обезопасить свои данные", 
      "Отвлекающие уведомления в процессе игр", 
      "Неудобно выполнять связанные с работой задачи", 
      "Боюсь не вернуть телефон в случае потери или кражи"],
    name: "problemsPhone",
    ratings: [],
    type: "checkbox",
    class: "radio checkbox",
    classwrapper: "form-control",
    omni: ["1", "2", "3", "4", "5", "6 and above"],
  },
  {
    question:
      "Каким образом телефон негативно влияет на вашу жизнь?",
    options: [
      "Я стал слишком много времени тратить на телефон",
      "Я отвлекаюсь на уведомления и мне трудно сосредоточиться ",
      "У меня устают глаза после длительного пользования смартфоном",
      "У меня бессонница после длительного пользования смартфоном вечером",
    ],
    ratings: [],
    name: "negativeLife",
    type: "checkbox",
    class: "radio checkbox",
    classwrapper: "form-control",
    omni: ["wasteTime", "no clothes", "no tv", "no car"]
  },
  {
    question: "Что именно вам не нравится в камере?",
    options: [
      "Фотографии нечеткие, размытые",
      "Недостаточно насыщенные цвета фотографий",
      "На фотографиях слишком много света",
      "Фотографии затемнены",
      "Не нравится ночная съемка",
      "Непривычная цветопередача фотографий",
      "Чтобы сделать нужный снимок, приходится много раз фотографировать",
      "Не знаю как включить стабилизацию видео",
      "Не знаю как использовать функции для монтажа видео",
    ],
    ratings: [],
    name: "cameraReason",
    type: "checkbox",
    class: "radio checkbox",
    classwrapper: "form-control",
    omni: []
  },
  {
    question: "Что именно вам не нравится в батарее телефона?",
    options: [
      "Слишком быстро разряжается",
      "Телефон греется во время зарядки",
      "Раздражает необходимость заряжать телефон, часы и наушники",
    ],
    name: "batteryReason",
    ratings: [],
    type: "checkbox",
    class: "radio checkbox",
    classwrapper: "form-control",
    omni: []
  },
  {
    question:
      "Какие проблемы с памятью телефона у вас возникали?",
    options: [
      "Слишком быстро заполняется",
      "Объема памяти телефона недостаточно ",
      "Не знаю как найти сохраненный файл",
      "Не знаю как подключить облачное хранилище",
    ],
    name: "memoryReason",
    ratings: [],
    type: "checkbox",
    class: "radio checkbox",
    classwrapper: "form-control",
    omni: []
  },
  {
    question:
      "Что вам не нравится в производительности телефона?",
    options: [
      "Приложения открываются с задержкой",
      "Не могу работать в двух и более приложениях одновременно ",
      "Приложения зависают во время работы",
      "Телефон перезагружается самостоятельно",
      "Подвисают игры / видео",
    ],
    name: "perfomanceReason",
    type: "checkbox",
    ratings: [],
    class: "radio checkbox",
    classwrapper: "form-control",
    omni: []
  },
  {
    question:
      "Какие сложности, связанные с интерфейсом, у вас возникали?",
    options: [
      "Сложно разобраться, что и где находится",
      "Непривычное расположение кнопок, команд",
      "Не знаю куда сохраняются мои файлы",
      "Не нравится дизайн иконок приложений",
      "Не знаю как настроить телефон под мои предпочтения",
      'Не знаю как пользоваться "двойным экраном"',
      "Неприятно вечером смотреть на яркий экран",
      "",
    ],
    name: "interfaceReason",
    type: "checkbox",
    ratings: [],
    class: "radio checkbox",
    classwrapper: "form-control",
    omni: []
  },
  {
    question:
      "Что разочаровало вас в экране смартфона?",
    options: [
      "Качество картинки не совпало с ожидаемым",
      "Не знаю как настроить экран так, чтобы он был удобен для меня",
      "Слишком яркий экран, глаза устают от долгого просмотра",
      "Не могу управлять смартфоном одной рукой",
      "Недостаточно яркий экран",
      "",
      ""
    ],
    name: "screenReason",
    type: "checkbox",
    class: "radio checkbox",
    classwrapper: "form-control",
    ratings: [],
    omni: [""]
  },
  {
    question:
      'Что вам понравилось в телефоне Samsung больше всего?',
    options: [
      "Камера",
      "Батарея",
      "Производительность",
      "Память",
      "Дизайн",
      "Удобно держать в руке",
      "Звук",
      "Бренд",
      "Возможность складывать телефон в компактный размер",
    ],
    ratings: [],
    name: "likeSamsung",
    type: "checkbox",
    class: "radio checkbox",
    classwrapper: "form-control",
    omni: []
  },
  {
    question: "Что вам хотелось бы улучшить в этом смартфоне?",
    options: [
      "Батарею",
      "Экран",
      "Внешний вид",
      "Процессор",
      "Аудиосистему",
      "Память",
      "Камеру",
    ],
    name: "improvePhone",
    ratings: [],
    type: "checkbox",
    class: "radio checkbox",
    classwrapper: "form-control",
    omni: []
  },
  {
    question: "Ваш возраст?",
    options: ["18-24", "25-34", "35-44", "45-54", "55-64", "65 и выше"],
    name: "age",
    type: "radio",
    ratings: [],
    class: "radio checkbox",
    classwrapper: "form-control",
    omni: ["18-24", "25-34", "35-44", "45-54", "55-64", "65 and above"],
  },
  {
    question: "В каком городе вы живете?",
    options: [""],
    name: "city",
    ratings: [],
    type: "select",
    class: "radio survey-textInput",
    omni: ["choosed city"]
  },
  {
    question: "Ваше семейное положение",
    options: [
      "Живу один (одна)",
      "Женат / замужем / гражданский брак",
    ],
    name: "martialStatus",
    ratings: [],
    type: "radio",
    class: "radio checkbox",
    classwrapper: "form-control",
    omni: ["single", "married"]
  },
  {
    question:
      "Какое высказывание наилучшим образом описывает положение Вашей семьи?",
    options: [
      "Нам не всегда хватает денег даже на еду",
      "У нас достаточно денег на еду, но купить одежду для нас серьезная проблема",
      "Нам хватает на еду, одежду и мелкую бытовую технику, но купить телевизор, холодильник или стиральную машину нам будет сложно ",
      "Мы можем купить основную бытовую технику, но на машину нам не хватит ",
      "Нам хватит денег на все, включая машину, кроме таких дорогих приобретений, как квартира или загородный дом",
      "У нас нет никаких финансовых затруднений. При необходимости мы можем купить квартиру или дом",
    ],
    ratings: [],
    name: "familySituation",
    type: "radio",
    class: "radio checkbox",
    classwrapper: "form-control",
    omni: ["no money", "no clothes", "no tv", "no car", "no home", "have home"]
  },
  {
    question:
      "Какую информацию Вы хотели бы получать от Samsung?",
    options: [
      "Информацию о новинках",
      "Информацию о промо акциях - специальных выгодных предложениях",
      "Информацию о скидках",
      "Советы и рекомендации по пользованию вашими устройствами",
      "Персонализированную информацию о скидках, акциях и прочих новостях",
      "Информацию о новых технологиях и инновациях",
      "Сравнительный анализ-ревью разных моделей",
      "Другое <input class='q18' placeholder='Впишите'>",
    ],
    ratings: [],
    name: "wantInformation",
    type: "checkbox",
    class: "radio checkbox",
    classwrapper: "form-control",
    omni: []
  },
  {
    question:
      "Как часто вам было бы удобно получать информацию, отмеченную Вами выше?",
    options: [
      "1 раз в неделю",
      "1 раз в 2 недели",
      "1 раз в месяц",
      "1 раз в 2 месяца",
      "1 раз в квартал",
      "Другое <input class='q19' placeholder='Впишите'>",
    ],
    ratings: [],
    name: "informationTime",
    type: "radio",
    class: "radio checkbox",
    classwrapper: "form-control",
    omni: []
  },
  {
    question:
      "Что бы вы хотели получить в подарок, покупая новый смартфон?",
    options: [
      "Запишите <input class='q20' placeholder='Впишите'>",
    ],
    ratings: [],
    name: "present",
    type: "radio",
    class: "radio checkbox",
    classwrapper: "form-control",
    omni: []
  },
  {
    question: "Спасибо за участие",
    special: false,
    options: "",
  },
  {
    question:
      "Какие сложности, связанные с интерфейсом, у вас возникали?",
    options: [
      "Сложно разобраться, что и где находится",
      "Непривычное расположение кнопок, команд",
      "Не знаю куда сохраняются мои файлы",
      "Не нравится дизайн иконок приложений",
      "Не знаю как настроить телефон под мои предпочтения",
      'Не знаю как пользоваться "двойным экраном"',
      "Неудобно смотреть сториз в Инстаграм",
      "Неприятно вечером смотреть на яркий экран"
    ],
    name: "interfaceReason",
    type: "checkbox",
    ratings: [],
    class: "radio checkbox",
    classwrapper: "form-control",
    omni: []
  },
  {
    question:
      "Что разочаровало вас в экране смартфона?",
    options: [
      "В разложенном виде видна полоса",
      "Экран в сложенном виде оказался небольшим ",
      "Качество картинки не совпало с ожидаемым",
      "Не знаю как настроить экран так, чтобы он был удобен для меня",
      "Слишком яркий экран, глаза устают от долгого просмотра",
      "Не могу управлять смартфоном одной рукой",
      "Недостаточно яркий экран"
    ],
    name: "screenReason",
    type: "checkbox",
    class: "radio checkbox",
    classwrapper: "form-control",
    ratings: [],
    omni: [""]
  },
];
const questionsContainer = document.querySelector(".survey-wrapper");
let questionNumber = 0;
let surveyQuestionNumber = 0;

function loadQuestions() {
  for (let i = questionNumber; i < questions.length; i++) {
    questionsContainer.innerHTML = `
      <h4 class="survey-questionNumber">Вопрос ${surveyQuestionNumber + 1}/${questions.length - 1}</h4>
      <div class="survey-question">${questions[questionNumber].question}</div>
      <div class="survey-questions">
      </div>
      <button data-omni-type="microsite" data-omni="kz_ru:offer:survey-multidevice-experience:nextquestion${surveyQuestionNumber + 1}" class="cta cta--outlined cta--black survey-next">Следующий вопрос</button>
      `;
  }
  createOptions();
}

function createOptions() {
  const surveyQuestions = document.querySelector(".survey-questions");
  if (!questions[questionNumber].special) {
    for (let i = 0; i < questions[questionNumber].options.length; i++) {
      if (questions[questionNumber].type == "select") {
        const block = `
        <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/survey-multidevice-experience/select.png" alt="select" class="selectImg"></img>
        <select id="city-selector" name="form-city" class='radio' required>
    <option value="" selected data-default="true">Выберите из списка</option>
    <option value="Нур-Султан">Нур-Султан</option>
    <option value="Алматы">Алматы</option>
    <option value="Аксай">Аксай</option>
    <option value="Аксу">Аксу</option>
    <option value="Аксукент">Аксукент</option>
    <option value="Актау">Актау</option>
    <option value="Актобе">Актобе</option>
    <option value="Алтай (бывш. Зыряновск)">Алтай (бывш. Зыряновск)</option>
    <option value="Аральск">Аральск</option>
    <option value="Арыс">Арыс</option>
    <option value="Атырау">Атырау</option>
    <option value="Балхаш">Балхаш</option>
    <option value="Есик">Есик</option>
    <option value="Жанаозен">Жанаозен</option>
    <option value="Жаркент">Жаркент</option>
    <option value="Жезказган">Жезказган</option>
    <option value="Жетысай">Жетысай</option>
    <option value="Житикара">Житикара</option>
    <option value="Кандыагаш">Кандыагаш</option>
    <option value="Капшагай">Капшагай</option>
    <option value="Караганда">Караганда</option>
    <option value="Каскелен">Каскелен</option>
    <option value="Кокшетау">Кокшетау</option>
    <option value="Костанай">Костанай</option>
    <option value="Кульсары">Кульсары</option>
    <option value="Кызылорда">Кызылорда</option>
    <option value="Ленгер">Ленгер</option>
    <option value="Макинск">Макинск</option>
    <option value="Павлодар">Павлодар</option>
    <option value="Петропавловск">Петропавловск</option>
    <option value="Риддер">Риддер</option>
    <option value="Сарыагаш">Сарыагаш</option>
    <option value="Семей">Семей</option>
    <option value="Степногорск">Степногорск</option>
    <option value="Талгар">Талгар</option>
    <option value="Талдыкурган">Талдыкурган</option>
    <option value="Тараз">Тараз</option>
    <option value="Темиртау">Темиртау</option>
    <option value="Туркестан">Туркестан</option>
    <option value="Уральск">Уральск</option>
    <option value="Усть-Каменогорск">Усть-Каменогорск</option>
    <option value="Хромтау">Хромтау</option>
    <option value="Шар">Шар</option>
    <option value="Шахтинск">Шахтинск</option>
    <option value="Шиели">Шиели</option>
    <option value="Шымкент">Шымкент</option>
    <option value="Экибастуз">Экибастуз</option>
    <option value="other">Другой город</option>
</select>
        `;
        surveyQuestions.insertAdjacentHTML("beforeend", block);
      } else if (questions[questionNumber].name == 'interfaceReason' 
      && (platform.product == 'SM-F926B' 
      || platform.product == 'SM-F926U'
      || platform.product == 'SM-F926U1'
      || platform.product == 'SM-G955U' 
      || platform.product == 'SM-F900F'
      || platform.product == 'SM-F900U1'
      || platform.product == 'SM-F9000'
      || platform.product == 'SM-F900W'
      || platform.product == 'SM-F916B'
      || platform.product == 'SM-F916U'
      || platform.product == 'SM-F916N'
      || platform.product == 'SM-F9160'
      )) {
        let block;
        block = `
        <label class="${questions[22].classwrapper}">
          <input data-omni-type="microsite" data-omni="${questions[22].omni[i]}" required type="${questions[22].type}" data-ratings=${questions[22].ratings[i]} name="${questions[22].name}" value="${questions[22].options[i]}" class="${questions[22].class}" />
          <div class="option"><div class='option2'>${questions[22].options[i]}</div></div>
        </label>
        `;
        surveyQuestions.insertAdjacentHTML("beforeend", block);
      } else if (questions[questionNumber].name == 'screenReason' 
      && (platform.product == 'SM-F711B'
      || platform.product == "SM-F707B"
      || platform.product == "SM-F707U"
      || platform.product == "SM-F707U1"
      || platform.product == "SM-F707UN"
      || platform.product == "SM-F707U0"
      || platform.product == "SM-F707U0Q"
      || platform.product == "SM-F707U0W"
      || platform.product == "SM-F711B"
      || platform.product == "SM-F711U"
      || platform.product == "SM-F711U1"
      || platform.product == 'SM-F926B'  
      || platform.product == 'SM-F926U'
      || platform.product == 'SM-F926U1'
      || platform.product == 'SM-G955U' 
      || platform.product == 'SM-F900F'
      || platform.product == 'SM-F900U1'
      || platform.product == 'SM-F9000'
      || platform.product == 'SM-F900W'
      || platform.product == 'SM-F916B'
      || platform.product == 'SM-F916U'
      || platform.product == 'SM-F916N'
      || platform.product == 'SM-F9160'

      )) {
        let block;
        block = `
        <label class="${questions[23].classwrapper}">
          <input data-omni-type="microsite" data-omni="${questions[23].omni[i]}" required type="${questions[23].type}" data-ratings=${questions[23].ratings[i]} name="${questions[23].name}" value="${questions[23].options[i]}" class="${questions[23].class}" />
          <div class="option"><div class='option2'>${questions[23].options[i]}</div></div>
        </label>
        `;
        surveyQuestions.insertAdjacentHTML("beforeend", block);
      } else {
        let block;
        if (questions[questionNumber].options[i] == '') {
          console.log('s')
          block = ''
          return
        }
        block = `
        <label class="${questions[questionNumber].classwrapper}">
          <input data-omni-type="microsite" data-omni="${questions[questionNumber].omni[i]}" required type="${questions[questionNumber].type}" data-ratings=${questions[questionNumber].ratings[i]} name="${questions[questionNumber].name}" value="${questions[questionNumber].options[i]}" class="${questions[questionNumber].class}" />
          <div class="option"><div class='option2'>${questions[questionNumber].options[i]}</div></div>
        </label>
        `;
        if (
          questions[questionNumber].options[i] == "Ничего из перечисленного"
        ) {
          block = `
        <label class="${questions[questionNumber].classwrapper}">
          <input data-omni-type="microsite" data-omni="${questions[questionNumber].omni[i]}" required type="${questions[questionNumber].type}" name="${questions[questionNumber].name}" value="${questions[questionNumber].options[i]}" class="radio unselect" />
          <div class="option"><div class='option2'>${questions[questionNumber].options[i]}</div></div>
        </label>
        `;
        }
        if (
          questions[questionNumber].options[i] == "Другое"
        ) {
          block = `
        <label class="${questions[questionNumber].classwrapper}">
          <input data-omni-type="microsite" data-omni="${questions[questionNumber].omni[i]}" required type="${questions[questionNumber].type}" name="${questions[questionNumber].name}" value="${questions[questionNumber].options[i]}" class="radio unselect" />
          <div class="option"><div class='option2'>${questions[questionNumber].options[i]}</div></div>
        </label>
        `;
        }
        surveyQuestions.insertAdjacentHTML("beforeend", block);
      }
    }
  } else {
    let block = `
        <div class="survey-special">
            <h4>${questions[questionNumber].options}</h4>
            <p>${questions[questionNumber].text}</p>
        </div>
    `;
    if (
      questions[questionNumber].text &&
      questions[questionNumber].text.length > 1
    ) {
      block = `
      <div class="survey-special">
          <h4>${questions[questionNumber].options}</h4>
            <p>1.${questions[questionNumber].text[0]}</p>
            <p>2.${questions[questionNumber].text[1]}</;i>
      </div>
    `;
    }
    surveyQuestions.insertAdjacentHTML("beforeend", block);
  }
  if (questionNumber == 21) {
    questionsContainer.innerHTML = `
      <h4 class="thankyou">Cпасибо за ваши ответы!</h4>
    `
  }
}
loadQuestions();

const formData = {
  simple: [],
  lowRatingReason: [],
  technicalFeatures: [],
  cameraReason: [],
  batteryReason: [],
  memoryReason: [],
  perfomanceReason: [],
  interfaceReason: [],
  screenReason: [],
  improvePhone: [],
  negativeLife: [],
  problemsPhone: [],
  likeSamsung: [],
  age: [],
  city: [],
  martialStatus: [],
  familySituation: [],
  wantInformation: [],
  informationTime: [],
  present: []
};

function pushToData() {
  const radios = document.querySelectorAll(".radio");
  for (let i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      if (radios[i].name == 'lowRatingReason') {
        formData.lowRatingReason.push(radios[i].value)
      }
      if (radios[i].name == 'technicalFeatures') {
        formData.technicalFeatures.push(radios[i].value)
      }
      if (radios[i].name == 'negativeLife') {
        formData.negativeLife.push(radios[i].value)
      }
      if (radios[i].name == 'problemsPhone') {
        formData.problemsPhone.push(radios[i].value)
      }
      if (radios[i].name == 'cameraReason') {
        formData.cameraReason.push(radios[i].value)
      }
      if (radios[i].name == 'batteryReason') {
        formData.batteryReason.push(radios[i].value)
      }
      if (radios[i].name == 'memoryReason') {
        formData.memoryReason.push(radios[i].value)
      }
      if (radios[i].name == 'perfomanceReason') {
        formData.perfomanceReason.push(radios[i].value)
      }
      if (radios[i].name == 'interfaceReason') {
        formData.interfaceReason.push(radios[i].value)
      }
      if (radios[i].name == 'screenReason') {
        formData.screenReason.push(radios[i].value)
      }
      if (radios[i].name == 'likeSamsung') {
        formData.likeSamsung.push(radios[i].value)
      }
      if (radios[i].name == 'improvePhone') {
        formData.improvePhone.push(radios[i].value)
      }
      if (radios[i].name == 'age') {
        formData.age.push(radios[i].value)
      }
      if (radios[i].name == 'martialStatus') {
        formData.martialStatus.push(radios[i].value)
      }
      if (radios[i].name == 'familySituation') {
        formData.familySituation.push(radios[i].value)
      }
      if (radios[i].name == 'wantInformation') {
        if (radios[i].value == "Другое <input class='q18' placeholder='Впишите'>") {
          radios[i].value = document.querySelector('.q18').value
        }
        formData.wantInformation.push(radios[i].value)
      }
      if (radios[i].name == 'informationTime') {
        if (radios[i].value == "Другое <input class='q19' placeholder='Впишите'>") {
          radios[i].value = document.querySelector('.q19').value
        }
        formData.informationTime.push(radios[i].value)
      }
      if (radios[i].name == 'present') {
        if (radios[i].value == "Другое <input class='q20' placeholder='Впишите'>") {
          radios[i].value = document.querySelector('.q20').value
        }
        formData.present.push(radios[i].value)
      }
      formData.simple.push(radios[i].value);
    } else if (radios[i].id === "city-selector") {
      formData.city.push(radios[i].value);
    }
  }
}

function rules() {
  if (questionNumber == 1) {
    if (formData.simple.includes('Нет')) {
      questionNumber = 14
      surveyQuestionNumber = 14
    }
  }

  if (questionNumber == 2) {
    if (formData.simple.includes('10 - Точно буду рекомендовать')) {
      questionNumber = 12
      surveyQuestionNumber = 12
    } else if (formData.simple.includes('9')) {
      questionNumber = 12
      surveyQuestionNumber = 12 
    } else {
      questionNumber = 2
      surveyQuestionNumber = 2
    }
  }

  if (questionNumber == 3) {
    if (!formData.lowRatingReason.includes('Не понравились технические особенности') && formData.simple.includes('Есть трудности в процессе взаимодействия со смартфоном')) {
      questionNumber = 4
    } else if (formData.lowRatingReason.includes('Не понравились технические особенности')) {
      questionNumber = 3
    } else if (!formData.lowRatingReason.includes('Не понравились технические особенности') && formData.simple.includes('Пользование смартфоном порой негативно влияет на мою жизнь')) {
      questionNumber = 5
    }
  }

  if (questionNumber == 4) {
    surveyQuestionNumber = 4
    if (!formData.simple.includes('Есть трудности в процессе взаимодействия со смартфоном')) {
      questionNumber = 5
    }
  }

  if (questionNumber == 5) {
    surveyQuestionNumber = 5
    if (!formData.lowRatingReason.includes('Пользование смартфоном порой негативно влияет на мою жизнь')) {
      questionNumber = 6
    }
  }

  if (questionNumber == 6) {
    surveyQuestionNumber = 6
    if (!formData.simple.includes('Пользование смартфоном порой негативно влияет на мою жизнь')) {
      questionNumber = 12
    }
    if (!formData.technicalFeatures.includes('Камера')) {
      questionNumber = 7
    }
  }
  if (questionNumber == 7) {
    surveyQuestionNumber = 7
    if (!formData.technicalFeatures.includes('Батарея')) {
      questionNumber = 8
    }
  }
  if (questionNumber == 8) {
    surveyQuestionNumber = 8
    if (!formData.technicalFeatures.includes('Память')) {
      questionNumber = 9
    }
  }
  if (questionNumber == 9) {
    surveyQuestionNumber = 9
    if (!formData.technicalFeatures.includes('Производительность')) {
      questionNumber = 10
    }
  }
  if (questionNumber == 10) {
    surveyQuestionNumber = 10

    if (!formData.technicalFeatures.includes('Интерфейс')) {
      questionNumber = 11
    }
  }
  if (questionNumber == 11) {
    surveyQuestionNumber = 11
    if (!formData.technicalFeatures.includes('Экран')) {
      questionNumber = 12
      surveyQuestionNumber = 12
    }
  }

  if (questionNumber == 18) {
    // surveyQuestionNumber = 18
    // postDataForm()
  }
}

function postDataForm() {
  let data = new FormData();
  data.append("usedSamsung", formData.simple[0])
  data.append("rating", formData.simple[1]);
  data.append("lowRatingReason", formData.lowRatingReason.join(', '));
  data.append("technicalFeatures", formData.technicalFeatures.join(', '));
  data.append("cameraReason", formData.cameraReason.join(', '));
  data.append("batteryReason", formData.batteryReason.join(', '));
  data.append("memoryReason", formData.memoryReason.join(', '));
  data.append("perfomanceReason", formData.perfomanceReason.join(', '));
  data.append("interfaceReason", formData.interfaceReason.join(', '));
  data.append("screenReason", formData.screenReason.join(', '));

  data.append("problemsPhone", formData.problemsPhone.join(', '));
  data.append("negativeLife", formData.negativeLife.join(', '));
  data.append("likeSamsung", formData.likeSamsung.join(', '));
  data.append("improvePhone", formData.improvePhone.join(', '));
  data.append("age", formData.age);
  data.append("city", formData.city);
  data.append("martialStatus", formData.martialStatus);
  data.append("familySituation", formData.familySituation);
  data.append("wantInformation", formData.wantInformation);
  data.append("informationTime", formData.informationTime);
  data.append("present", formData.present);



  data.append('name', name.value)
  data.append('phone', phone.value)
  data.append('email', email.value)
  data.append("formKey", "VhxtIukFTLAxciHB");
  // fetch("//api.sece.kz", {
  //   method: "POST",
  //   mode: "no-cors",
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //   },
  //   body: data,
  // });
}

function nextquestion() {
  questionNumber++;
  surveyQuestionNumber++;
  pushToData();
  rules();
  loadQuestions();
  console.log(formData)
  console.log(questionNumber)
}

questionsContainer.addEventListener("click", (e) => {
  let target = e.target;
  if (target.tagName == "SPAN") {
    nextquestion();
  }

  const radios = document.querySelectorAll(".radio");
  const checkboxes = document.querySelectorAll(".checkbox");
  const unselect = document.querySelector(".unselect");
  if (target.tagName == "INPUT") {
    unselect &&
      unselect.addEventListener("click", () => {
        checkboxes.forEach((radio) =>
          radio.addEventListener("click", () => {
            unselect.checked = false;
          })
        );
        checkboxes.forEach((checkbox) => {
          checkbox.checked = false;
        });
      });
  }

  if (target.tagName != "BUTTON") return;

  for (let i = 0, length = radios.length; i < length; i++) {
    let count = 0;
    if (radios[i].checked) {
      count++;
      if (count > 0) nextquestion();
      return;
    } else if (radios[i].id === "city-selector") {
      if (radios[i].value.length <= 0) {
        radios[i].style.border = "1px solid red";
        return;
      }
      nextquestion();
    } else {
      radios[i].style.color = "red";
      radios[i].nextElementSibling.className = "option error";
    }
  }
});

const form = document.querySelector('.form-form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateInputs();
  form.classList.add('none')
  questionsContainer.classList.remove('none')
})

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
const isValidName = name => {
  const re = /^[a-zA-Z ]{2,30}$/;
  return re.test(String(name).toLowerCase());
}
const isValidPhone = phone => {
  return phone.length == 0 ? false : true 
}

const validateInputs = () => {
  const emailValue = email.value.trim();
  const nameValue = name.value.trim();
  const phoneValue = phone.value.trim();
  
  if(nameValue == '') {
    name.classList.add('incorrect')
    return
  } else if (!isValidName(nameValue)) {
    name.classList.add('incorrect')
    return
  } else {
    name.classList.remove('incorrect')
  }

  if(phoneValue == '') {
    phone.classList.add('incorrect')
    return
  } else if (!isValidPhone(phoneValue)) {
    phone.classList.add('incorrect')
    return
  } else {
    phone.classList.remove('incorrect')
  }
  
  if(emailValue == '') {
    email.classList.add('incorrect')
    return
  } else if (!isValidEmail(emailValue)) {
    email.classList.add('incorrect')
    return
  } else {
    email.classList.remove('incorrect')
  }

  // if (!checkboxFrom.checked) {
  //   formRules.classList.add('error');
  //   return
  // }
};

name.addEventListener('change', () => {
  validateInputs()
})
phone.addEventListener('change', (e) => {
  validateInputs()
})
phone.addEventListener('keypress', (e) => {
  if(!/\d/.test(e.key))
  e.preventDefault();
})
email.addEventListener('change', () => {
  validateInputs()
})

let keyCode;
function mask(event) {
  event.keyCode && (keyCode = event.keyCode);
  let pos = this.selectionStart;
  if (pos < 3) event.preventDefault();
  let matrix = "+7 (___) ___ ____",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, ""),
      new_value = matrix.replace(/[_\d]/g, function(a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a
      });
  i = new_value.indexOf("_");
  if (i != -1) {
      i < 5 && (i = 3);
      new_value = new_value.slice(0, i)
  }
  let reg = matrix.substr(0, this.value.length).replace(/_+/g,
      function(a) {
          return "\\d{1," + a.length + "}"
      }).replace(/[+()]/g, "\\$&");
  reg = new RegExp("^" + reg + "$");
  if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
  if (event.type == "blur" && this.value.length < 5)  this.value = ""
}
phone.addEventListener("input", mask, false);
phone.addEventListener("focus", mask, false);
phone.addEventListener("blur", mask, false);
phone.addEventListener("keydown", mask, false)

// document.querySelector('.phone').innerHTML = platform.product