# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)

  - [The challenge](Advice generator app challenge on Frontend Mentor)

  - [Screenshot](./README/Annotation%202023-01-05%20143339.pngscreenshot.jpg)
  - [Links](https://gubiadvicegenerator.netlify.app/)

- [My process](#my-process)
  - [Built with](HTML , SCSS , JAVASCRIPT)
  - [What I learned](#API INTERACTIONS)
- [Author]( OGUBUIKE EMEJURU)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

(./README/Annotation%202023-01-05%20143339.pngscreenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://gubiadvicegenerator.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```js
window.addEventListener("load", randomAdvice);

function randomAdvice() {
  API.getAdvice(API_URL).then((data) => addQuote(data.slip));
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

-javascript event listeners

- axios

## Author

- Frontend Mentor - [@ogubuike245](https://www.frontendmentor.io/profile/@ogubuike245)
- Twitter - [@spinkq](https://www.twitter.com/spinkq)
