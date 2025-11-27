let shoppingList = [];
let listDisplay = document.getElementById("list");
document.getElementById("add-btn").addEventListener("click", () => {
    let newItem = prompt("What would you like to add to the list?");
    if (
        newItem != "" &&
        shoppingList.indexOf(newItem) == -1 &&
        newItem != null
    ) {
        shoppingList.push(newItem);
        displayList();
    }
});

function displayList() {
    listDisplay.innerHTML = "";
    for ([index, item] of shoppingList.entries()) {
        let listItm = document.createElement("li");
        let itmTxt = document.createElement("p");
        let itmBtn = document.createElement("button");
        itmTxt.innerText = `${item}`;
        itmBtn.dataset.index = index;
        itmBtn.setAttribute("onclick", `removeFromList(event)`);
        itmBtn.innerHTML = "-";
        listItm.appendChild(itmTxt);
        listItm.appendChild(itmBtn);
        listDisplay.appendChild(listItm);
    }
}

function removeFromList(event) {
    let targetItem = event.target.parentElement;
    let targetIndex = event.target.dataset.index;
    listDisplay.removeChild(targetItem);
    if (shoppingList.length > 0) {
        shoppingList.splice(targetIndex, 1);
    } else {
        shoppingList = [];
    }
    displayList();
}
