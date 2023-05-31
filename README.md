# EPA_Example_Project

## Summary 

This repo is a Sample Case Study Project for the EPA for Software Level 4 course. Please ensure you carefully read the project brief document located in the [documentation](/documentation) folder above.

This repo contains an example of the files and resources neccessary to reach an MVP in your software deliverable, with all KSBs being hit in line with the provided brief (see "Example Project Brief.docx"). 

This project does not include all of the auxilliary documentation and proof it does meet all expectations, and you will be expected to document and evidence your work throughout your own implementation of this deliverable.  

All historical feature branches have been left intact and are numbered to allow you to follow along with how the project was developed, feature by feature.

## Example Brief

You have been hired as a Software Engineer to create a social media application for book lovers. A graphical user interface is required to allow users to write book reviews, as well as create and manage their personal profiles. 

In order for the application to be effective it must be able to do the following:
- Create new book reviews
- Read existing book reviews
- Update existing book reviews
- Delete book reviews
- Create user profiles
- Update user profiles
- Delete user profiles

The owners are requesting the data be stored within some form of database and are open to more functionalities being added. 

The team is also looking into the benefit of adopting a DevOps mindset throughout this project and would like to explore the possibility of setting up a Jenkins pipeline to automatically test the software.

## Running

### Prerequisites

In order to run this application you will need the following:
- NodeJS 
- MongoDB local or remote (Atlas)

### Setup

You should start with forking this repo to your own personal profile and then cloning a copy to your machine. Then run `npm i` in both the backend and frontend folders.

<details>
  
 <summary>NodeJS</summary>
  
  - Click [here](https://nodejs.org/en) for NodeJS install.
  
</details>

<details>
  
  <summary>MongoDB</summary>
  
  - [Windows installation guide](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/)  
  - [Linux(Ubuntu) installation guide](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/)  
  - [MacOS installation guide](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/)  
  - [Docker installation guide](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-community-with-docker/)  
  - [More installation guides](https://www.mongodb.com/docs/manual/installation/)  
  
  - See [here](https://www.mongodb.com/basics/create-database) for a  beginners guide for MongoDB that includes basic setup and syntax.
  
</details>

<details>
  
  <summary>Jenkins</summary>
  
  - [Windows installation guide](https://www.jenkins.io/doc/book/installing/windows/)  
  - [Linux(Ubuntu) installation guide](https://www.jenkins.io/doc/book/installing/linux/#debianubuntu)  
  - [MacOS installation guide](https://www.jenkins.io/doc/book/installing/macos/)  
  - [Docker installation guide](https://www.jenkins.io/doc/book/installing/docker/)  
  - [More installation guides](https://www.jenkins.io/doc/book/installing/)  
  
  For a detailed guide on how the pipeline for this example was set up, there is a written guide in the [documentation](/documentation) folder above.
  
  To reach MVP, the goal is to have a pipeline that fully builds and tests your application, passing at every stage, like so: 
  ![Pipeline success image](/documentation/pipeline_success.png)
  
</details>

### Getting Started
Locate the `index.js` file in the backend and you will see the following lines:
```
const PORT = 8080;
const MONGO_URL = "mongodb://127.0.0.1:27017/EPA";
```

This assumes a local MongoDB deployment with the default port **27017** and a database called **EPA**. If you would like to change either of these you can do so by modifying these lines prior to running the application. If you opt for a remote MongoDB implementation like MongoDB Atlas, then again this is where the URL would go, but be mindful that the URI follows the following structure:

```
mongodb+srv://MY_USER:MY_PASSWORD@MY_SERVER.mongodb.net/MY_DATABASE
```

Note that the password is visible, so you would want to explore the use of `process.env` or equivelent. 

Then run `npm start` in both folders to spin up the application.

Then the site will then be available at `localhost:3000`.

## A Note on Styling
[MaterialUI](https://mui.com/) is used for styling in this example due to it's out of the box simplicity with React. 
[Bootstrap](https://getbootstrap.com/) or similar libraries are also viable alternatives.

For further simplicity, when designing pages, MaterialUI [templates](https://mui.com/material-ui/getting-started/templates/) were used. 

When you view the source behind these templates and compare them to the pages in this project (components such as Login & SignUp) you will see only minor modifications were made in some instances. 

You could try using a [diff tool](https://www.diffchecker.com/) or features like "compare" in VSCode to make this comparison easier. 

Here is a full list of MaterialUI templates and components used:
- [Side-in side](https://github.com/mui/material-ui/tree/v5.12.3/docs/data/material/getting-started/templates/sign-in-side)
- [Sign Up](https://github.com/mui/material-ui/tree/v5.12.3/docs/data/material/getting-started/templates/sign-up)
- [Album](https://github.com/mui/material-ui/tree/v5.12.3/docs/data/material/getting-started/templates/album)
- [App Bar w/ Responsive Menu](https://mui.com/material-ui/react-app-bar/#app-bar-with-responsive-menu)
