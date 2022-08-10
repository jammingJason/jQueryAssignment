$(document).ready(function () {
  $('form').append(
    '<table cellspacing=15><tr class=ratings><td>Movie Title</td><td>Movie Rating</td></tr>'
  );
});
let objMovie = {};
let arrMoviesList = [];
$('#btnSubmit').on('click', function (evt) {
  evt.preventDefault();
  let strID = Math.random();
  strID = strID.toString().replace('0.', '');
  const movieLength = $('#txtMovieTitle').get(0).value.toString().length;
  const movieRating = Number($('#txtMovieRating').get(0).value);

  if (movieLength < 2) {
    alert('Movie title must be at least 2 characters');
    return;
  }

  if (movieRating < 1 || movieRating > 10 || isNaN(movieRating)) {
    alert('Movie rating must be between 1 - 10');
    $('#txtMovieRating').get(0).value = '';
    return;
  }

  $('table')
    .last()
    .append('<tr id=' + strID + ' class=ratings>');
  const intLength = $('.movieRating').get().length;
  for (let i = 0; i < intLength; i++) {
    $('.ratings')
      .last()
      .append('<td>' + $('.movieRating').get(i).value + '</td>');
  }

  let strBtnID = Math.random();
  strBtnID = strBtnID.toString().replace('0.', '');
  $('tr')
    .last()
    .append('<td><button id=' + strBtnID + '>Remove this Rating</button></td>')
    .on('click', function (evt) {
      evt.preventDefault();
      $(this).remove();
    });
  let inputLength = $('input').get().length;
  for (let i = 0; i < inputLength; i++) {
    $('input').get(i).value = '';
  }
});
