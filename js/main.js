$(document).ready(function() {
  // console.log("ready!");
  var result;
  var numSentence;

  $('span').on('click', function() {
    if ($(this).text() === "=") {
      ($(this).text() === "");
    } else {
      $('#screen').append($(this).text());
    };

    $('#cancel').on('click', function() {
      $('#screen').text('');
    });
    $('#calc').on('click', function() {
      console.log( $('#screen').text().split().join('').eval());
      // $('#screen').text(result);

    });
  });
});
