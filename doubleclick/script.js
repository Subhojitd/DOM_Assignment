var itemsList = document.getElementById("items-list");
var favoritesList = document.getElementById("favorites-list");

itemsList.addEventListener("dblclick", function(e) {
  if (e.target.tagName === "LI" && e.target.parentNode.id === "items-list") {
    var favoriteItem = document.createElement("li");
    favoriteItem.textContent = e.target.textContent;
    favoritesList.appendChild(favoriteItem);
    e.target.parentNode.removeChild(e.target);
  }
});

favoritesList.addEventListener("dblclick", function(e) {
  if (e.target.tagName === "LI" && e.target.parentNode.id === "favorites-list") {
    var item = document.createElement("li");
    item.textContent = e.target.textContent;
    itemsList.appendChild(item);
    e.target.parentNode.removeChild(e.target);
  }
});
