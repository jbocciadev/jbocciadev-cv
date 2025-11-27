let shoppingList = [];
document.getElementById("add-btn").addEventListener("click", () => {
    console.log("clicked!");
    let newItem = prompt("What would you like to add to the list?");
    shoppingList.push(newItem);
    addToList(newItem);
});

function addToList(newItem) {
    let listDisplay = document.getElementById("list");
    let listItm = document.createElement("li");
    let itmBtn = document.createElement("button");
    listItm.innerHTML = `${newItem}`;
    // itmBtn.dataset.index = index;
    itmBtn.innerHTML = "-";
    listItm.appendChild(itmBtn);
    listDisplay.appendChild(listItm);
}
