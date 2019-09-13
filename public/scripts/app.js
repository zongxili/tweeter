/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const createTweetElement = function(dataObject) {
  const userName = dataObject.user.name;
  const userHandle = dataObject.user.handle;
  const userContent = dataObject.content.text;
  const createdTime = dataObject.created_at;

  const markup = `
    <article class="tweet">
      <header>
        <div class="left"> 
          <span id="userName">${userName}</span>
        </div>
        <div class="right"> 
          <span id="userHandle">${userHandle}</span>
        </div>
      </header>

      <p class="tweetText">${userContent}</p>

      <footer>
        <div class="date">
          <span id="timeCreated">${createdTime}</span>
        </div>

        <div class="right"> 
          <span>Some icon here</span>
        </div>
      </footer>
    </article>`;
  return $(markup);
};

const renderTweets = function(tweets) {
  for (let i = 0; i < tweets.length; i ++) {
    $('#tweets-container').prepend(createTweetElement(tweets[i]));
  }
};

// $("form").submit(function( event ) {
//   renderTweets(data);
//   // $(#textArea)
// });

// Ajax part
// const $submitButton = $('#tweet-submit-button');
// $submitButton.on('click', function (event) {
//   // setTimeout(function(){
//   //   console.log('Button clicked, performing ajax call...');
//   //   alert(event);
//   // }, 1000);
//   console.log('Button clicked, performing ajax call...');
//   $.ajax('../index.html', { method: "POST" })
//   .then(function (morePostsHtml) {
//     console.log('Success: ', morePostsHtml);
//     alert("THis is "+ morePostsHtml);
//   });
// });

const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

$(document).ready(function() { // Runs reloading the page

  $("#arrow-down-button").click(function() {
    $(".new-tweet").animate({
      height: 'toggle'
    });
  });

  const loadTweets = function() {
    $('#tweetsArea').val("");
    $.ajax('/tweets', { method: 'GET' })
      .then(function(response) {
        renderTweets(response);
      });
  };
  loadTweets();

  // This function is needed to be here since it uses the function loadTweets
  $("#tweet-form").on("submit", function(event) { // Submiting a tweets
    event.preventDefault();
    console.log('ABOUT TO SUBMIT FORM!!!!');
    let inputValue = $('#tweetsArea').val();
    if (inputValue === "" || inputValue === null) {
      $("#error-msg").text("The input is empty or null, please go check it");
      $(".error-msg-section").animate({
        height: 'toggle'
      });
    } else if (inputValue.length > 140) { // this approximately won't happen, since "max-length" added to the TextArea tag
      $("#error-msg").text("The length of input is above the Word Limitation.");
      $(".error-msg-section").animate({
        height: 'toggle'
      });
      // $('.error-msg-section').addClass('visible');
    } else {
      inputValue = `<p>${escape(inputValue)}</p>`;
      console.log(event);
      event.preventDefault();
      $.ajax({
        url: '/tweets',
        type: 'POST',
        data: $(this).serialize()
      })
        .then(() => {
          $('#tweets-container').empty();
          loadTweets(); // Update dat list
        });
    }
  });
  // return false;
});

