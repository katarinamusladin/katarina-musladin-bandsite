import BandSiteApi from "./band-site-api.js";

const apiKey = "e0eea5f0-0f8c-4b54-9fc4-ff50843766d4";
const api = new BandSiteApi(apiKey);

function formatDate(timestamp) {
  const date = new Date(timestamp);

  const weekdayOptions = { weekday: "short" };
  const monthOptions = { month: "short" };
  const dayOptions = { day: "2-digit" };
  const yearOptions = { year: "numeric" };

  const weekday = date.toLocaleDateString("en-US", weekdayOptions);
  const month = date.toLocaleDateString("en-US", monthOptions);
  const day = date.toLocaleDateString("en-US", dayOptions);
  const year = date.toLocaleDateString("en-US", yearOptions);

  return `${weekday} ${month} ${day} ${year}`;
}
function createEventItem(show) {
  const itemDiv = document.createElement("div");
  itemDiv.className = "shows-section__item";

  const dateDetailDiv = document.createElement("div");
  dateDetailDiv.className = "shows-section__item-detail";
  const dateLabel = document.createElement("span");
  dateLabel.className = "shows-section__label";
  dateLabel.textContent = "DATE";
  const dateSpan = document.createElement("span");
  dateSpan.className = "shows-section__date";
  dateSpan.textContent = formatDate(show.date);

  dateDetailDiv.appendChild(dateLabel);
  dateDetailDiv.appendChild(dateSpan);

  const venueDetailDiv = document.createElement("div");
  venueDetailDiv.className = "shows-section__item-detail";
  const venueLabel = document.createElement("span");
  venueLabel.className = "shows-section__label";
  venueLabel.textContent = "VENUE";
  const venueSpan = document.createElement("span");
  venueSpan.className = "shows-section__venue";
  venueSpan.textContent = show.place;

  venueDetailDiv.appendChild(venueLabel);
  venueDetailDiv.appendChild(venueSpan);

  const locationDetailDiv = document.createElement("div");
  locationDetailDiv.className = "shows-section__item-detail";
  const locationLabel = document.createElement("span");
  locationLabel.className = "shows-section__label";
  locationLabel.textContent = "LOCATION";
  const locationSpan = document.createElement("span");
  locationSpan.className = "shows-section__location";
  locationSpan.textContent = show.location;

  locationDetailDiv.appendChild(locationLabel);
  locationDetailDiv.appendChild(locationSpan);

  const button = document.createElement("button");
  button.className = "shows-section__button";
  button.textContent = "BUY TICKETS";

  itemDiv.appendChild(dateDetailDiv);
  itemDiv.appendChild(venueDetailDiv);
  itemDiv.appendChild(locationDetailDiv);
  itemDiv.appendChild(button);

  return itemDiv;
}

function displayEvents(events) {
  const showsList = document.querySelector(".shows-section__list");
  showsList.innerText = "";

  events.forEach((show) => {
    const eventItem = createEventItem(show);
    eventItem.addEventListener("click", () => {
      document.querySelectorAll(".shows-section__item").forEach((item) => {
        item.classList.remove("shows-section__item--selected");
      });

      eventItem.classList.add("shows-section__item--selected");
    });
    showsList.appendChild(eventItem);
  });
}

async function fetchAndDisplayShows() {
  try {
    const shows = await api.getShows();
    console.log("Fetched shows:", shows);
    displayEvents(shows);
  } catch (error) {
    console.error("Failed to fetch shows:", error);
  }
}

fetchAndDisplayShows();
