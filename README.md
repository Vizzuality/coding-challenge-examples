## Project boilerplate generator

Use the project boilerplate generator of your choice. You're free to use the one on this repo.

## Objective

Write a small frontend app that fetches photos data from an URL and displays them on a grid of cards. Each card should have the photo title, a link to the large version and a thumbnail, and all cards should have the same height. The grid should include pagination or lazy loading.

Include a button that lets you sort by title in ascending/descending order, and displays the current order. (See top right corner of the wireframe).

Make it look good, doesn't have to be very sophisticated.

## Requirements

- Use ES6+ syntax.
- Use React or any other library of your choice (even no library at all) as long as you demonstrate a component oriented architecture.
- Use Redux or any other state management library or approach of your choice.
- Use the Container-Component pattern to connect the state from the store with the components.

## Bonus

- Use some form of modular/scoped css or CSS-in-JS solution.
- Include a loading spinner or placeholder.
- Describe any bottleneck or difficulties you might find.

## Data

`https://jsonplaceholder.typicode.com/photos?_limit=9&_page=1&_sort=title&_order=asc`

## API Docs

`https://github.com/typicode/json-server`

## Wireframe

![image](https://raw.githubusercontent.com/Vizzuality/coding-challenge-examples/cards-grid/public/images/grid-wireframe.png)
