// Create year
function year() {
    let b = new Date();
    let c = b.getFullYear();
    document.getElementById("currentyear").innerHTML = c;
}

// Call year
year()
