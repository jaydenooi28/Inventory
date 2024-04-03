var mapWidth = 500;  // Initial map width
var mapHeight = 300; // Initial map height


function updateMapSize() {
    // Get values from input fields
    mapWidth = parseInt($("#map-width").val());
    mapHeight = parseInt($("#map-height").val());
  
    // Update the inventory map container dimensions
    $("#inventory-map").css({
      width: mapWidth + "px",
      height: mapHeight + "px"
    });
  }

  // Optional function for updating map visuals based on items
function updateMapVisuals() {
    // ... (implement logic to update map visuals based on items in the container)
    // This might involve iterating through items or adjusting layout.
  }

  function addRow() {
    // Get the existing grid container element (e.g., #inventory-map)
    var mapContainer = document.getElementById("inventory-map");
  
    // Create a new row element (e.g., div with class "grid-row")
    var newRow = document.createElement("div");
    newRow.classList.add("grid-row"); // Add appropriate class for styling
  
    // Add the new row element to the grid container
    mapContainer.appendChild(newRow);
  }
  