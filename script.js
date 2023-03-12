"use strict";
let quest;
let notification;
let numGuess;

const numRandom = function () {
  numGuess = Math.ceil(Math.random() * 100);
  return numGuess;
};

const isNumber = function (num) {
  if (num !== null) {
    let numb = num.toString().trim();
    let num1 = Number(numb);
    if (num1 > 0) {
      return num1;
    }
  }
};

const asking = function (x) {
  function question() {
    quest = prompt("Угадай число от 1 до 100");

    switch (true) {
      case quest === null:
        alert("Игра окончена");
        break;

      case x === isNumber(quest):
        alert("Поздравляю! Вы угадали!!!");
        break;

      case x < isNumber(quest) && x !== isNumber(quest):
        alert("Загаданное число меньше");
        question();
        break;

      case x > isNumber(quest) && x !== isNumber(quest):
        alert("Загаданное число больше");
        question();
        break;

      case !isNumber(quest):
        alert("Введи число");
        question();
        break;
    }
  }
  question();
};

asking(numRandom());
