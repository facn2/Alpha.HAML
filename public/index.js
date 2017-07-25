const starInput = getElementById(input-field); // get id input-field from html
starInput.addEventListener('input', function(e) { //event listener for any change in input of starInput
  const xhr = new XMLHttpRequest(); //create new xhr request
  xhr.onreadystatechange = function() {
    if (xhr.readystate === 4 && xhr.status === 200) { //if status 200 and readystate complete do this

    }
    xhr.open('GET', url); //open GET request
    xhr.send(); // send request
  }

  xhr.addEventListener('load', function(loadEvent) { // looking for load of data from server
    // get data
    // create elements
    // append each suggestion to list
  }
});
