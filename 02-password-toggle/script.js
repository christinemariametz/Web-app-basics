/*

Gedanken: 
---zu Button : 
Wenn ich den Button anklicke, kommt ="Hide Password", beim 2. mal "Show Password" (toggeln!)
---zu Eingabefeld: 
Wenn "Show Password" dann sind die Buchstaben verdeckt durch die Punkte. 
Wenn "Hide Password" sind die Buchstaben "Text" sichtbar.

 */

const btn = document.getElementById("toggle-button");
const passw = document.getElementById("password");


btn.addEventListener("click", e => {
       if (btn.value === "Show Password") {
        btn.setAttribute("value", "Hide Password");
        passw.setAttribute("type", "text");
       } else {
        btn.setAttribute("value", "Show Password");
        passw.setAttribute("type", "password");
       }
   });