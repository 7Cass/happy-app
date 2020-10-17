// Create map
const map = L.map("mapid").setView([-27.222834, -49.6443839], 15);

// Create and end tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

// Create and add marker
let marker;
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  // Get lat and lng
  document.querySelector('[name="lat"]').value = lat;
  document.querySelector('[name="lng"]').value = lng;

  // Remove icon
  marker && map.removeLayer(marker);

  // Add icon layer to map
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// Add photos field
function addPhotoField() {
  // Get img container #images
  const container = document.querySelector("#images");

  // Get container to duplicate .new-image
  const fieldsContainer = document.querySelectorAll(".new-upload");

  // Clone last added img
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  // Check if field is empty
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }

  // Clear field before add to img container
  input.value = "";

  // Add clone to container #images
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2) {
    // Clear field value
    span.parentNode.children[0].value = "";
    return;
  }

  // Delete field
  span.parentNode.remove();
}

// Select yes or no button
function toggleSelect(event) {
  // Remove .active class from buttons
  document
    .querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active"));

  // Add .active class on clicked button
  const button = event.currentTarget;
  button.classList.add("active");

  // Update hidden input with selected value
  const input = document.querySelector('[name="open_on_weekends"]');

  input.value = button.dataset.value;
}

// function validate(event) {
//   // Validate if lat and lng are provided
//   const needsLatAndLng = true;
//   if (needsLatAndLng) {
//     event.preventDefault();
//     alert("Selecione um ponto no mapa");
//   }
// }
