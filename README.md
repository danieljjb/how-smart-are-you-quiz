# How Smart Are You? (quiz)

# Goals for this Project

The purpose of this website is to provide a fun interactive general knowledge quiz for users to play. It will include a scoreboard where users can enter a username to compare scores with each other. There will also be instructions on how to play and navigate the quiz.

## Live Project

[View the live project here.](https://danieljjb.github.io/how-smart-are-you-quiz/)

<img src="/docs/am-i-responsive.png">

# Table of Contents

* [UX](#ux)
    * [User Goals](#user-goals)
    * [User Stories](#user-stories)
    * [Site Owner Goals](#business-owners-goals)
    * [Requirements](#requirements)
* [Design](#design)
    * [Colors](#colors)
    * [Fonts](#fonts)
* [Features](#features)
    * [Existing Features](#existing-features)
        * [Homepage](#homepage)
        * [How to Play](#how-to-play)
        * [Playing the Quiz](#playing-the-quiz)
        * [End of Game](#end-of-game)
        * [High Scores](#high-scores)
    * [Features to be Added](#features-to-be-added)
* [Technologies Used](#technologies-used)
    * [Languages](#languages)
    * [Libraries and Frameworks](#libraries-and-frameworks)
    * [Tools](#tools)
* [Testing](#testing)
* [Deployment](#deployment)
    * [Github Pages](#github-pages)
    * [Forking the GitHub Repository](#forking-the-github-repository)
    * [Making a Local Clone](#making-a-local-clone)
* [Credits](#credits)
    * [Code](#code)
    * [Content](#content)

# UX

## User Goals
* Visually attractive.
* Easy to navigate.
* Scoreboard to compare scores.

## User Stories
* As a user, I want clear and concise instructions on how to do the quiz.
* As a user, I want to know how many questions I've answered when I'm taking the quiz.
* As a user, I want to enter my name to add to a scoreboard when I complete the quiz.
* As a user, I want to see a scoreboard with both my score and other users scores.

## Site Owner Goals
* Provide a website that is easy to navigate.
* Create a visually appealing website to maintain user attention.
* Introduce a competitive aspect to the website via a scoreboard.

## Requirements
* Website colors look well together.
* Simple design to allow for intuitive use.
* A leaderboard where high scores are displayed.

# Design

## Colors

I used [Visme](https://visme.co/blog/website-color-schemes/) to find a suitable color scheme for the website. I went with the first recommendation as I thought it would make for a highly attractive combination.

I used [Colormind](http://colormind.io/) to generate a color palette.

<img src="/docs/color-palette.png">

* #41B3A3 (green) - This will be used as the background color of the website.
* #E8A87C (light orange) - This will be used as a background color for the buttons.
* #E27D60 (dark orange) - This will be used as a background color for the buttons when hovered over.
* #FFFFFF (white) - This will be used for a background color of the input box.
* #000000 (black) - This will be used for the text on the website.

## Fonts
I have chosen to use the font [Roboto](https://fonts.google.com/specimen/Roboto?sort=popularity "Roboto font") which I imported from [Google Fonts](https://fonts.google.com/ "Google Fonts"). I chose this font because it's a very popular font that is easy to read and also helps to incease the attractiveness of the website.

# Features

## Existing Features

### Homepage
The homepage has a simple, intuitive design consisting of a heading (name of the quiz) and three buttons (Play, How to Play and High Scores) which offer the user an easy-to-understand way of navigating the website.

* Desktop
<img src="/docs/home.png">

* Mobile
<img src="/docs/home-mobile.png">

### How to Play
The How to Play page offers users instructions on how to play the quiz, the scoring system and how to save their score to the leaderboard. It also explains some of the other functions of the quiz.

* Desktop
<img src="/docs/how-to-play.png">

* Mobile
<img src="/docs/how-to-play-mobile.png">


### Playing the Quiz
Whilst playing the game, users are given four options to choose from to answer the question of which there is only one correct answer. This gives users a chance to guess the answer if they are unsure and potetentially score points.

* Desktop
<img src="/docs/game.png">

* Mobile
<img src="/docs/game-mobile.png">

The score counter lets users know their current score as they progress through the game.
<img src="/docs/score-counter.png">

The question counter informs users what question they are currently on.
<img src="/docs/question-counter.png">

### End of Game
When the game ends, users will be shown their overall score and be offered a chance to input their username and save their score to the leaderboard. Alternatively, they can choose to play the quiz again or return to the homepage.

* Desktop
<img src="/docs/end-of-game.png">

* Mobile
<img src="/docs/end-of-game-mobile.png">

### High Scores
The High Scores page shows users a leaderboard of the top 5 results which creates a competitive aspect to the game.

* Desktop
<img src="/docs/high-scores.png">

* Mobile
<img src="/docs/high-scores-mobile.png">

##  Features to be Added
* Options for levels of difficulty (Easy, Medium, Hard)
* Category choices (Sports, Music, Movies etc.)
* Sound effects for correct and incorrect answers.

# Technologies Used

## Languages

* [HTML](https://en.wikipedia.org/wiki/HTML)
* [CSS](https://en.wikipedia.org/wiki/CSS)
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

## Libraries and Frameworks

* [Google Fonts](https://fonts.google.com/)

## Tools
* [Gitpod](https://gitpod.io/)
* [Colormind](http://colormind.io/)
* [Am I Responsive?](https://ui.dev/amiresponsive)
* [Open DTB](https://opentdb.com/)
* [W3C HTML Validation Service](https://validator.w3.org/)
* [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)
* [JSHint](https://jshint.com/)


# Testing
* Please refer to [here](TESTING.md) for testing.

# Deployment

## GitHub Pages

I deployed this site on GitHub using the following steps:

1. I opened the repository on GitHub and selected **Settings**.
2. Following this I clicked on **Pages**.
3. Under the heading 'Source', I clicked on 'None' and selected **Main**.
4. I then clicked **Save**.
5. The website then became live here.

## Forking the GitHub Repository

Forks are used to propose changes to someone else's project or to use someone else's project as a starting point for your own idea. By forking the GitHub Repository you make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository.

To Fork a Github Repository:

1. Log in to GitHub and go to the [GitHub Repository](https://github.com/danieljjb/how-smart-are-you-quiz)
2. Locate the Fork button in the top-right corner of the page, click **Fork**.
3. You should now have a copy of the original repository in your GitHub account.

## Making a Local Clone

You will now have a fork of the repository, but you don't have the files in that repository locally on your computer.

To make a local clone:

1. Log in to GitHub and go to the [GitHub Repository](https://github.com/danieljjb/how-smart-are-you-quiz)
2. Above the list of files, click  **Code**.
3. To clone the repository using HTTPS, under **Clone with HTTPS**, click the **Copy** icon. To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click Use SSH, then click the **Copy** icon. To clone a repository using GitHub CLI, click Use GitHub CLI, then click the **Copy** icon.
4. Open Git Bash.
5. Change the current working directory to the location where you want the cloned directory.
6. Type git clone, and then paste the URL you copied earlier. It will look like this, with your GitHub AE username instead of YOUR-USERNAME:
7. Press Enter. Your local clone will be created.


# Credits

## Code

* [Simen Daehlin](https://github.com/Eventyret)
* [Code Institute](https://codeinstitute.net/ie/)
* James Q Quick (How to use Fetch)
    * [Tutorial 1](https://www.youtube.com/watch?v=jK5zzSA2JHI&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=11&ab_channel=JamesQQuick)
    * [Tutorial 2](https://www.youtube.com/watch?v=3aKOQn2NPFs&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=12&ab_channel=JamesQQuick)
* [Brian Design](https://www.youtube.com/watch?v=f4fB9Xg2JEY&t=2380s&ab_channel=BrianDesign) (Used as a reference for building a quiz)

## Content

* The questions were sourced from [Open DTB](https://opentdb.com/).
* The instructions on how to play were written by me.



