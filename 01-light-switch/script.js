
/*
                        Light Switch

Implement a web app with a button that will toggle the light like this example.(Siehe Video)

                        Requirments
 Add a button that will toggle the background color of the website
 The color change of the background should be animated
 Change the site title to "Good Night" when the light is switched off
 Change the site title to "Good Morning" when the light is switched on

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