# Tours

Welcome to React Tours Explorer, a web application built with React that allows users to explore exciting tours from around the world. The project fetches tour data from the [Tours API](https://course-api.com/react-tours-project) and presents it in an interactive and user-friendly interface.

## Features

- **Dynamic Tour Listings:** View a list of available tours with captivating images, tour names, and prices.

- **Read More/Show Less Functionality:** Dive into the details of each tour using the "Read More" button and toggle back with the "Show Less" button.

- **Delete Tours:** Remove a tour from the interface if you're not interested. Each tour includes a "Delete" button for quick removal.

## Project Structure

The project has the following structure:

- **src**: This directory contains the source code for the Vite React application.

  - **components**: Within this directory, you'll find React components used throughout the application.

    - **App.jsx**: The main React component responsible for rendering user data and coordinating the overall application structure.

    - **main.jsx**: Serving as the entry point for the Vite React application, this file initiates the rendering process and sets up the initial environment.

    - **loading.jsx**: A component designed to inform users that the website is awaiting data from the API, providing a visual cue during data retrieval.

    - **tours.jsx**: Responsible for fetching data from the specified API link and passing the retrieved values down to the Tour component using the Context API. This file plays a crucial role in managing and distributing tour data within the application.

    - **tour.jsx**: Iterates over the list of fetched data and dynamically displays it in the application interface. Each tour is presented individually, leveraging the data provided through the Context API.

    - **refresh.jsx**: When the list of tours is empty, this component is displayed, prompting the user to refresh and retrieve the data. It ensures a seamless experience even when the user encounters an empty tours list.

This organized structure ensures a modular and maintainable codebase, allowing for clear separation of concerns and facilitating efficient development and maintenance of your Vite React application.


## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/osamalmezouari/tours.git

   ```
2. Navigate to the project directory:

    ```
    cd tours
    ```
3. Install dependencies:   
    ```
    npm install
    ```
4. Run the application:
    ```
    npm run dev

5. Open your browser and visit 
    ```
    http://localhost:3000 to view the user display page. 
    ```
## User Data
The user data is stored in the src/data/users.json file. Each user has the following attributes:

## Tour Properties

- **id**: A unique identifier assigned to each tour, facilitating easy reference and identification within the application.

- **info**: A detailed description providing valuable information about the tour. This could include highlights, features, and any other pertinent details to captivate potential participants.

- **image**: The URL or path pointing to the tour's captivating photo. A visually appealing representation to entice users and provide a glimpse into the tour experience.

- **price**: An essential element indicating the cost of the tour. This monetary value provides transparency to users, helping them make informed decisions based on their budget and preferences.

## Technologies Used
- React
- Vite
- JavaScript (ES6+)
- HTML
- CSS

## Contributors

- [osamalmezouari](https://github.com/osamalmezouari)

## License

This project is licensed under the [john smilga](https://github.com/john-smilga).