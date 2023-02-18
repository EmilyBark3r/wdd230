// get the two input values of temperature and wind speed,
// f = 35.74 + 0.6215t - 35.75s^0.16 + 0..4275ts^0.16
function showWeather(temp,windspeed) {
    temperatureobject = document.querySelector("#temperature");
    windspeedobject = document.querySelector("windspeed");
    windchillobject = document.querySelector("#windchill");
    // check to make sure they meet the specification limits  (<=50°F and >3.0mph) allowed to officially calculate the wind chill
    chillmsg = "N/A"
    if(temp <= 50 && windspeed > 3) {
        let chill = Math.round((35.74 + (0.6215 * temp) - (35.75 * Math.pow(windspeed, 0.16)+(0.4275 * temp)*(Math.pow(windspeed, 0.16)))))
        chillmsg = `${chill}&deg; F`;
    //                                                                        35.74 + 0.6215t - 35.75s^0.16 + 0.4275ts^0.16
    // either calculate and display the wind chill factor value or display "N/A" (not applicable) if the input values did not meet the requirements.
}

temperatureobject.textContent = temp;
windspeedobject.textContent = windspeed;
windchillobject.innerHTML = chillmsg;

}
//test
showWeather(7, 4);