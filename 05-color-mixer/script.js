
/* Gedanken:
- 1. Default Value hinzufügen. 
Mit .style auf den Body und rgb Farbe wie im html definiert.
- 2. Wenn ich einen slider "move" (?? Ist dann Event Typ = click oder keydown oder input oder change ...??), verändert sich der rgb Wert jeweils und die Background-color updated sich zur neuen Farbe.
- 3. && die rgb Farbe (#110011) passt sich an. (Evtl. mit InnerText/Text Content arbeiten??)

*/

"use strict"

document.body.style.backgroundColor = "rgb(150, 33, 180)";
// die einzelnen Farben muss ich auseinander bekommen?!
// "rgb + red + green + blue" ?

const body = document.querySelector("body");
const RedSlider = document.querySelector("#red");
const GreenSlider = document.querySelector("#green");
const BlueSlider = document.querySelector("#blue");
const HexColor = document.querySelector("hex-color");

//    2. bearbeiten....
// Wenn ich am roten Slider schiebe, entsteht ein neues value und dann muss sich die gesamte body farbe ändern. 
// Wenn ich am grünen Slider schiebe auch.
// Wenn ich am blauen Slider schiebe auch.
// die Ergebnisse müssen in ein gemeinsames Ergebnis springen.


let Red = RedSlider.value;
let Green = GreenSlider.value;
let Blue = BlueSlider.value;

let rgbColor = "rgb(" + Red + "," + Green + "," + Blue + ")";

RedSlider.addEventListener("input", () => {
body.style.backgroundcolor = rgbColor;
} );

GreenSlider.addEventListener("input", () => {
body.style.backgroundcolor = rgbColor;
} );

BlueSlider.addEventListener("input", () => {
body.style.backgroundcolor = rgbColor;
} );


