//Begin by initializing necessary variables:
let charactersUrl = "http://localhost:3000/characters"

document.addEventListener('DOMContentLoaded', ()=>{

  //fetch all animals from json server

function loadAllCharacters(){
  fetch(charactersUrl)
    .then(res => res.json())
    .then((data) =>{
      addingNames(data);
    })
} 
// Rendering only the animal names on the page
function addingNames(chars){
  chars.forEach((element)=>{
    const animalName = document.createElement('h3');

    animalName.textContent = element.name;
    let p = document.getElementById('char-name');
    p.appendChild(animalName);
    animalName.addEventListener('click', ()=>{
      
      document.getElementById('character-name').textContent = element.name
      document.getElementById('char-img').src=element.image

      let btn = document.getElementById('char-votes')
      btn.textContent = `Votes: ${element.votes}`
      btn.addEventListener('click', ()=>{
        element.votes+=1

        btn.textContent = `Votes: ${element.votes}`
      })
  
    
    
      
      })
  })
}


loadAllCharacters()
})


