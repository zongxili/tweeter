/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense, donc je suis"
    },
    "created_at": 1461113959088
  }
]

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
    $('#tweets-container').append(createTweetElement(tweets[i])); 
  }
}

$("form").submit(function( event ) {
  renderTweets(data);
  // $(#textArea)
});