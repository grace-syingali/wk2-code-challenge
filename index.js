fetch(" http://localhost:3000/characters")
  .then(response => response.json())
  .then(characters => {
    const animalNames = characters.map(character => character.name);
    console.log(animalNames);
  })
  .catch(error => {
    console.error("Error:", error);
  });
  const animalList = document.getElementById('animal-list');
const animalDetails = document.getElementById('animal-details');

// Fetch the list of animals from the server
fetch('/animals')
  .then(response => response.json())
  .then(animals => {
    // Create an <li> element for each animal and add it to the animalList
    animals.forEach(animal => {
      const listItem = document.createElement('li');
      listItem.textContent = animal.name;
      listItem.addEventListener('click', () => {
        // When an animal's name is clicked, fetch its details and display them
        fetch(`/characters/${animal.id}`)
          .then(response => response.json())
          .then(animalData => displayAnimalDetails(animalData));
      });
      animalList.appendChild(listItem);
    });
  });

function displayAnimalDetails(animal) {
  // Clear previous details
  animalDetails.innerHTML = '';

  // Create elements to display the animal's image and vote count
  const image = document.createElement('img');
  image.src = animal.image;

  const votes = document.createElement('p');
  votes.textContent = `Votes: ${animal.votes}`;

  // Append the image and vote count to the animalDetails div
  animalDetails.appendChild(image);
  animalDetails.appendChild(votes);
}
