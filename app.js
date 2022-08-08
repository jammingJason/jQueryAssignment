// When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
$(document).ready(function () {
  console.log('Get ready to party with jQuery!');
});
// Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
$('article').on('mousemove', 'img', function () {
  $(this).addClass('image-center');
});
// Remove the last paragraph in the article.
$('p').last().remove();

// Set the font size of the title to be a random pixel size from 0 to 100.
const strFontSize = Math.floor(Math.random() * 101) + 'px';
$('h1').css('font-size', strFontSize);

// Add an item to the list; it can say whatever you want.
$('ol').append('<li>Van Jason Crews</li>');

// Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
$('aside').empty().append('<p>I apologize for the list!</p>');

// When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
$('.form-control').on('keyup', function () {
  const intLength = $('.form-control').get().length;
  let strRGB = '';
  for (let i = 0; i < intLength; i++) {
    strRGB = strRGB + ',' + $('.form-control').get(i).value;
  }
  strRGB = 'rgb(' + strRGB.replace(',', '') + ')';
  //   alert(strRGB);
  $('body').css('backgroundColor', strRGB);
});

$('.form-control').on('click', function () {
  const intLength = $('.form-control').get().length;
  let strRGB = '';
  for (let i = 0; i < intLength; i++) {
    strRGB = strRGB + ',' + $('.form-control').get(i).value;
  }
  strRGB = 'rgb(' + strRGB.replace(',', '') + ')';
  $('body').css('backgroundColor', strRGB);
});

// Add an event listener so that when you click on the image, it is removed from the DOM.
$('img').on('click', function () {
  $(this).remove();
});
