
/* Gedanken:

Mit .style auf den Body und rgb Farbe wie im html definiert.
- 2. Wenn ich einen slider "move" (?? Ist dann Event Typ = click oder keydown oder input oder change ...??), verändert sich der rgb Wert jeweils und die Background-color updated sich zur neuen Farbe.
- 3. && die rgb Farbe (#110011) passt sich an. (Evtl. mit InnerText/Text Content arbeiten??)
*/

"use strict"

// auf welche "Körper" muss ich zugreifen? Welche will ich bewegen/verändern? (Variablen)
const body = document.querySelector("body");
const redSlider = document.getElementById("red");
const greenSlider = document.getElementById("green");
const blueSlider = document.getElementById("blue");
const hexColor = document.getElementById("hex-color");

// "Default Value" hinzufügen. 
let red = redSlider.value;
let green = greenSlider.value;
let blue = blueSlider.value;

// 1. die einzelnen Farben muss ich auseinander bekommen?! => function ("rgb + red + green + blue" )?
// 2. auf die HexZahlen zugreifen (innerText?) und meine red/green/blue Values(num) in Hex umwandeln.

function numToHex(rgb) {
rgb = parseInt(rgb).toString(16);
return rgb.length === 1 ? "0" + rgb : rgb;
}

function updateBackgroundColor() {
    let rgbColor = "rgb(" + red + "," + green + "," + blue + ")";
    body.style.backgroundColor = rgbColor;
    hexColor.innerText = "#" + numToHex(red) + numToHex(green) + numToHex(blue);
}

// die einzelnen Slider müssen "geklickt" werden. Frage: Ist mein EventTyp dann anders??(change/input??)
redSlider.addEventListener("input", (event) => {
    red = event.target.value;
    updateBackgroundColor();
});   

greenSlider.addEventListener("input", (event) => {
    green = event.target.value;
    updateBackgroundColor();
});   

blueSlider.addEventListener("input", (event) => {
    blue = event.target.value;
    updateBackgroundColor();
});   
updateBackgroundColor();


function fetchRandomColor() {
    const fetchRequest = fetch("https://dummy-apis.netlify.app/api/color");
    fetchRequest
    .then((response) => {
        if(response.ok) {
        return response.json();
        }      
        })
    .then((jsonData) => {
        hexColor.innerText = jsonData.color;
        red = jsonData.rgb.r;
        green = jsonData.rgb.g;
        blue = jsonData.rgb.b;
        redSlider.value = jsonData.rgb.r;
        greenSlider.value = jsonData.rgb.g;
        blueSlider.value = jsonData.rgb.b;
    });
    updateBackgroundColor();
    }

const randomBtn = document.getElementById("randomBtn");
randomBtn.addEventListener("click", fetchRandomColor);


