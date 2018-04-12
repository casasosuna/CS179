var getGroupName = localStorage.getItem("localStorageDemo-note-8");
console.log(getGroupName);

var getGroupDescription = localStorage.getItem("localStorageDemo-note-9");
console.log(getGroupDescription);

var getGroupActivity = localStorage.getItem("localStorageDemo-note-10");
console.log(getGroupActivity);

$('#resource_post').click(function() {
    $('#post_resource').toggle();
});

document.body.onload = addElement;

function addElement () { 
  // create a new div element 
  var newDiv = document.createElement("h1"); 
  // and give it some content 
  var newContent = document.createTextNode(getGroupName); 
  // add the text node to the newly created div
  newDiv.appendChild(newContent);  

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("dynamic"); 
  document.body.insertBefore(newDiv, currentDiv);

  


  // create a new div element 
  var newDivGroup = document.createElement("p"); 
  // and give it some content 
  var newContentGroup = document.createTextNode(getGroupDescription); 
  // add the text node to the newly created div
  newDivGroup.appendChild(newContentGroup);  

  // add the newly created element and its content into the DOM 
  var currentDivGroup = document.getElementById("group_description"); 
  document.body.insertBefore(newDivGroup, currentDivGroup); 



// create a new div element 
  var newDivActivity = document.createElement("p"); 
  // and give it some content 
  var newContentActivity = document.createTextNode(getGroupActivity); 
  // add the text node to the newly created div
  newDivActivity.appendChild(newContentActivity);  

  // add the newly created element and its content into the DOM 
  var currentDivActivity = document.getElementById("activity_description"); 
  document.body.insertBefore(newDivActivity, currentDivActivity);    
}