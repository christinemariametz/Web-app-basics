
"use strict"

/*
Gedanken: 
- Wenn auf den body ge"click"t wird (Oder "enter" oder "space" - KEY gedrückt wird) --> "counter" zählt hoch && "Prozent-Farb-Ticker" baut sich auf (von 1% bis 100%).
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

function IncrementCounter() {
    curValue++;
    mainCounter.textContent = curValue;
    ColorValue++;
    //main.style = "--counter: " + ColorValue + "%";
    main.style.backgroundSize = ColorValue + "% 100%";
    if(ColorValue % 100 === 0) {ColorValue = 0;}
}

main.addEventListener("click", IncrementCounter)

btnReset.addEventListener("click", () => {
    curValue = 0;
    mainCounter.textContent = curValue;
    ColorValue = 0;
})

document.addEventListener("keydown", (event) => {
    if(event.key === "Enter" || "Space") {
        IncrementCounter();
    }
})