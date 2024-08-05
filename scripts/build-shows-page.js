const shows = [
  {
    date: "Mon Sept 09 2024",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 17 2024",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Oct 12 2024",
    venue: "View Lounge",
    location: "San Francisco, CA ",
  },
  {
    date: "Mon Sept 09 2024",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 16 2024 ",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 18 2024 ",
    venue: "Press Club",
    location: "San Francisco, CA ",
  },
];

function createEventItem(show) {
  const itemDiv = document.createElement("div");
  itemDiv.className = "shows-section__item";

  //date detail
  const dateDetailDiv = document.createElement("div");
  dateDetailDiv.className = "shows-section__item-detail";
  const dateLabel = document.createElement("span");
  dateLabel.className = "shows-section__label";
  dateLabel.textContent = "DATE";
  const dateSpan = document.createElement("span");
  dateSpan.className = "shows-section__date";
  dateSpan.textContent = show.date;
  dateDetailDiv.appendChild(dateLabel);
  dateDetailDiv.appendChild(dateSpan);

  //venue detail
  const venueDetailDiv = document.createElement("div");
  venueDetailDiv.className = "shows-section__item-detail";
  const venueLabel = document.createElement("span");
  venueLabel.className = "shows-section__label";
  venueLabel.textContent = "VENUE";
  const venueSpan = document.createElement("span");
  venueSpan.className = "shows-section__venue";
  venueSpan.textContent = show.venue;
  venueDetailDiv.appendChild(venueLabel);
  venueDetailDiv.appendChild(venueSpan);

  //location detail
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

  //button
  const button = document.createElement("button");
  button.className = "shows-section__button";
  button.textContent = "BUY TICKETS";

  itemDiv.appendChild(dateDetailDiv);
  itemDiv.appendChild(venueDetailDiv);
  itemDiv.appendChild(locationDetailDiv);
  itemDiv.appendChild(button);

  return itemDiv;
}
const selectedItem = document.querySelector(".shows-section__item--selected");
// Display events
function displayEvents(events) {
  const showsList = document.querySelector(".shows-section__list");

  showsList.innerHTML = "";

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

displayEvents(shows);
