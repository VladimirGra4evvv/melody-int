$(document).ready(function () {
  var currentFloor = 2;
  var counterUp = $(".counter-up");
  var counterDown = $(".counter-down");// переменная где хранится текущий этаж
  var floorPath = $(".home-image path"); // каждый отдельный этаж в svg
  var modal = $(".modal");
  var modalCloseButton = $(".modal-close-button");
  var viewFlatsButton = $(".view-flats");
  // console.log("сайт готов к манипуляциям") //проверка работы скрипта

  //функция при наведении мышкой на этаж
  floorPath.on("mouseover", function () {
    currentFloor = $(this).attr("data-floor");//удаляем активный класс у этажей
    $(".counter").text(currentFloor);// получаем значение текущего этажа
    floorPath.removeClass("current-floor");// записываем значение этажа в счетчик справа
  });

  floorPath.on('click', toggleModal); //при клике на этаж вызывает окно
  modalCloseButton.on('click', toggleModal);
  viewFlatsButton.on('click', toggleModal); //клик на кнопку закрыть убирает окно

  counterUp.on("click", function () { // отслеживание клика по кнопке вверх
    if (currentFloor < 18) { // проверяем значение этажа
      currentFloor++; // прибавляем один этаж
      usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false }); //форматируем переменную с этажом, чтобы было 01 а не 1
      $(".counter").text(usCurrentFloor); // записываем значения этажа в счетчик справа
      floorPath.removeClass("current-floor");//удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");//подсвечиваем текущий этаж
    }
  });

  counterDown.on("click", function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });

  function toggleModal() { //функция открытия - закрытия окна
    modal.toggleClass("is-open");
  }

});