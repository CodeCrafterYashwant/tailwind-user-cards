# Dynamic User Card Generator

A responsive, visually appealing web application that fetches random user profiles in real-time from the [Random User API](https://randomuser.me/) and dynamically renders them as sleek, polished profile cards. Built purely with **Vanilla JavaScript** and styled with **Tailwind CSS** using a modern glassmorphism aesthetic.

🌐 **Live Demo:** [User Card](https://tailwindusercards.netlify.app/)

---

## 🚀 Features

* **Dynamic Data Fetching:** Pulls real-time mock user data (full name, email address, high-resolution profile picture, and user ID) from a public API.
* **Customizable Quantity with Fallback:** Includes an input box where you can specify exactly how many user cards to fetch and display. If you do not provide a number or enter `0`, it will automatically default to showing **5 users**.
* **Instant Refresh:** Dedicated refresh action button fetches and renders a brand-new set of user profiles on demand based on your requested count.
* **Modern Glassmorphic UI:** Features a dark gradient background, frosted glass card effects (`backdrop-blur`, semi-transparent borders, and soft glowing drop shadows), plus smooth hover lift animations.
* **Fully Responsive:** Built with CSS Flexbox and Tailwind CSS utility classes to look great on mobile, tablet, and desktop screens.

---

## 🛠️ Technologies Used

* **HTML5:** Semantic markup and structure.
* **Vanilla JavaScript (ES6+):** Asynchronous Fetch API, DOM manipulation, dynamic element creation, and event handling.
* **Tailwind CSS (via CDN):** Rapid utility-first styling with glassmorphism effects and transitions.
* **Random User Generator API:** External REST API providing user dataset.
* **Netlify:** Cloud hosting and deployment platform.

---

## 📂 Project Structure

This project is lightweight and focused on two core files:

```plaintext
├── index.html   # Main HTML file containing Tailwind CDN, layouts, input, and UI container
├── script.js    # JavaScript logic for API calls, card rendering, and event listeners
└── README.md    # Project documentation
```

### File Breakdown

* **[`index.html`](./index.html)**:
  * Loads the Tailwind CSS CDN.
  * Sets up the gradient background container (`.main`) where user cards are appended.
  * Provides the input element for defining card count and the floating **Refresh** button.
  * Links to `script.js`.

* **[`script.js`](./script.js)**:
  * `featchusers(num)`: Makes an asynchronous `fetch()` request to `https://randomuser.me/api/?results=${count}` (defaults to 5 if no value or 0 is provided).
  * Dynamically creates user card elements (`div`, `img`, `h1`, `p`) with Tailwind glassmorphism styles and populates them with API data.
  * Handles input and change events on the number input to adjust user count.
  * Handles the click event on the Refresh button to trigger fresh data fetching.

---

## 📦 Installation & Setup

Since this project uses Vanilla JavaScript and the Tailwind CDN, no build steps or package managers are required.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/CodeCrafterYashwant/tailwind-user-cards.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd tailwind-user-cards
   ```

3. **Open the project:**
   * Open [`index.html`](./index.html) directly in any modern web browser, or
   * Use an extension like **VS Code Live Server** (`Right Click -> Open with Live Server`).

---

## 💻 How to Use

1. **Visit the App:** Open the live site at [User Card](https://tailwindusercards.netlify.app/) or open `index.html` locally.
2. **Enter Desired Quantity:** Use the number input box located near the bottom right to specify how many user cards you want to see.
   > **Note:** If you leave the box blank or enter `0`, the app automatically defaults to displaying **5 user cards**.
3. **Generate / Refresh:** Click the **Refresh** button to fetch and render that exact number of new user profiles.

---

## 👨‍💻 Project Creator & Attribution

```plaintext
===================================================================================
                          DYNAMIC USER CARD GENERATOR
===================================================================================
This entire project — including the API integration, DOM manipulation logic, 
responsive UI design, and glassmorphism Tailwind styling — was conceived, 
designed, and developed entirely by:

                            YASHWANT NAMDEV
                             Web Developer
               GitHub: https://github.com/CodeCrafterYashwant
===================================================================================
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/CodeCrafterYashwant/tailwind-user-cards/issues).

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
