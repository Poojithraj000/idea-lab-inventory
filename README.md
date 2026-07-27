# Idea Lab Archive
![Netlify](https://img.shields.io/badge/Hosted%20on-Netlify-00C7B7?style=flat&logo=netlify&logoColor=white)
![HTML](https://img.shields.io/badge/HTML-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Google Sheets](https://img.shields.io/badge/Data-Google%20Sheets-34A853?style=flat&logo=googlesheets&logoColor=white)

A personal hobby project I built to solve a small but annoying problem at my college lab.

Live: [idealab-archive.netlify.app](https://idealab-archive.netlify.app)

---

## Why I Built This

The Idea Lab at FISAT has a bunch of electronic components that students can borrow for their projects. The problem was simple but irritating. Nobody knew what was available. Students would walk in and ask, and the lab staff would have to check manually every single time.

I thought about this for a while and decided to just build something that fixes it. Nothing fancy. Just a clean page where anyone can open a link and see what is in the lab, what is available, and what is out of stock.

This is not an official college website or anything like that. I just built it as a side project because I felt like it needed to exist.

---

## Live Demo

[https://idealab-archive.netlify.app](https://idealab-archive.netlify.app)

---

## What It Does

**Search**
You can type any component name and the list filters instantly as you type.

**Filter by Category**
Components are grouped into categories like Sensors, Processing Units, Power Management, Tools, and more. You can filter to see just one category at a time.

**Stock Status**
Each component shows whether it is Available, Limited, or Unavailable. This updates automatically from a Google Sheet that the lab staff edits.

**Book a Component**
Clicking on any component opens a detail view. From there you can fill in your name, class, and purpose and submit a booking request.

**55+ Components Listed**
Things like Arduino boards, Raspberry Pi accessories, sensors, power converters, jumper wires, multimeters, and hand tools are all in there with real photos.

---

## Tech Used

| What | How |
|---|---|
| Structure | HTML |
| Styling | CSS |
| Logic | JavaScript |
| Data | Google Sheets (published as CSV) |
| Hosting | Netlify |

No frameworks, no libraries, no backend server. I kept it as simple as possible.

---

## The Google Sheets Part

This is the part I am most happy with. Instead of hardcoding the component list or setting up a database, I connected it to a Google Sheet.

The lab staff just opens the sheet, changes a stock value from `available` to `unavailable`, and the website reflects that change the next time someone loads the page. No login, no dashboard, no technical knowledge needed.

The sheet is published as a CSV and the JavaScript fetches it on every page load. That is it.

---

## The Telegram Part

When a student fills in the booking form and submits it, the lab staff gets an instant Telegram message with all the details. Name, class, component ID, and purpose.

No email, no checking a dashboard, no missing requests. The message just shows up on their phone.

I used the Telegram Bot API to send the message directly from the browser. No server needed. The bot token is used client side to post to the group chat the moment someone clicks Confirm Booking.

It is a simple setup but it works really well in practice.

---

## Folder Structure

```
idea-lab-inventory/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── images/
    └── components/
        └── (photos of each component)
```

---

## Categories in the Lab

- Processing Units (Arduino UNO, Arduino Mega, Raspberry Pi, etc.)
- Vision System
- Wireless Communication (Bluetooth, WiFi, RF modules)
- Human Machine Interface (LCD displays, keypads, etc.)
- Actuation
- Sensors (IR, flame, temperature, microphone, laser, etc.)
- Power Management (buck converters, boost converters, lithium chargers)
- Passive Components (resistor kits, capacitor kits, jumper wires)
- Tools (multimeter, tweezers, wire stripper, magnifying glass)
- Connectivity (USB cables, audio video cables, jumper wires)

---

## Run It Locally

No install or build step needed.

```
git clone https://github.com/Poojithraj000/idea-lab-inventory.git
cd idea-lab-inventory
```

Open `index.html` in your browser. It will fetch the live Google Sheet data as long as you have internet.

---

## About

I am **Poojith Raj R**, a Final year ECE student at FISAT. I build small things when I see a problem worth solving. This was one of those.

Feel free to look at the code, fork it, or use the idea for your own college lab.

---

*Built by Poojith Raj R*
