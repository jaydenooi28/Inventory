var itemCount = 1;



function createItem() {
  // Get item name from input field
  var itemName = $("#item-name").val().trim();  // Trim leading/trailing spaces

  // Check if item name is empty
  if (!itemName) {
    alert("Please enter an item name!");
    return;  // Prevent further processing if empty
  }

  // Check for duplicate item name
  var existingItem = $("#item-container").find("[data-item-name='" + itemName + "']");

  if (existingItem.length > 0) {
    alert("Item name '" + itemName + "' already exists! Please choose a unique name.");
    return;  // Prevent further processing if duplicate
  }

  // Create a new item element with unique ID and content
  var newItem = document.createElement("div");
  newItem.id = "item-" + itemCount;
  newItem.className = "inventory-item";
  newItem.innerText = itemName;
  newItem.setAttribute("data-item-name", itemName); // Set data-item-name attribute
  itemCount++;

  // Make the new item draggable within the item container
  $(newItem).draggable({
    containment: "#item-container",
    grid: [ "#item-container", 10 ]  // Snap to grid cells (optional)
  });

  // Add the new item to the item container
  $("#item-container").append(newItem);

  // Clear the input field for next item
  $("#item-name").val("");
}

$(document).ready(function() {
  // Existing drag-and-drop functionality with adjustments

  // Make items within the map draggable (target the item container)
  $(".inventory-item").draggable({
    containment: "#inventory-map",

  });

  // Allow dropping items from the item container onto the map
  $("#inventory-map").droppable({
    accept: "#item-container .inventory-item",  // Only accept items from the container
    drop: function(event, ui) {
      var droppedItem = ui.draggable;
      droppedItem.css({left: 0, top: 0});  // Reset position on drop
      // Optionally remove the item from the container on successful drop
      droppedItem.detach();  // Remove from the item container
    }
  });
});
