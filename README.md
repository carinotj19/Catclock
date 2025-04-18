# Cat Clock

A fun, single‑page web app that shows the current time and changes the cat image and greeting message based on morning, afternoon, or evening.

## 📂 Files Included

- `index.html` – HTML structure with headings, time display, and an image placeholder.  
- `styles.css` – Centered layout, custom fonts, and styling for headings, clock text, and cat image.  
- `script.js` – JavaScript logic that:
  - Retrieves the current time every second.
  - Formats hours, minutes, and seconds into HH:MM:SS AM/PM.
  - Swaps the image source and greeting text depending on the hour.
- `images/` – Contains `morningcat.png`, `afternooncat.jpg`, and `nightcat.jpg`.

## 🚀 Getting Started

### Prerequisites

- Any modern web browser (Chrome, Firefox, Edge, Safari).

### Installation

1. **Clone the repo:**

   ```bash
   git clone https://github.com/carinotj19/Catclock.git
   ```

2. **Navigate into the project folder:**

   ```bash
   cd Catclock
   ```

3. **Open `index.html`:**

   - Double‑click `index.html` in your file explorer  
   - Or serve via a simple HTTP server:
     ```bash
     npx live-server .
     ```

## 📈 Usage

- The page auto‑updates every second to show the current time.  
- Between midnight and noon, it shows the morning cat with “Good morning!”  
- Between noon and 6 PM, it shows the afternoon cat with “Good afternoon!”  
- After 6 PM, it shows the night cat with “Good evening!”

## 🎨 Customization

- Swap out the images in `images/` to use your own.  
- Tweak the time thresholds (`morning`, `afternoon`, `nightTime`) in `script.js`.  
- Adjust font sizes, colors, and layout in `styles.css`.

## 📄 License

This project is open‑source under the MIT License. See the [LICENSE](LICENSE) file for details.  
