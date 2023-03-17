// This sets today's date in the header
const dateField = document.querySelector(".date");
const fullDate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(date);
dateField.innerHTML = fullDate;

// Meeting announcement to appear on Mondays and Tuesdays
const d = new Date();
let day = d.getDay();

let meeting = document.querySelector("#meeting");

if (day != 1 && day !=2){
	meeting.style.display = "none";
}

else{
	meeting.style.display = "block";
}

// Copyright Date
function year() {
    let d = new Date();
    let b = d.getFullYear();
    document.getElementById("currentyear").innerHTML = b;
}
    year()


