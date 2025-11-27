let shoppingList = [];
document.getElementById("add-btn").addEventListener("click", () => {
    console.log("clicked!");
    let newItem = prompt("What would you like to add to the list?");
    console.log(newItem);
    shoppingList.push(newItem);
    console.log(shoppingList);
    displayList();
});

function displayList() {
    let listDisplay = document.getElementById("list");
    for ([index, value] of shoppingList.entries()) {
        let listItm = document.createElement("li");
        let itmBtn = document.createElement("button");
        listItm.innerHTML = `${value}`;
        itmBtn.id = index;
        itmBtn.innerHTML = "-";
        listItm.appendChild(itmBtn);
        listDisplay.appendChild(listItm);
    }
}
