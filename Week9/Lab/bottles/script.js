// 99 bottles of beer on the wall, 99 bottles of beer
// Take one down and pass it around, 98 bottles of beer on the wall

let button = document.getElementById("songButton");
let btnContainer = document.getElementById("buttonContainer");
let songContainer = document.getElementById("songContainer");

button.addEventListener("click", function () {
    let song = `<h1>99 Bottles of Beer!</h1>`;
    btnContainer.style.display = "none";
    songContainer.style.display = "flex";
    for (i = 99; i > 0; i--) {
        if (i > 1) {
            song += `<p> ${i} bottles of beer on the wall, ${i} bottles of beer... <br> Take one down and pass it around, ${
                i - 1
            } bottles of beer on the wall!</p>`;
        } else {
            song += `<p> ${i} bottle of beer on the wall, ${i} bottle of beer... <br> Take one down and pass it around, no more bottles of beer on the wall!
            <br> No more bottles of beer on the wall, no more bottles of beer... <br> Go to the store and buy some more, 99 bottles of beer on the wall</p>`;
        }
        songContainer.innerHTML = song;
    }
});
