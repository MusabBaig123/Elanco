Vite –Prerequisite: install node.js (version 18 or
higher)
To create a React app using Vite: Open a terminal and
run
npm create vite@latest my-react-app
-- --template react
What does it do?
Creates a folder my-react-app with some template
files
Run the app: Go into the app folder and run
cd my-project
npm install
npm run dev

TickSight – UK Tick Sighting Tracker  
An interactive React application for visualising tick activity across the UK.  
Developed for the **Elanco Frontend Technical Task – Placement Program**.

 Overview

TickSight is a web application that maps tick sightings across the UK using real-time data from the Elanco API.  
It allows users to:

- Browse an **interactive map** of tick sightings  
- Filter sightings by **species** and **severity level**  
- Click markers to view details  
- See a **timeline view** of all sightings  
- Open a **modal** for full sighting information  
- Read educational information (species, prevention, seasonal activity)  
- Report a new sighting (with validation & image upload)

The goal is to make an intuitive, informative tool for public awareness.


Features

Interactive Map (React Leaflet)
- Pins each tick sighting based on its coordinates  
- Marker popups show species, date, severity, and a details link  
- Species filter (5 fixed species)
- Severity filter (Low, Medium, High)
- Designed to meet **all core map requirements in the brief

Sighting Information
- Modal view for full details  
- Click-through from map markers  
- Timeline list view  
- Filter by location  
- Quick navigation options

Education Section
- Tick species guide  
- Prevention tips  
- Seasonal activity chart using Recharts

Report a Sighting
- Custom form  
- Validation: error, warning & success messages  
- Image upload  
- Simulated local DB (per requirements)

 API Used

 https://dev-task.elancoapps.com/data/tick-sightings

No authentication or API key required.

 Tech Stack

**Frontend**  
- React 19  
- Vite  
- React Router 7  
- CSS  

**Mapping**  
- React Leaflet  
- Leaflet  
- react-leaflet-markercluster  

**Charts & Data**  
- Chart.js  
- react-chartjs-2  
- Recharts  
- Axios  


 Installation & Running the Project

Follow these steps to run the project locally.

Clone the repository

git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git

Move into the project folder
cd my-tick-react-app

Install dependencies

This installs everything from package.json:

npm install

 Run the development server
npm run dev


The project will now run at:

 http://localhost:5173

This project uses the live API from the task:

Project Walkthrough Video
https://youtu.be/Z989noDjaDY
