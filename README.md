📋 User List App with Bootstrap and React
This is a simple React application that fetches and displays a list of users from a public API using a styled Bootstrap table.

<h1>🚀 Features</h1>

✅ Fetches user data from DummyJSON

✅ Displays data in a clean, responsive Bootstrap-styled table

✅ Organized using reusable components (ListGroup, ListItem)

✅ Written in TypeScript

<h1>🧱 Project Structure</h1>


src/
├── App.tsx
├── component/
│   ├── ListGroup.tsx
│   ├── ListItem.tsx
│   └── types.ts (optional)
├── App.css
└── index.tsx

📦 Setup & Installation
Clone the repo


npm install
Install Bootstrap


npm install bootstrap
Import Bootstrap in your entry file
In src/main.tsx (or wherever your entry point is), add:


import 'bootstrap/dist/css/bootstrap.min.css';
Start the development server

npm start

<h1>🧩 Components Overview</h1>

App.tsx
Root component that renders <ListGroup />.

ListGroup.tsx
Fetches user data from API using useEffect.

Stores data in state and passes it to ListItem.

ListItem.tsx
Renders the user data in a responsive, Bootstrap-styled table.


<h1>🖼️ Preview</h1>

<sub>(Replace this with a screenshot of your app)</sub>

🔗 API Reference
https://dummyjson.com/users

🛠 Tech Stack
React

TypeScript
Bootstrap 5


