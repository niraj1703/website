import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'


// const border = document.querySelector('border'); // Replace 'div' with the ID or class of your actual div element

// border.addEventListener('click', function () {
//   window.location.href = 'https://www.example.com'; // Replace 'https://www.example.com' with the URL of your desired page
// });


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
