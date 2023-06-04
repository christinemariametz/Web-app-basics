
/*
                    Password Toggle

Implement a web app that will toggle the visibility of a password like this example.

                    Requirments
 Add a input that holds a fictive password
 Add a button that will toggle the readability of the password in the input
 Change the text of the button to "Show Password" if the password is hidden
 Change the text of the button to "Hide Password" if the password is visible


Hints
<!-- Text input -->
<input type="text">

<!-- Password input -->
<input type="password">


Gedanken: 
---zu Button : 
Wenn ich den Button anklicke, kommt ="Hide Password", beim 2. mal "Show Password" (toggeln!)
---zu Eingabefeld: 
Wenn "Show Password" dann sind die Buchstaben verdeckt durch die Punkte. 
Wenn "Hide Password" sind die Buchstaben sichtbar.

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