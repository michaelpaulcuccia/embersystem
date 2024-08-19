# emberstystem

## DESCRIPTION

This project is an earlier iteration of the project found at https://next-system-ivory.vercel.app/

In July 2024, I had an interview with a company whose primary tech stack is Ember.js. I was already engaged in a Next.js project and decided to prepare myself by dedicating a few days to developing a version of the project with Ember.js.

Here were some of things I learned:

    - No JSX in HBS
        - resolved with import
        { htmlSafe } from '@ember/template';
        allows you to pass html elements as string as well as several html elements within a single string

    - No useState(), useEffect()
        - resolved with import
        import { tracked } from '@glimmer/tracking';
        when the value of a tracked property (useState) changes, the component will automatically re-render to reflect the new state (useEffect)

    - DOM Methods
        - resolved with import
        import { action } from '@ember/object';
        functions that handle events like click, form submissions, etc., need the action decorator bound to the instance of the class

## DESIGN AND ASSETS

This project was designed "free hand". Images were copied from several online music stores, and icons are from https://boxicons.com/

## GOALS

As mentioned, this was try to impress the people I was interviewing with. Sadly, the asked me ZERO questions about Ember.js. ¯\\\_(ツ)\_/¯

## WISHLIST

## INSTALLATION

## DEV NOTES

clean
rm -rf dist
