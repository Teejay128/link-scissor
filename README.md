# Link Scissor

## Description

Link Scissor is an application that helps you to make your favorite URLs as short as possible. With the customization options, it is even possible to store the links in your head, allowing you to easily access them whenever you want.

## Installation

To setup link scissor locally on your computer, carry out the following steps:

1. Clone The Repository:

Run this command in a terminal in VS Code

```git
git clone https://github.com/Teejay128/link-scissor.git
```

This creates a local version of the codebase on your machine 2. Install Dependencies:

Run this command in the root project directory

```git
npm install
```

This installs all the necessary dependencies and packages 3. Set Environmental Variables

Create a `.env` file with the following variables

```env
# Development
PORT=<port number (4000)>
API_URL=<application link (localhost:<PORT>)
MONGODB_URL=<mongodb database url>
```

This creates environmental variables for the application 4. Start Application

Run this command in the terminal

```git
npm start
```

Once server is running and database is connected, visit the API_URL (above), or enter `localhost:4000` in your browser

## Usage

Visit the live version hosted on render [here](https://linkscissor.onrender.com/)

Enter the link to be shortened in the field labeled `Long URL`
Enter your custom code, (not more than 8 characters)
Click the `Shorten Link` button
Previously shortened links can be viewed in the Link History

Read the full [documentation](https://aribadawulo.hashnode.dev/link-scissor-documentation) for information on endpoints and additional details

## Key Features

-   Customization:
    Users can customize their url codes, rather than having a random code generated. For instance, you could use the code `myrsm` to store a link to your resume.
-   Cloud stored:
    Your links are stored on the cloud, allowing you to access them from any device with an internet connection.
-   Clicks:
    Clicks to your link are monitored and are reflected in the clicks field of the link history table.
-   QR Code:
    Each link gets a unique QR Code that allows easier access just by scanning.

## Technologies

NodeJS(express) for server configuration
MongDB Compass/Atlas as database
EJS for view rendering
Bootstrap for simple styling

## Contact

[GitHub](https://github.com/Teejay128)
[LinkedIn](https://www.linkedin.com/in/joseph-taiwo-442a10233/)
[Blog](https://aribadawulo.hashnode.dev/)
[Email](emperortj128@gmail.com)

### Progress

This project is still a work in progress, with a list of additional features to be added. Feel free to raise an issue, or make a pull request of your contribution.

Thanks for Visiting, Leave A Star :heart

### Features

The main purpose is for data gathering and what not

-   Link Scissor - Link Scraping
-   Youtube Scraper
-   Material (PDF) parser
