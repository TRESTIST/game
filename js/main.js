
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

  if (clicks === 30) {
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
