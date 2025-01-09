# Garrett Priddy FDW think Interview Challenge

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

## How to Run

1. Clone the repository:
   ```bash
   git clone [<repo-url>](https://github.com/Kaboom242/GarrettPriddy-FWDthink-Project.git)
   cd GarrettPriddy-FWDthink-Project
   ```
2. npm install
3. npm run dev

## Features

- Article filtering by category.
- Bookmarking functionality with state persistence.
- Responsive design.
- Article Simple Transition Effect
- Show more button, shows more articles.

## Frameworks / libraries Used

- Vite
- Vue
- Lit
- Typescript
- Bootstrap Icons

## Run Tests

- npm test

## Assumptions & Notes

- I tried to mimic the font 'Substance Bold' best I could by using Roboto.
- I used Bootstrap Icons as they seemed closest I could find to the icon library you are using. 
- Assuming Resources are Loaded via api, I made a json file that was "retrieved" from Api.
- Assumed the Category Tags were static and doesn't have dynamic user generated ones.
- Show more button should ask backend API to load more instead of just displaying more from the resource array.
- I considered making the bookmark and context menu on the Resource cards into lit components, but under this assignment they didn't need more done that a style class 
- When bookmarks are clicked this should also be ready to call the backend API, I considered saving the state using Pinia, but this would only be beneficial for  