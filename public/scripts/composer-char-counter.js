// countChar = 0;
// wordLimit = 140;
// // Once the user type any thing in the field
// $(document).ready(function(){
//   $("#tweetsArea").keypress(function(){
//     if (countChar < wordLimit) {
//       countChar = countChar + 1;
//       $("#tweetsCharCount").text(wordLimit - countChar);
//     } else { // If the amount of characters hits the limit
//       return false;
//     }
//   });

//   $("#tweetsArea").keydown(function(){
//     var key = event.keyCode || event.charCode;
//     if( key == 8 || key == 46) {
//       countChar = countChar - 1;
//     }
//     $("#tweetsCharCount").text(wordLimit - countChar);
//   });
// });

// countChar = 0;
const wordLimit = 140;

$(document).ready(function() {
  // --- our code goes here ---
  $("#tweetsArea").on("input", function() {
    let text = $( "#tweetsArea").val();
    let countChar = text.length;
    if (countChar < wordLimit) {
      $("#tweetsCharCount").text(wordLimit - countChar);
      $("#tweetsCharCount").css( {"color" : "black"} );
    } else {
      $("#tweetsCharCount").text(wordLimit - countChar);
      $("#tweetsCharCount").css( {"color" : "red"} );
    }
  });
});