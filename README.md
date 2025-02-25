# BandSite

### Author
Katarina Musladin

---

## Project Overview
BandSite is a responsive and interactive website created for an up-and-coming band. The project is divided into three sprints, each focusing on different aspects of development.

---

## Sprint 1: Responsive Website

### Objective
The goal of Sprint 1 was to build a fully responsive website based on provided design mockups and specifications. The site follows a **mobile-first approach**, ensuring a seamless experience across all screen sizes.


## Technologies Used
- **HTML5, CSS3 (SCSS), JavaScript (ES6+)**
- **Flexbox & Responsive Design**
- **BEM Methodology**
- **Fetch API for Backend Integration**
- **Sass for Styling**

---

### Features & Requirements

#### Functional Requirements
- **Return Home Link**: The "BANDSITE" wordmark/logo in the top-left corner of the navigation bar links back to the bio page.

#### Visual Design Requirements
- The site closely matches the provided mockups and design specs.
- Fully **responsive** across all dimensions (320px - 1920px).
- Uses **responsive units** (%, em, rem) instead of fixed px values where applicable.
- Incorporates provided assets (hero image, musicians' image, photo gallery).

#### Implementation Details
- **Folder Structure**: Proper naming conventions and organization as per project guidelines.
- **Sass Styling**: Utilizing **Sass features** such as variables, mixins, and partials for maintainability.
- **BEM Methodology**: Class naming follows **Block-Element-Modifier (BEM) principles**.
- **Flexbox for Layout**: Sections and components are structured using **Flexbox**.
- **Component-Based Design**: Reusable components for consistent styling.

### Enhancements
- **Hover Effects**: 
  - Navigation and card components include hover effects for better UX.
  - Photo gallery images display in grayscale by default and return to color on hover using CSS filters.
- **Mailto Links**: Clicking on email addresses in the footer opens the user's email client.

---

## Sprint 2: Interactivity with JavaScript

### Objective
Sprint 2 introduces **JavaScript interactivity** and expands the website with a **Shows page**.

### Features & Requirements

#### Comments Section
- Users can add comments by entering their name and message.
- New comments appear at the **top** of the section.
- Three default comments are displayed when the page first loads.

#### Shows Page
- A **song is embedded** using SoundCloud.
- The **shows list is dynamically rendered** using JavaScript and an array of show data.

#### Implementation Details
- **JavaScript DOM Manipulation**: Content is added dynamically using JavaScript.
- **Event Listeners**: Handling form submissions and user interactions.
- **Sass Styling**: Styles managed in **SCSS** following BEM methodology.
- **Hover & Click States**: Shows change style when hovered or selected.
- **Dynamic Timestamp Formatting**: Converts timestamps to human-readable formats (e.g., "10 minutes ago").
- **Form Validation**: Ensures fields are not empty before allowing comment submission.

---

## Sprint 3: Backend Integration

### Objective
Sprint 3 integrates **backend functionality**, retrieving live comments and show data from an API.

### Features & Requirements

#### Live Comments
- Comments are **retrieved and stored on the server**.
- New comments appear dynamically after submission.

#### Shows Data
- The **shows list is fetched** from the API and displayed dynamically.

#### Implementation Details
- **AJAX & Fetch API**: Retrieves data from the backend.
- **Data Rendering**: Updates the UI dynamically based on server responses.
- **Error Handling**: Displays messages for failed API calls.
- **Styling**: Maintains the same SCSS structure and design consistency.

---

## Project Structure
```
BandSite/
│── assets/
│   ├── images/
│   ├── logos/
│── css/
│── pages/
│── index.html
│── global.scss
│── bio.scss
│── _typography.scss
│── README.md
```

---






