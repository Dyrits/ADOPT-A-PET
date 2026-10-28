# Adopt a Pet!

A pet adoption website built with React and React Router, from a Codecademy project.

## About The Project

The project brief (from the course assignment): practice using React Router to add client-side routing to a React application - a pet adoption website that allows users to view all the animals of a particular species and view the profiles of specific animals.

The app renders a `HomePage` component that fetches and displays all adoptable pets, and a `PetDetailsPage` to display the details for a particular pet. The objectives of the assignment:

- The `HomePage` component responds to the browser's current URL by displaying only pets of the species the user wishes to view.
- The `PetDetailsPage` displays when the browser's current URL includes a specific pet's `id`, with data for the correct pet based on the URL parameters.
- When the user searches for a pet in the search bar, they are redirected to the `SearchPage`, which uses the query parameter `name` to filter pets by name.
- When a user clicks a pet whose details are not available, they are redirected to a `PetNotFoundPage`, from which a "Go Home" button takes them back to the root path.

This project uses [Mock Service Worker](https://mswjs.io/docs/) (MSW) to replicate the functionality of an external API.

### Built With

- React (Create React App)
- React Router
- Mock Service Worker

## Getting Started

Install the dependencies:

```bash
npm install
```

Start the application locally:

```bash
npm start
```

## License

This project is distributed under the MIT License (from the course starter code). See the LICENSE file for details.
