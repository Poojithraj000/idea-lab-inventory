# Idea Lab Archive

**A hardware inventory system built for the Innovation Lab at FISAT**

Live Site: [idea-lab-fisat.vercel.app](https://idea-lab-fisat.vercel.app)

---

## What This Is

The Idea Lab at FISAT has a large collection of electronic components that students borrow for their projects. Before this, there was no proper way to know what components were available, what was out of stock, or what category something belonged to.

I built this as a clean, searchable web interface where anyone can open the link and instantly see the full hardware inventory, filter by category, and check what is currently available or not.

The lab staff can update the stock status directly from a Google Sheet. No code changes needed. The website reads the sheet automatically every time the page loads.

---

## Live Demo

Open this link in your browser:

**[https://idea-lab-fisat.vercel.app](https://idea-lab-fisat.vercel.app)**

---

## Features

**Search and Filter**
Type any component name and the grid filters instantly. You can also filter by category like Sensors, Processing Units, Wireless Communication, and more.

**Real Time Stock Status**
Components are marked as Available, Limited, or Unavailable. These values come directly from a Google Sheet that the lab staff maintains.

**Google Sheets Backend**
The inventory data is stored in a published Google Sheet as a CSV feed. The website fetches this on every page load. No database, no backend server, no API key needed.

**Component Detail View**
Clicking any component card opens a modal with the component image, category, and current stock status.

**55+ Components Catalogued**
Everything from Arduino boards and Raspberry Pi accessories to sensors, power modules, and hand tools is listed with a real photo.

---

## Tech Stack

| Part | Tool Used |
|---|---|
| Structure | HTML5 |
| Styling | Vanilla CSS |
| Logic | Vanilla JavaScript |
| Data Source | Google Sheets (CSV export) |
| Hosting | Vercel |

No frameworks. No build tools. Just plain HTML, CSS, and JavaScript.

---

## How the Google Sheets Integration Works

1. The lab staff maintains a Google Sheet with columns: `id`, `name`, `category`, `stock`, `imagePath`
2. The sheet is published to the web as a CSV
3. On every page load, `script.js` fetches the CSV, parses it row by row, and renders the inventory grid
4. To update a component's status, the staff just edits the sheet and refreshes the site

This approach means zero infrastructure cost and zero technical knowledge needed to maintain the data.

---

## Project Structure

```
idea-lab-inventory/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── images/
    └── components/
        └── (55+ component photos)
```

---

## Categories Available

- Processing Units (Arduino UNO, Arduino Mega, Raspberry Pi, etc.)
- Vision System (cameras, lenses)
- Wireless Communication (Bluetooth, WiFi, RF modules)
- Human Machine Interface (LCD displays, keypads, etc.)
- Sensors (IR, flame, temperature, microphone, laser, etc.)
- Power Management (buck converters, boost converters, lithium chargers)
- Passive Components (resistor kits, capacitor kits, jumper wires)
- Tools (multimeter, tweezers, wire stripper, magnifying glass)
- Cables and Connectors

---

## How to Run Locally

There is no build step. Just open the folder.

```
git clone https://github.com/Poojithraj000/idea-lab-inventory.git
cd idea-lab-inventory
```

Then open `index.html` in your browser. It will fetch the live Google Sheet data automatically as long as you have internet.

---

## About

Built by **Poojithraj**, a 3rd year Electronics and Communication Engineering student at FISAT.

This started as a solution to a real problem. Lab staff had no easy way to tell students what components were available. Now they just share the link and students can check it themselves before visiting the lab.

---

## Repository

[github.com/Poojithraj000/idea-lab-inventory](https://github.com/Poojithraj000/idea-lab-inventory)
