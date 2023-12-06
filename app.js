function Additems(){
    var input = document.getElementById("todo-input");
    var list = document.getElementById("Listitems");
    var listelement = document.createElement("li");
    var listtext = document.createTextNode(input.value);
    listelement.appendChild(listtext);
    list.appendChild(listelement);
    console.log(listelement);
    input.value = "";  // input field value remove method when get value 

listelement.className = "text-decorations";

// Creating delete button using dom to delete the indivisul list 
// ****************************************************************

var button = document.createElement("button");
var btntext= document.createTextNode("Delete");
button.appendChild(btntext);
listelement.appendChild(button);
button.setAttribute("onclick", "delbutton(this)");

button.className = "buttion-delete";

// Creating Edite button using dom to Edite the indivisul list 
// ****************************************************************

var Editebutton = document.createElement("button");
var Editebtntext= document.createTextNode("Edite");
Editebutton.appendChild(Editebtntext);
listelement.appendChild(Editebutton);
Editebutton.setAttribute("onclick", "Editebutton(this)");

Editebutton.className = "buttion-edite";
 
}


function Deleteallitems(){
    var list = document.getElementById("Listitems");
    // list.innerHTML = ""; there are two ways to do one way 
    list.remove();  // 2nd way to remvoe its javascript built in function
}



function delbutton(e){
    console.log(e.parentNode.remove());
}



function Editebutton(e){
    var currentvalue = e.parentNode.firstChild.nodeValue;
    var inputfield = prompt("Enter Updated value", currentvalue);
    e.parentNode.firstChild.nodeValue = inputfield;
}


