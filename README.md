# 47 5th St. Petaluma - Landing Page

A beautiful, lightweight landing page designed to celebrate the history of **47 5th St.**, an 1890s-era Victorian home located in the historic A St. District of Petaluma.

## Overview
This repository contains a simple, responsive, and performance-optimized HTML/CSS/JS frontend built to showcase an architectural rendering of the property alongside its historical background. It was originally conceptualized as an elegant, locally-hosted homepage.

### Features
- **Responsive Architecture**: Built cleanly from the ground up to support any screen size.
- **Image Optimization**: WebP optimization is automatically built into the layout using the `<picture>` element for rapid load speeds.
- **Dynamic Greeting & Time**: Vanilla JS ensures the greeting seamlessly updates contextually with the local time of day.
- **Anti-Spam Contact Link**: Contact email is obfuscated to protect against scraping bots by dynamically assembling the `mailto` block at runtime.

## Local Development
To run this project locally, no framework or heavy dependencies are required. 
Simply open `index.html` in your browser of choice or launch a basic local HTTP server:
```bash
python3 -m http.server
```

## Credits
- Architecture Rendering by original artist.
- Gothic Revival Style description sourced via Historic A St. District publication.
