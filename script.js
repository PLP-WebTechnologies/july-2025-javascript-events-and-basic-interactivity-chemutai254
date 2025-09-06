// Part 1
const nextText = document.getElementById("next");
nextText.onmouseover = function(){
    nextText.style.color = "Blue";
    nextText.style.fontSize = 16;
    nextText.style.fontWeight = "italic";
};

nextText.onmouseout = function() {
    nextText.style.color = "Green";
    nextText.style.fontSize = 14;
    nextText.style.fontWeight = "bold";
};

nextText.onclick = function() {
    nextText.style.color = "Red";
    nextText.style.fontFamily = "San Serif";
    nextText.style.fontSize = 12;
    nextText.style.fontWeight = "normal"
};

let username = document.getElementById("username");
let displayname = document.getElementById("displayName");
username.onchange = function() {
    displayname.textContent = "Bonsoir, ${username.value}";
};

// Part 2
const btnSub = document.getElementById("subBtn");
const txtSub = document.getElementById("subText");

btnSub.onclick = function(){
    if (txtSub.style.display === "none"){
        txtSub.style.display = "block";
        btnSub.textContent = "Hidding";
    } else {
        txtSub.style.display = "none";
        btnSub.textContent = "Showing";
    }
}

// Part 3
const form = document.getElementById("detailsForm");
let uname = document.getElementById("name");
let email = document.getElementById("email");
let pass = document.getElementById("passord");
let errMsg = document.getElementById("errorMessage");

// uname.oninput = function(){
//     if (uname.value.length < 5){
//         uname.setCustomValidity("Your name is too short");
//     } else {
//         uname.setCustomValidity("")
//     }
// };

form.onsubmit = function(e){
    if (!email.value && !uname.value && !pass.value){
        e.preventDefault();
        errMsg.textContent = "Required email, username, or password";
    }
};