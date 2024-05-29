# Movie World

Movie World is a TypeScript-based React application that allows users to browse a list of movies and compare prices from different providers. It fetches movie data from an endpoint to display the cheapest movies initially, and upon selecting a movie, it calls another API to fetch detailed information and price comparisons from various providers.

## Features

- Displays a list of movies and prices fetched from an endpoint.
- Allows users to click on a movie to view more detailed information and compare prices from different providers.
- Utilizes TypeScript for type safety and better code organization.
- Uses React for building interactive user interfaces.
- Fetches data from external APIs to provide real-time information to users.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/desaiumesh/MovieWorld

2. Navigate to the project directory:
   ```bash
   cd MovieWorld
   
3. Install dependencies:
   ```bash
   npm install

## Usage

1. Start the development server:
   ```bash
   npm run dev
2. Open your browser and navigate to http://localhost:5173 to view the application.

### Dependencies
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A statically typed superset of JavaScript that compiles to plain JavaScript.
- **Axios**: A promise-based HTTP client for making HTTP requests.
- **React Router**: A library for adding routing to React applications.

### API Endpoints
- **/api/cheapest**: Endpoint for fetching a list of cheapest movies with details and prices.
- **/api/movie/{title}**: Endpoint for fetching list of movies from different providers matching movie title.


