# Garrett Priddy FDW think Interview Challenge

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/Kaboom242/GarrettPriddy-FWDthink-Project.git
   cd GarrettPriddy-FWDthink-Project
   ```
2. ``` npm install ```
3. ``` npm run dev ```
4. Open browser to Localhost url it outputs likely: http://localhost:5173/

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

## Assumptions & Notes

- **Font:** I tried to mimic the font 'Substance Bold' best I could by using Roboto.
- **Icons:** I used Bootstrap Icons as they seemed closest I could find to the icon library you are using. I figured it wasn't necessary here to make identical icons using illustrator.
- **Resource Data:** Assuming Resources are Loaded via api, I simulated this with a JSON file to mimic data retrieval from the backend.
- **Category Tags:** I assumed that category tags are static and not user-generated. This simplified the implementation for this exercise.
- **Show More Button:** The "Show More" button should trigger a backend API request to load additional resources instead of just displaying more items from the preloaded resource array.
- **Componentization:** I considered breaking out the bookmark and context menu into separate Lit components. However, under the scope of this assignment, their current implementation as styled elements was sufficient.
- **Bookmark Behavior:** Clicking the bookmark icon should trigger a backend API call. While I considered managing the state using Pinia, but this would only be useful under this challenges constraints, and not strictly necessary.
- **No Data Fallback:** If the backend API is unavailable for resource Cards, a fallback mechanism (e.g., displaying cached data or an error message) should probably be added. 