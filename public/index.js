var starInput = document.getElementById('input-field'); // get id input-field from html
starInput.addEventListener('input', function(e) { //event listener for any change in input of starInput
  var inputString = e.target.value;
  var url = `/auto?${inputString}`;

  var xhr = new XMLHttpRequest(); //create new xhr request
  xhr.open('GET', url); //open GET request
  xhr.send(); // send request

  xhr.addEventListener('load', function(loadEvent) { // looking for load of data from server
    var listContainer = document.getElementById('starSuggestions'); //get list container
    var starList = document.createElement('ul'); //create ul
    var starObj = JSON.parse(loadEvent.target.responseText); //get data
    starObj.suggestions.forEach((star) => { // for earch suggestion do this
      var starOption = document.createElement('li'); //create li
      starOption.innerHTML = star; // li equal to star info
      starList.appendChild(starOption); //append li to ul
    });
    listContainer.appendChild(starList); // append ul to list container
  });
});
