function render(loadEvent, inputString) {
  var starList = document.getElementById('starUl'); //create ul
  var listContainer = document.getElementById('starSuggestions'); //get list container
  removeChildren(starList);
  var starObj = JSON.parse(loadEvent.target.responseText); //get data
  if (starObj.suggestions) {
    starObj.suggestions.forEach(function(star) { // for earch suggestion do this
      var starOption = document.createElement('li'); //create li
      starOption.setAttribute('class', "star-list-element");
      starOption.innerHTML = star; // li equal to star info
      starList.appendChild(starOption); //append li to ul
    });
    listContainer.appendChild(starList); // append ul to list container
  }
  if (inputString.length === 0) {
    removeChildren(starList);
  }
}

function removeChildren(node) { // define remove children function
  while (node.firstChild) { // while there is a child of the node do this
    node.removeChild(node.firstChild); // remove the first child of the node while firstchild exists
  }
}

var starInput = document.getElementById('star-name'); // get id star-name from html
starInput.addEventListener('input', function(e) { //event listener for any change in input of starInput

  var inputString = e.target.value.toLowerCase().trim();

  var url = '/auto?' + inputString;
  var xhr = new XMLHttpRequest(); //create new xhr request
  xhr.open('GET', url); //open GET request
  xhr.send(); // send request

  xhr.addEventListener('load', function(loadEvent) {
    render(loadEvent, inputString);

  });
});
