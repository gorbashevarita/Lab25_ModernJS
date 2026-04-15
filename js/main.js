// console.log("\n=== Деструктуризация массивов ===");
// const colors = ["red", "green", "blue"];
// const colors1 = colors[0];
// const colors2 = colors[1];
// console.log(colors1, colors2);

// const [firstColor, secondColor, thirdColor] = colors;
// console.log(firstColor, secondColor, thirdColor);
// const [primary, , tertiary] = colors;
// console.log(primary, tertiary);
// const [c1, c2, c3, c4 = "yellow"] = colors;
// console.log(c4);

// console.log("Деструктуризация объектов");
// const user = {
//     name: "Алиса", 
//     age: 25, 
//     city: "Москва",
// }

// const {name, age, city} = user;
// console.log(name, age, city);

// const { name: fullName, age: years } = user;
// console.log(fullName, years);

// const { name: personName, country = "Russia" } = user;
// console.log(personName, country);

// console.log("Деструктуризация в параметрах");

// function printUserOld(user) {
//     console.log(`Имя: ${user.name}`);
//     console.log(`Возраст: ${user.age}`);
//     console.log(`Город: ${user.city}`);
// }

// function printUser({name, age, city}) {
//     console.log(`Имя: ${name}`);
//     console.log(`Возраст: ${age}`);
//     console.log(`Город: ${city}`);
// }

// printUserOld(user);
// console.log();
// printUser(user);

// const product = {
//     name: "кулич", 
//     price: "200p",
//     category: "выпечка", 
//     inStock: "да"
// }
// const {name, price, category, inStock} = product;
// console.log(name, price, category, inStock);

// function printProduct(product) {
//     console.log(`name: ${name}`);
//     console.log(`price: ${price}`);
//     console.log(`category: ${category}`);
//     console.log(`inStock: ${inStock}`);
// }
// printProduct(product);









// console.log("Spread для массивов");
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = [...arr1, ...arr2];
// console.log("Объединенный массив: ", combined);

// const copy = [...arr1];
// console.log("Копия массива: ", copy);

// const extended = [0, ...arr1, 7, 8];
// console.log("Расширенный массив: ", extended);

// console.log("Spread для объектов");

// console.log("Rest оператор");

// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }
// console.log("Sum 1, 2, 3: ", sum(1, 2, 3));
// console.log("Sum 1, 2, 3, 4, 5: ", sum(1, 2, 3, 4, 5));

// const numbers = [10, 20, 30, 40, 50];
// const [first, second, ...rest] = numbers;
// console.log("Первое число:", first);
// console.log("Второе число:", second);
// console.log("Остальные числа:", rest);

// const array1 = [1, 2, 3, 4];
// const array2 = [5, 6, 7, 8];
// const combined = [...array1, ...array2];
// console.log(combined);

// function findMax(...rest) {
//     return Math.max(...rest)
// }
// findMax(1, 2, 3, 4, 80, 5)
// console.log(findMax(1, 2, 3, 4, 80, 5));

// const object1 = {
//     name: "Ruta", 
//     age: 18
// };
// const object2 = {
//     city: "Volzhski", 
//     hobbi: "read"
// };
// const object3 = {...object1, ...object2};
// console.log(object3);







// import {greet, add, PI} from "./utils.js";
// console.log("Модули");
// console.log(greet("Алексей"));
// console.log("5 + 3 = ", add(5, 3));
// console.log("Значение PI: ", PI);

// import {multiply as умножить } from "./utils.js";
// console.log("4 * 7 = ", умножить(4, 7));

// import * as Utils from "./utils.js";
// console.log(Utils.greet("Мария"));
// console.log("Умножение: ", Utils.multiply(3, 9));

// import { square, cube, E } from "./math.js";
// console.log(square(3));
// console.log(cube(3));
// console.log(E);

// console.log("Промисы");
// const simplePromise = new Promise((resolve, reject) => {
//     const success = true;
//     if (success) {
//         resolve("Операция выполнена успешно!");
//     } else {
//         reject("Произошла ошибка!");
//     }
// });
// simplePromise
//     .then((result) => console.log("Результат: ", result))
//     .catch((error) => console.log("Ошибка: ", error));

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Прошло ${ms} миллисекунд`);
        }, ms)
    });
}
// delay(1000)
//     .then((message) => console.log(message))


// function fetchUserData(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (userId > 0) {
//         resolve({
//           id: userId,
//           name: "Иван Иванов",
//           email: "ivan@example.com",
//         });
//       } else {
//         reject("Неверный ID пользователя");
//       }
//     }, 1500);
//   });
// }
// fetchUserData(1)
//     .then((user) => console.log("Пользователь: ", user))
//     .catch((error) => console.log("Ошибка: ", error));

// function step1() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Шаг 1 завершён"), 500);
//   });
// }

// function step2(previousResult) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(`${previousResult} -> Шаг 2 завершён`), 500);
//   });
// }

// function step3(previousResult) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(`${previousResult} -> Шаг 3 завершён`), 500);
//   });
// }

// step1()
//   .then((result1) => step2(result1))
//   .then((result2) => step3(result2))
//   .then((finalResult) => console.log("Финальный результат:", finalResult))
//   .catch((error) => console.log("Ошибка в цепочке:", error));


// console.log("Скрипт запущен — начинаем выполнение");

// const checkInventory = new Promise((resolve, reject) => {
//     const product = true;
//     if (product) {
//         resolve("Продукт есть");
//     } else {
//         reject("Продукта нет");
//     }
// });

// checkInventory
//     .then((result) => {
//         console.log("Результат: ", result);
//     })
//     .catch((error) => {
//         console.log("Результат: ", error);
//     });

// console.log("Async/Await");
// async function greet() {
//   return "Привет!";
// }
// greet().then((message) => console.log(message));

// function getWeather() {
//   return new Promise((resolve) => {
//     setTimeout(() => { resolve({temp: 22, condition: "Солнечно" }); }, 1000);
//   });
// }

// async function showWeather() {
//   console.log("Загрузка погоды...");
//   const weather = await getWeather();
//   console.log(`Температура: ${weather.temp}°C, ${weather.condition}`);
// }
// showWeather();

// async function fetchData(showldFail) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (showldFail) {
//         reject("Ошибка при загрузке данных");
//       } else {
//         resolve({ dsta: "Важные данные" });
//       }
//     }, 800);
//   });
// }

// async function getData() {
//   try {
//     const result = await fetchData(false);
//     console.log("Успешно:", result.data);

//     const failedResult = await fetchData(true);
//     console.log("Это не выполнется");
//   } catch (error) {
//     console.log("Поймана ошибка:", error);
//   }
// }
// getData();

// async function cookDinner() {
//   console.log("Начинаем готовить...");

//   const pasta = await DelayNode(1000).then(() => "Паста готова");
//   console.log(pasta);

//   const sause = await DelayNode(500).then(() => "Соус готов");

//   const salad = await DelayNode(700).then(() => "Салат готов");
//  }
//  cookDinner().then((result) => console.log(result));

//  async function cookDinnerFast() {
//   console.log("Готовим все одновременно...");

//   const [pasta, sause, salad] = await Promise.all([
//     delay(1000).then(() => "Паста готова"),
//     delay(500).then(() => "Соус готов"),
//     delay(700).then(() => "Салат готов"),
//   ]);
//   console.log(pasta, sause, salad);
//   return "Ужин готов быстрее!";
//  }

//  cookDinnerFast().then((result) => console.log(result));

 async function processOrder () {
  try {
    console.log("Ваш заказ проходит этапы: ")

    await delay(1000);
    console.log("Проверка наличия товара завершена");

    await delay(500);
    console.log("Расчет стоимости товара закончен");

    await delay(600);
    console.log("Подстверждение товара закончено");

    return "Заказ успешно обработан!"
  }
  catch(error) {
    console.error("Произошла ошибка при обработке заказа: ", error.message)
    throw error;
  }
 }

processOrder()
  .then((result) => console.log(result))
  .catch((error) => console.log("Заказ не обработан:", error.message));

 