$(document).ready(function() {
  console.log("ready!");

  $('.buttons').on('click', function(event) {

    var numSentence = document.getElementById('screen').innerHTML;
    var answer;
    var buttonValue = event.target.innerHTML;
    if (buttonValue == "C") {
      buttonValue = $('#screen').text('');
    }
    if (buttonValue == "=") {
      answer = eval(numSentence);
      $('#screen').text(answer);
    } else {
      $('#screen').append(buttonValue);
    }
  });
});
