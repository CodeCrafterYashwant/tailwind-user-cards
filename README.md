# Dynamic User Card Generator

A responsive, visually appealing web application that fetches random user data from the [Random User API](https://randomuser.me/) and renders them as polished profile cards. Built with Vanilla JavaScript and styled entirely with Tailwind CSS using a modern glassmorphism aesthetic.

## 🚀 Features

* **Dynamic Data Fetching:** Pulls real-time mock user data (name, email, profile picture, ID) from a public API.
* **Customizable Quantity:** Includes a fixed input field to define exactly how many user cards to generate.
* **Instant Refresh:** A floating action button allows users to fetch a brand new set of profiles instantly.
* **Modern UI:** Features a dark gradient background, glassmorphism card effects (backdrop-blur, translucent borders), and hover animations.
* **Fully Responsive:** Uses CSS Flexbox and Tailwind's responsive utility classes to adapt to any screen size.

## 🛠️ Technologies Used

* **HTML5:** Semantic structure.
* **Vanilla JavaScript:** DOM manipulation, Event Listeners, and the Fetch API.
* **Tailwind CSS (via CDN):** Rapid utility-first styling.
* **Random User API:** Backend data source.

## 📦 Installation & Setup

Since this project uses Vanilla JS and the Tailwind CDN, no build tools or package managers are required. 

1. Clone the repository:
   ```bash
   git clone [https://github.com/](https://github.com/)[YourUsername]/[YourRepositoryName].git
   ```
2. Navigate to the project directory:
   ```bash
   cd tailwind-user-cards
   ```
Open index.html in your preferred web browser, or use an extension like VS Code Live Server.

💻 How to Use
View Users: The app automatically loads a default user card on the first load.

Change Quantity: Enter a number in the red-bordered input box at the bottom right of the screen.

Generate: Click the Refresh button to fetch the specified number of new user profiles. 
📂 Folder Structure
├── index.html       # Main HTML file containing Tailwind classes and UI structure
├── script.js        # JavaScript logic for API fetching and DOM rendering
└── README.md        # Project documentation
🤝 Contributing
Contributions, issues, and feature requests are welcome!
Feel free to check the issues page.

📝 License
This project is open source and available under the MIT License.
