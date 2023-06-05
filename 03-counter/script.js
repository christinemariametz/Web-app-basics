/*
                        Counter
Implement a web app that will count like this example. (see bootcamp side)

Requirments

 - Add a larger counter number
 - The number is increased every time you
 - click the main area of the website
 - press the enter or space key
 - Add a reset button that will reset the number to 0
 - Change the color of the main area behind your counter step by  step everytime the counter is increased
 - 100 counting steps will turn the background fully colorful
 - After every 100 counting steps reset the background (see video)

Gedanken: 
- Wenn auf den body ge"click"t wird --> "counter" zählt hoch && "Prozent-Farb-Ticker" baut sich auf (von 1%-100%).
Zusätzlich:
Bei "counter" === 100? dann fängt der "Prozent-Farb-Ticker" wieder bei 0 an, aber der "counter" zählt weiter (101..).

Zusätzlich:
- Wenn ich auf den Button "reset" klicke --> "counter" springt auf 0 zurück.
 
*/

const mainCounter = document.querySelector("#counter");
const main = document.querySelector("main");
let curValue = 0;
let ColorValue = 0;
const btnReset = document.querySelector("button");


main.addEventListener("click", () => {
curValue++;
mainCounter.textContent = curValue;
ColorValue++;
if(ColorValue === 101) {
    ColorValue = 0;
}

ColorValue++;
})

btnReset.addEventListener("click", () => {
    curValue = 0;
    mainCounter.textContent = curValue;
    })