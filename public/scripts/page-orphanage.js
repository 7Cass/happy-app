// Manage options
const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

// Get values form HTML
const lat = document.querySelector("span[data-lat]").dataset.lat;
const lng = document.querySelector("span[data-lng]").dataset.lng;

// Create map
const map = L.map("mapid", options).setView([lat, lng], 15);

// Create and end tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// Create and add marker
L.marker([lat, lng], { icon }).addTo(map);

/* image gallery */
function selectImage(event) {
  const button = event.currentTarget;

  // Remove all .active class
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  // Select onclick image
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  // Update image container
  imageContainer.src = image.src;

  // Add .active class to this button
  button.classList.add("active");
}
