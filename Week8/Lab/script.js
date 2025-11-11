// Using if statements, create a rock, paper, scissors game.
// https://wrpsa.com/the-official-rules-of-rock-paper-scissors/
// You may use any method of user input and any method of visualisation (alerts, document.getElement etc), as you will be marked on the JavaScript logic around your if statements
// When you have completed your game, please commit to GitHub and upload a text document with the link here

let options = document.getElementsByClassName("user-option");
for (option of options) {
    // Add event listeners to the 3 cards
    option.addEventListener("click", function (event) {
        let user = userChoice(event);
        let machine = machineChoice();
        let result = compare(user, machine);
        updateBattlefield(user, machine, result);
    });
}

function machineChoice() {
    // return a random number between 1 and 3
    // https://www.w3schools.com/js/js_random.asp
    let choice = Math.round(Math.random() * 2) + 1;
    return choice;
}
function userChoice(event) {
    // parse the user's choice from the event
    let element = event.srcElement;
    let option = element.dataset.option;
    // https://developer.mozilla.org/en-US/docs/Web/HTML/How_to/Use_data_attributes
    return parseInt(option);
}
function compare(user, machine) {
    // Determine result based on user and machine choice
    if (user == machine) {
        return "tie";
    } else if (user === 3 && machine === 1) {
        return "machine";
    } else if (user === 1 && machine === 3) {
        return "user";
    } else if (user > machine) {
        return "user";
    } else {
        return "machine";
    }
}
function updateBattlefield(user, machine, result) {
    // Update elements in the center of the page based on the result of the game and user/machine choices
    let userCard = document.getElementById("userCard");
    let userChoiceText = document.getElementById("user-choice-text");
    let machineCard = document.getElementById("machineCard");
    let machineChoiceText = document.getElementById("machine-choice-text");
    let resultText = document.getElementById("result-text");

    // Update user card
    if (user == 1) {
        userCard.src = "./images/rock.webp";
        userChoiceText.innerHTML = "Rock";
    } else if (user == 2) {
        userCard.src = "./images/paper.jpg";
        userChoiceText.innerHTML = "Paper";
    } else {
        userCard.src = "./images/scissors.webp";
        userChoiceText.innerHTML = "Scissors";
    }

    // Update machine card
    if (machine == 1) {
        machineCard.src = "./images/rock.webp";
        machineChoiceText.innerHTML = "Rock";
    } else if (machine == 2) {
        machineCard.src = "./images/paper.jpg";
        machineChoiceText.innerHTML = "Paper";
    } else {
        machineCard.src = "./images/scissors.webp";
        machineChoiceText.innerHTML = "Scissors";
    }

    // Update legend at the bottom to display result
    if (result == "tie") {
        resultText.innerHTML = "It's a tie!";
    } else if (result == "user") {
        resultText.innerHTML = "You win!";
    } else {
        resultText.innerHTML = "You lose!";
    }
}
