# Tweeter Project by Zongxi Li

Tweeter is a simple, single-page Twitter clone.

This repository is the starter code for the project: Students will fork and clone this repository, then build upon it to practice their HTML, CSS / SASS, JS, jQuery and AJAX front-end skills, and their Node, Express and MongoDB back-end skills.

## Final Product
##### This Tweeter app has 2 versions: Desktop / Tablet version and Mobile Version:
- Desktop / Tablet Version as shown below
!["Desktop / Tablet Version for the app"](/docs/desktop_interface.png)
- Mobile Version as shown below
!["Desktop / Tablet Version for the app"](/docs/mobile_interface.png)

##### The "New Tweet" section can be hided by clicking the "Write New Tweet" botton at top right corner
- Desktop / Tablet Version as shown below
!["Desktop / Tablet Version for hiding the New Tweet section"](/docs/hide_tweet_dsk.png)
- Mobile Version as shown below
!["Desktop / Tablet Version for hiding the New Tweet section"](/docs/hide_tweet_mob.png)

##### Once users enter invalid input: such as entering NULL / leaving empty value in the Input Text field, or having the tweet contents over 140 character, an error message will be showed above the New Tweet section.
* For the over-inputing more than 140 characters, Input Text field has been set with the limitation of 140 characters, but error message is still stored in the scripts.
- Desktop / Tablet Version as shown below
!["Desktop / Tablet Version for Error message"](/docs/error_msg_dsk.png)
- Mobile Version as shown below
!["Desktop / Tablet Version for Error message"](/docs/error_msg_mob.png)

##### After giving valid input and hide the "Tweet" button, the app will generate a new tweet and append it to top of the Tweet section.
- Desktop / Tablet Version as shown below
!["Desktop / Tablet Version for new Tweet"](/docs/new_tweet_dsk.png)
- Mobile Version as shown below
!["Desktop / Tablet Version for new Tweet"](/docs/new_tweet_mob.png)

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express 4.13.x
- Node 5.10.x or above