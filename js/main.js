// var answerArray = [];
// for (var i = 0; i < word.length; i++) {
//   answerArray[i] = "_";
// }

// var remaingLetters = word.length;
// var attempts = 10;

// while (remaingLetters > 0 && attempts > 0) {
//   alert(answerArray.join(" "));
//   var guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
//   if (guess === null) {
//     break;
//   } else if (guess.length !== 1) {
//     alert("Пожалуйста, введите только одну букву.");
//   } else {
//     attempts--;
//     guess = guess.toLowerCase();
//     for (var j = 0; j < word.length; j++) {
//       if (word[j] === guess && answerArray[j] === "_") {
//         answerArray[j] = guess;
//         remaingLetters--;
//       }
//       console.log(remaingLetters);
//     }
//   }
// }

// alert(answerArray.join(" "));

// if (attempts > 0) {
//   alert("Отлично! Было загадоно слово " + word);
// } else {
//   alert("Очень плохо! Было загадоно слово " + word);
// }

// function pickWord() {
//   var words = [
//     "программа",
//     "макака",
//     "прекрасный",
//     "телефон",
//     "вода",
//     "кружка",
//     "карандаш",
//     "оладушек",
//   ];
//   return words[Math.floor(Math.random() * words.length)];
// }

// function setupAnswerArray(word) {
//   var answerArray = [];
//   for (var i = 0; i < word.length; i++) {
//     answerArray[i] = "_";
//   }
//   return answerArray;
// }

// function showPlayerProgress() {
//   alert(answerArray.join(" "));
// }

// function getGuess() {
//   return prompt("Угадайте букву,или нажмите отмена для выхода.");
// }

// function updateGameState(guess, word, answerArray) {
//   var appearances = 0;
//   for (var j = 0; j < word.length; j++) {
//     if (word[j] === guess) {
//       answerArray[j] === guess;
//       appearances++;
//     }
//   }
//   return appearances;
// }

// function showAnswerAndCongratulatePlayer(answerArray) {
//   showPlayerProgress(answerArray);
//   alert("Поздравляем! Было загадано слово " + answerArray.join(""));
// }

// var word = pickWord();
// var answerArray = setupAnswerArray(word);
// var remaingLetters = word.length;

// while (remaingLetters > 0) {
//   showPlayerProgress(answerArray);
//   var guess = getGuess();
//   if (guess === null) {
//     break;
//   } else if (guess.length !== 1) {
//     alert("Пожалуйста, введите одиночную букву.");
//   } else {
//     var correctGuesses = updateGameState(guess, wrod, answerArray)
//     remaingLetters -= correctGuesses;
//   }
// }

// function add(numOne,numTwo){
//   var response = numOne + numTwo;
//   return response;
// }

// function multiply(numOne,numTwo){
//   var response = numOne * numTwo;
//   return response;
// }

// function areArraysSame(arrayo,arrayt){
//     if(arrayo === arrayt ){
//       return true;
//     }else{
//       return false;
//     }
// }

// JQUERY & DOM

// var headingElement = document.getElementById("main-heading");

// console.log(headingElement.innerHTML);

// headingElement.innerHTML = newHeadingText

// console.log(headingElement.innerHTML);

//jquery + dom

// var newHeadingText = prompt("Введите новый заголовок:");

//c помощью jquery обращаемся к id который в dom
//после с помощью .text возвращаем то что получили в newHeadingText

// $("#main-heading").text(newHeadingText);

// $("body").append("<p>стр 151</p>")

// for (var i = 0; i < 3; i++){
//     var hobby = prompt("Назови одно из своих хобби!")
//         $("body").append("<p>" + hobby + "</p>")
// };

// $("h1").fadeOut(3000).fadeIn(5000) анимация появления/затухание

// $("body").append("<p>hello world</p>")

// for (var i = 0; i < 5; i++){
//     $("h1").slideUp(1000).slideDown(1000)
// }

// $("#main-heading").text("Мои друзья")

// var friends = ["Влад", "Даня", "Макс"];

// for (var i = 0; i < friends.length; i++) {
//     $("body").append(" <p>" + friends[i] + "</p>");
//     $("p").last().hide().fadeIn((i + 1) * 200);
// }

// $("p").append(" лучший!" )

// for (var i = 0; i < 5; i++) {
//     $("#main-heading").fadeOut(500).fadeIn(500)

// }

// var fadeTime;
// for (var i = 0; i < 5; i++) {
//   fadeTime = (i + 1) * 1000;
//   $("#main-heading").fadeOut(fadeTime / 2).fadeIn(fadeTime / 2);
// }

// $("#main-heading").fadeOut(1000).delay(5000).fadeIn(1000);

// $("#main-heading")
//   .fadeTo(1000, 0.1)

// function homework() {
//   alert("Прора делать домашку!");
// };

// var timeoutId = setTimeout(homework, 6000);

// clearTimeout(timeoutId)

// var counter = 5;

// function printMessage() {
//   console.log("Ты смотришь в консоль уже " + counter + " секунд");
//   counter += 5;
// };

// var intervalId = setInterval(printMessage, 5000)

// анимация

// $("#main-heading").append("162стр")

// var leftOffset = 0;

// function moveHeading() {
//   $("#main-heading").offset({ left: leftOffset });
//   leftOffset++;

//   if (leftOffset > 200) {
//     leftOffset = 0;
//   }
// };

// setInterval(moveHeading, 30)

// function clickHandler(event) {
//   console.log("Клик! " + event.pageX + " " + event.pageY);
// };

// $("h1").click(clickHandler)

// $("html").click(function (event) {
//   $("#main-heading").offset({
//     left: event.pageX,
//     top: event.pageY
//   });
// });

// $("h1").setInterval(1,1000).offset({
//   left: 200,
//   top
// })

// var leftOffset = 0;

// function moveHeading() {
//   $("#main-heading").offset({ left: leftOffset });
//   leftOffset++;

//   if (leftOffset > 200) {
//     $("#main-heading").offset({ top: leftOffset }).
//     leftOffset++;
//   } else if (leftOffset > 400) {
//     $("#main-heading").offset({ left: leftOffset })
//     leftOffset--
//   }
//     // $("#main-heading").offset({ top: leftOffset });
//     // leftOffset++;

// };

// setInterval(moveHeading, 30)

//КЛИКАЛКА С АНИМАЦИЕЙ

// var direction = "вправо";
// var offset = 0;

// $("#main-heading").text("1").offset({ left: offset, top: offset });

// var moveHeading = function () {
//   if (direction === "вправо") {
//     $("#main-heading").offset({ left: offset });
//     offset++;
//     if (offset > 200) {
//       offset = 0;
//       direction = "вниз";
//     }
//   } else if (direction === "вниз") {
//     $("#main-heading").offset({ top: offset });
//     offset++;
//     if (offset > 200) {
//       offset = 200;
//       direction = "влево";
//     }
//   } else if (direction === "влево") {
//     $("#main-heading").offset({ left: offset });
//     offset--;
//     if (offset < 0) {
//       offset = 200;
//       direction = "вверх";
//     }
//   } else if (direction === "вверх") {
//     $("#main-heading").offset({ top: offset });
//     offset--;
//     if (offset < 0) {
//       offset = 0;
//       direction = "вправо";
//     }
//   }
// };

// var intervalId = setInterval(moveHeading, 30);

// $("#main-heading").click(function () {
//     intervalId = setInterval(moveHeading, 25);
//     if (intervalId === 2) {
//         $("#main-heading").text("2");
//     } else if (intervalId === 3) {
//         $("#main-heading").text("3");
//     } else if (intervalId === 4) {
//         $("#main-heading").text("4");
//     } else if (intervalId === 5) {
//         $("#main-heading").text("5");
//     } else if (intervalId === 6) {
//         $("#main-heading").text("6");
//     } else if (intervalId === 7) {
//         $("#main-heading").text("7");
//     } else if (intervalId === 8) {
//         $("#main-heading").text("8");
//     } else if (intervalId === 9) {
//         $("#main-heading").text("9");
//     } else if (intervalId === 10) {
//         $("#main-heading").text("10");
//     } else {
//         alert("You win")
//     }
//     console.log(intervalId)

// });

//НАЙДИ КЛАД

//получить слуйчайное число от 0 до size-1
function getRandomNumber(size) {
  return Math.floor(Math.random() * size);
}

//вычислить расстояние от клика (event) до клада (target)
function getDistance(event, target) {
  var diffX = event.offsetX - target.x;
  var diffY = event.offsetY - target.y;
  return Math.sqrt(diffX * diffX + diffY * diffY);
}

//получить для расстояния строку подсказки
function getDistanceHint(distance) {
  if (distance < 20) {
    return "Обожжешься!";
  } else if (distance < 30) {
    return "Очень горячо";
  } else if (distance < 60) {
    return "Горячо";
  } else if (distance < 160) {
    return "Тепло";
  } else if (distance < 320) {
    return "Холодно";
  } else if (distance < 450) {
    return "Очень холодно";
  } else {
    return "Замерзнешь!";
  }
}

//создаём переменные
var width = 800;
var height = 800;
var clicks = 0;

//случайная позиция клада
var target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height),
};

//добовляем обработчик клика
$("#map").click(function (event) {
  clicks++;
  //
  $("#clicks").text(clicks)

  //получаем расстояние от клика до клада
  var distance = getDistance(event, target);

  //преобразуем расстояние в подсказку
  var distanceHint = getDistanceHint(distance);
  //записываем в элемент p с  id distance 
  $("#distance").text(distanceHint);
  
  // если клик близко, поздравляем с победой 
  if (distance < 10) {
    alert("Клад найден! Сделано кликов: " + clicks);
    location.reload();
  };

  if (clicks === 31) {
    alert("GAME OVER")
    location.reload();
  }
});

// function getDistanceHigh(distance) {
//   if (distance < 10) {
//     return "Обожжешься!";
//   } else if (distance < 20) {
//     return "Очень горячо";
//   } else if (distance < 40) {
//     return "Горячо";
//   } else if (distance < 80) {
//     return "Тепло";
//   } else if (distance < 160) {
//     return "Холодно";
//   } else if (distance < 320) {
//     return "Очень холодно";
//   } else {
//     return "Замерзнешь!";
//   }
// }
