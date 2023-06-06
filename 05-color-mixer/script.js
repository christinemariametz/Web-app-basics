

/* Gedanken:
- 1. Default Value hinzufügen. Mit .style auf den Body und rgb Farbe wie im html definiert.

- 2. Wenn ich einen slider "move" (?? Ist dann Event Typ = click oder keydown oder input oder change ...??) updated sich die Seite.

- 3. && die rgb Farbe (#110011) passt sich an. (Evtl. mit InnerText/Text Content arbeiten??)

*/

"use strict"

document.body.style.backgroundColor = "rgb(150, 33, 180)"
// die einzelnen Farben muss ich auseinander bekommen?!
// "# + red + green + blue" ?


const body = document.querySelector("body");
const RedSlider = document.querySelector("#red");
const GreenSlider = document.querySelector("#green");
const BlueSlider = document.querySelector("#blue");
const rgbColor = document.querySelector("rgb-color");

//    2. bearbeiten....
// Wenn ich am roten Slider schiebe, muss sich die body farbe ändern. 
// Wenn ich am grünen Slider schiebe auch.
// Wenn ich am blauen Slider schiebe auch.
// die Ergebnisse müssen in ein gemeinsames Ergebnis springen.

RedSlider.addEventListener("click", () => {
    // body backgroundcolor verändert sich
    // neues red + Red.value
RedSlider.value 
})


