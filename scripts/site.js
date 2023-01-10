// Set the year for copyright
let today = new Date();
document.querySelector("#currentyear").textContent = today.getFullYear()
//last modified
document.querySelector('#lastmodified').textContent = document.lastModified;












// let and const are used for assignemnt of things, 
// const arent going to change
//      const year = new Date();

//      const dateoptions = {
//          year: '2-digit',
//          month: 'numeric',
//          day: 'numeric'
//      };

//Select individual items from the DOM using document.querySelector(selector).
//The value of selector mathces a 
//CSS selector you would use to identify elements on the page
//      document.querySelector("#currentyear").textContent = today.toLocaleDateString('en-US', dateoptions);
//or you can use toLocaleTimeString (use for your last modified portal page)

//      const mydatestring = `${today.getFullYear()}`;
//      document.querySelector("#today").textContent = mydatestring;

//sometimes you to use innerhtml, for like adding a degree symbol
//      document.querySelector("#temp").innerHTML = "32&deg;";

//how to acess the value of a txt box
//      document.querySelector("#myinput").value = 'Text!';

//this is called a "callback method"
//This function is called once per item on a list of items when you use forEach
//      function makeRed(item){
//          item.style.color = 'red';
//      };

//To select multiple items from the DOM you can use querySelectorAll
//      document.querySelectorAll(".somecontent").forEach(makeRed);

