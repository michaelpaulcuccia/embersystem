# emberstystem

## DESCRIPTION

This project is an earlier iteration of the project found at https://github.com/michaelpaulcuccia/next_system/

In July 2024, I had an interview with a company whose primary tech stack is Ember.js. I was originally building this with Next.js and decided to prepare myself by dedicating a few days to developing a version of the project with Ember.js.

## DESIGN AND ASSETS

This project was designed "free hand". Images were copied from several online music stores, and icons are from https://boxicons.com/

## GOALS

As mentioned, this was to be prepared for an interview. Sadly, the asked me ZERO questions about Ember.js, or this project. ¯\\\_(ツ)\_/¯

## LESSONS

I'm not a fan of this framework. I realize this was written long before React, and that React was an improvement on these sort of template-rendering frameworks.

But here were are interesting takeaways:

- No JSX in HBS

  `{ htmlSafe } from '@ember/template';`

  Allows you to pass html elements as string as well as several html elements within a single string. 👍

- No useState(), useEffect()

  `import { tracked } from '@glimmer/tracking';`

  When the value of a tracked property (useState) changes, the component will automatically re-render to reflect the new state (useEffect). 👍

- DOM Methods

  `import { action } from '@ember/object';`

  Functions that handle events like click, form submissions, etc., need the action decorator bound to the instance of the class. 👎
