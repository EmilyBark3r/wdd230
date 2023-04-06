// slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// currentyear and lastmodified
// This sets the year for the footer
const today = new Date();
document.querySelector("#currentyear").textContent = today.getFullYear();

// This sets the last modified date on the home page
document.querySelector("#lastmodified").textContent = document.lastModified;


// Weather
function setWindChill(windSpeed, temperature) {
    // Get the DOM objects that are dynamic
    let temperatureSpan = document.querySelector("#temperature");
    let windSpeedSpan = document.querySelector("#windspeed");
    let windChillSpan = document.querySelector("#windchill");
  
    // Set up the wind chill content
    let windChillMessage = "N/A";
    if (windSpeed >= 3.0 && temperature <= 50) {
      let chill = Math.round(35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16));
      windChillMessage = `${chill}`;
    }
  
    // Write out the dynamic content
    temperatureSpan.textContent = temperature;
    windSpeedSpan.textContent = windSpeed;
    windChillSpan.innerHTML = windChillMessage;
  }
  
  // select HTML elements in the document
  const weatherIcon = document.querySelector("#weathericon");
  const weatherDesc = document.querySelector("#weatherdesc");
  
  // This is the lat/lon for Fairbanks, AK. You will want to change this to your chamber city when using this in your project
  const LAT = "43.8866";
  const LON = "-111.6777";
  const APIKEY = "be32833d7239c63fb1ec02ebf74bf9fc";
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;
  
  function displayResults(weatherData) {
    // You can use @2x or @4x to make the icon bigger, or omit it for the standard size
    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`
    const desc = weatherData.weather[0].description;
    const main = weatherData.weather[0].main;
    
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherDesc.textContent = main; 
    setWindChill(weatherData.wind.speed.toFixed(0), weatherData.main.temp.toFixed(0));
  }
  
  async function getTheWeather() {
    try {
      const response = await fetch(apiURL);
      if (response.ok) {
        const data = await response.json();
        displayResults(data);
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
      console.log(error);
    }
  }
