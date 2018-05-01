//var getGroupName = localStorage.getItem("localStorageDemo-note-8");
//console.log(getGroupName);

//var getGroupDescription = localStorage.getItem("localStorageDemo-note-9");
//console.log(getGroupDescription);

//var getGroupActivity = localStorage.getItem("localStorageDemo-note-10");
//console.log(getGroupActivity);

//var arrayLocalStorage = localStorage.getItem("arrayStorage");
//console.log(arrayLocalStorage);
//var storedNames = JSON.parse(localStorage.getItem("arrayStorage"));
//console.log(storedNames);

var getGroupName = localStorage.getItem("groupName");
console.log(getGroupName);

var getGroupDescription = localStorage.getItem("groupDescription");
console.log(getGroupDescription);

var getGroupActivity = localStorage.getItem("groupActivity");
console.log(getGroupActivity);

var x = document.getElementById("dynamic").parentNode.nodeName;
console.log(x);



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
  //document.body.insertBefore(newDiv, currentDiv);

  //body.parentNode.insertBefore(newDiv, h5.nextSibling);


  Element.prototype.appendBefore = function (element) {
    element.parentNode.insertBefore(this, element);
}, false;

/* Adds Element AFTER NeighborElement */
Element.prototype.appendAfter = function (element) {
    element.parentNode.insertBefore(this, element.nextSibling);
}, false;

/* Typical Creation and Setup A New Orphaned Element Object */
var NewElement = document.createElement('div');
NewElement.innerHTML = 'New Element';
NewElement.id = 'NewElement';

/*  Add NewElement BEFORE -OR- AFTER Using the Aforementioned Prototypes */
//newDiv.appendAfter(document.getElementById('group_description'));
newDiv.appendAfter(document.getElementById('dynamic'));

  


  // create a new div element 
  var newDivGroup = document.createElement("p"); 
  // and give it some content 
  var newContentGroup = document.createTextNode("Group Description: " + getGroupDescription); 
  // add the text node to the newly created div
  newDivGroup.appendChild(newContentGroup);  

  // add the newly created element and its content into the DOM 
  var currentDivGroup = document.getElementById("group_description"); 
  //document.body.insertBefore(newDivGroup, currentDivGroup); 

newDivGroup.appendAfter(document.getElementById('group_description'));


// create a new div element 
  var newDivActivity = document.createElement("p"); 
  // and give it some content 
  var newContentActivity = document.createTextNode("Group Activity: " + getGroupActivity); 
  // add the text node to the newly created div
  newDivActivity.appendChild(newContentActivity);  

  // add the newly created element and its content into the DOM 
  var currentDivActivity = document.getElementById("activity_description"); 
  //document.body.insertBefore(newDivActivity, currentDivActivity); 

  newDivActivity.appendAfter(document.getElementById('activity_description'));   
}