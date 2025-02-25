BandSite - Sprint 1

Project Overview

BandSite is a responsive and interactive website created for an up-and-coming band. The project is divided into three sprints, each focusing on a different aspect of the website's development.

SPRINT 1

The primary objective of Sprint 1 was to build a fully responsive website based on provided design mockups and specifications. The site follows a mobile-first approach and ensures a seamless experience across all screen sizes.

Features & Requirements

Functional Requirements

- Return Home Link: The "BANDSITE" wordmark/logo in the top-left corner of the navigation bar links back to the bio page.

Visual Design Requirements

- The site closely matches the provided mockups and design specs.

- Responsive at all dimensions (320px - 1920px), ensuring consistency across breakpoints.

- Mobile-first approach.

- Use of responsive units (%, em, rem) instead of fixed px values wherever applicable.

- Provided assets (hero image, musicians' image, photo gallery) must be incorporated correctly.

Implementation Requirements

- Proper folder structure and naming conventions as per project guidelines.

- Sass for styling: Utilize Sass features such as variables, mixins, and partials for maintainability.

- BEM Methodology: Follow Block-Element-Modifier (BEM) principles for class naming.

- Flexbox for Layout: Components and sections should be structured using Flexbox.

- Component-Based Design: Identify reusable components and apply styles accordingly.

Project Structure

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

Enhancements

- Hover Effects

- Navigation and card components incorporate hover effects for improved UX.

- Photo gallery images are displayed in grayscale by default and return to color on hover using CSS filters.

Additional Functional Enhancements

- Mailto Links: Clicking on email addresses in the footer opens the user's email client.


BandSite - Sprint 2

Project Overview

Sprint 2 focuses on adding interactivity to the BandSite using JavaScript and introducing a second page for the Shows section.

Functional Requirements

- Comments Section

- Users can add comments by entering their name and message.

- New comments appear at the top of the section.

- Three default comments are displayed when the page first loads.

Shows Page

- A song is embedded using SoundCloud.

- The shows list is dynamically rendered using JavaScript and an array of show data.

Implementation Details

- JavaScript DOM Manipulation: Dynamic content is added using JavaScript DOM methods.

- Event Listeners: Form submissions and interactions are handled via event listeners.

- Sass Styling: All styles are managed in SCSS and follow BEM methodology.

- Hover & Click States: Show items change style when hovered or selected.

- Dynamic Timestamp Formatting: Convert timestamps to human-readable formats (e.g., "10 minutes ago").

- Form Validation: Ensure fields are not empty before allowing comment submission.


SPRINT 3

Sprint 3 integrates backend functionality by retrieving live comments and show data from an API.

Functional Requirements

- API Integration: Fetch and display real-time data from the provided API.

- Live Comments: Comments are retrieved and stored on the server.

- Shows Data: Shows list is dynamically fetched from the API and displayed.

Implementation Details

- AJAX & Fetch API: Retrieve data from the backend.

- Data Rendering: Update the UI dynamically based on server responses.

- Error Handling: Implement error messages for failed API calls.

- Styling: Maintain the same structure and Sass styling as previous sprints.



