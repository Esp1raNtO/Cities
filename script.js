import myJson from "./cities.json" assert { type: "json" };

const userInput = document.getElementById("userInput");
const char1 = document.getElementsByClassName("char1")[0];
const answer = document.getElementsByClassName("answer")[0];
let usedCity = [];
let arr_RU = [
  "А",
  "Б",
  "В",
  "Г",
  "Д",
  "Е",
  "Ё",
  "Ж",
  "З",
  "И",
  "Й",
  "К",
  "Л",
  "М",
  "Н",
  "О",
  "П",
  "Р",
  "С",
  "Т",
  "У",
  "Ф",
  "Х",
  "Ц",
  "Ч",
  "Ш",
  "Щ",
  "Э",
  "Ю",
  "Я",
];

let oldSymbol = arr_RU
  .join("")
  .charAt(Math.floor(Math.random() * arr_RU.length));

char1.innerHTML = oldSymbol;
let symbol = oldSymbol;

for (let i = 0; i < myJson.city.length; i++) {
  usedCity.push(myJson.city[i].name);
}

userInput.addEventListener("keydown", function (event) {
  if (event.key == "Enter") addItem();
});

function addItem() {
  for (let i = 0; i < myJson.city.length; i++) {
    var object = myJson.city[i];

    if (userInput.value === object.name) {
      for (let i = 0; i < usedCity.length; i++) {
        if (!usedCity.includes(userInput.value)) {
          console.log(usedCity);
          console.log(userInput.value);

          answer.innerHTML = " Такой город уже был ";
          break;
        } else {
          if (userInput.value[0] === oldSymbol) {
            answer.innerHTML = userInput.value;
            symbol = userInput.value.slice(-1);

            let arr_ru = ["ё", "ь", "ы", "ъ"];

            for (let el in arr_ru) {
              if (symbol === arr_ru[el]) {
                symbol = userInput.value.slice(-2).slice(0, 1);
                console.log(symbol);
              }
            }

            char1.innerHTML = symbol.toUpperCase();
            //     // rightAnwer();
          } else {
            answer.innerHTML = "Вы ошиблись буквой";
          }
        }
      }
      break;
    } else {
      answer.innerHTML = "Такого города нет";
    }
  }
  oldSymbol = symbol.toUpperCase();
  console.log(oldSymbol);
  usedCity.splice(usedCity.indexOf(userInput.value), 1);
  //   answer.innerHTML = userInput.value;
  userInput.value = "";
}
