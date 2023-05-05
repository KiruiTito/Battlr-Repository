# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

  #Battlr-App 
This is a React-based web application that allows users to view a collection of bots, add them to their own army, and view details about individual bots.

The application features the following components:
BotCollection:
This is the main component that fetches the data from a server and displays a list of bots. It also allows users to filter the list of bots based on their bot class and delete bots from the collection.

BotDetails:
This component displays the details of an individual bot, including their image, name, bot class, health, armor, damage per second, and catchphrase. Users can add the bot to their army from this component.

The app uses the following hooks:
useState:
to manage the state of the bots list, user's bot army, selected bot, whether the user is viewing their army, and selected bot class.

useEffect:
to fetch the bots list from a server when the component mounts.

How to run the app
Clone this repository to your local machine.
Run npm install to install the dependencies.
Start the server by running npm start.
Open your browser and go to http://localhost:3000/ to view the app.
How to use the app
On the main page, you can filter the list of bots by selecting a bot class from the dropdown menu.
You can view the details of a bot by clicking on the "See Details" button.
From the details page, you can add the bot to your army by clicking on the "Add to Army" button.
You can view your bot army by clicking on the "View Your Bot Army" button on the main page.
From the army page, you can remove bots from your army by clicking on the "Remove" button next to the bot's name.
You can go back to the previous page by clicking on the "Back" button.
