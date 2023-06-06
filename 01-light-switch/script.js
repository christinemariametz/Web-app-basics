
/*

Gedanken:
 - der Button muss "umgeschaltet" werden. Dabei ändert sich aber auch der Body Backround zu schwarz! 
 - Ich muss also Button & Body ansprechen.(QuerySelector)

 ----- If "klick", Dann Backround-color = body-dark && Button = button-dark

 */

const btn = document.querySelector("button");
const body = document.querySelector("body");

btn.addEventListener("click", e => {
    body.classList.toggle("body-dark");

        if (document.title === "Good Morning") {
    document.title = "Good Night";
   }    else {
    document.title = "Good Morning";
   }
});
