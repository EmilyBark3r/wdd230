const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

// Using the innerHTML version is a little less Javascript intensive.
const displayProphets = (prophets) => {
  const cards = document.querySelector("div.cards"); // select the output container element

  prophets.forEach((prophet) => {
    // Create elements to add to the div.cards element
    let card = document.createElement("section");
    card.innerHTML = `<h2>${prophet.name} ${prophet.lastname}</h2>
      <h3>Date of Birth: ${prophet.birthdate}</h3>
      <h3>Place of Birth: ${prophet.birthplace}</h3>
      <img src="${prophet.imageurl}" height="440" width="340" loading="lazy">`;
    cards.appendChild(card);
  }); // end of forEach loop
}; // end of function expression

async function getProphetData() {
  const response = await fetch(url);
  if (response.ok){
    const data = await response.json();  
    displayProphets(data.prophets);
  }
  else{
    console.error('There was an error loading the data.')
    const cards = document.querySelector("div.cards");
    cards.innerHTML = '<section><h1>There was an error loading the data</h1></section>'
  } 
}

getProphetData();

// This demonstrates another way to handle the fetch response using THEN instead of ASYNC/AWAIT

function getProphetDataWithThen(){
  fetch(url)
  .then((response) => { return response.json(); })
  .then((data) => { displayProphets(data.prophets); });
}

// getProphetDataWithThen();
