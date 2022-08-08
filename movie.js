$(document).ready(function () {
  $('form').append(
    '<table cellspacing=15><tr class=ratings><td>Movie Title</td><td>Movie Rating</td></tr>'
  );
});

$('button').on('click', function (evt) {
  evt.preventDefault();
  $('table').last().append('<tr class=ratings>');

  const intLength = $('.movieRating').get().length;
  for (let i = 0; i < intLength; i++) {
    $('.ratings')
      .last()
      .append('<td>' + $('.movieRating').get(i).value) + '</td>';
  }
  $('tr').last().append('<td><button>Remove this Rating</button></td>');
});
