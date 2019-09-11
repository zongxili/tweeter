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

    let newArticle = document.createElement("article.tweet");
    var element = document.getElementById("#userName");
    element.nodeValue() = 
 };


// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
// $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

function geeks() { 
  var node = document.createElement("LI");
} 