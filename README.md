#Instagram Profile Viewer

A simple web application built using **Node.js, Express.js, EJS, HTML, CSS, and JSON**.

#Features

- View Instagram-style profiles using a username
-  Display followers and following
- Display posts, likes, and comments
- Dynamic routing using Express.js
- Shows an error page for an unavailable username
- Profile data stored in JSON

#Technologies Used

- Node.js
- Express.js
- EJS
- HTML
- CSS
- JSON

#How to Run

1.Clone the repository

bash
git clone YOUR_REPOSITORY_URL


2.Install dependencies

bash
npm install


3.Start the server

bash
node index.js


4.Open in your browser:

text
http://localhost:8080


#Example

Try these URLs:

text
/ig/cats
/ig/dogs


If the username does not exist, the application displays **"No Such Account"**.

#Project Structure

text
├── public
│   └── style.css
├── views
│   ├── home.ejs
│   ├── instagram.ejs
│   └── error.ejs
├── data.json
├── index.js
├── package.json
└── README.md
