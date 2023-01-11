// Create year
function year() {
    let d = new Date();
    let b = d.getFullYear();
    document.getElementById("currentyear").innerHTML = b;
}

// Call year
    year()
