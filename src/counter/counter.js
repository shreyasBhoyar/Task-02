//Creating and accessing the elements
var counterContainer = document.createElement("div");
var title = document.createElement("h1");
var parent = document.getElementsByClassName("parent")[0];
var countValue = document.createElement("p");
var incButton = document.createElement("button");
var decButton = document.createElement("button");
var radioButton1 = document.getElementById("counter");


//Setting the attributes
counterContainer.setAttribute("class","counterContainer")
title.setAttribute("class","counterHeading")
title.innerHTML = "Counter"
countValue.setAttribute("id","countValue")
countValue.innerHTML = "count : 0"
incButton.setAttribute("id","increment")
decButton.setAttribute("id","derement")
incButton.innerHTML = "+"
decButton.innerHTML = "-"


//Linking the elements
radioButton1.addEventListener("click",()=>{
    if(parent.children.length>3){
        parent.removeChild(parent.lastElementChild)
    }
    parent.appendChild(counterContainer)
})

counterContainer.appendChild(title)
counterContainer.appendChild(countValue)
counterContainer.appendChild(incButton)
counterContainer.appendChild(decButton)

// Two eventListeners for increment and decrement
incButton.addEventListener("click",()=>{
    var v = document.getElementById("countValue");
    var currentCount = parseInt(v.innerHTML.split(":")[1])
    v.innerHTML = "count : "+(currentCount+1)
})

decButton.addEventListener("click",()=>{
    var v = document.getElementById("countValue");
    var currentCount = parseInt(v.innerHTML.split(":")[1])
    v.innerHTML = "count : "+(currentCount-1)
})

