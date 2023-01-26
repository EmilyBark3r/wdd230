function date() {
    let d = new Date(day, monthIndex, year);
    document.getElementById("date").innerHTML = d;
}

date()