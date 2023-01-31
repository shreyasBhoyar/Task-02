//Creating and accessing the elements
var el = document.createElement("div");
var title = document.createElement("h2");
var root = document.getElementById("root");
var radioButton1 = document.createElement("input")
var radioButton2 = document.createElement("input")
var label2 = document.createElement("label")
var label1 = document.createElement("label")
var radiodiv1 = document.createElement("div");
var radiodiv2 = document.createElement("div");

//Setting the attributes
title.innerHTML = "Timer and Counter Example"
el.setAttribute("class","parent")
title.setAttribute("class","title")
radioButton1.setAttribute("type","radio")
radioButton1.setAttribute("id","counter")
radioButton1.setAttribute("name","radio")
radioButton1.setAttribute("value","counter")
label1.innerHTML = "Counter"
radioButton2.setAttribute("type","radio")
radioButton2.setAttribute("id","timer")
radioButton2.setAttribute("name","radio")
radioButton2.setAttribute("value","timer")
label2.innerHTML = "Timer"

//Linking the elements
root.appendChild(el)
el.appendChild(title)
el.appendChild(radiodiv1)
radiodiv1.appendChild(radioButton1)
radiodiv1.appendChild(label1)
el.appendChild(radiodiv2)
radiodiv2.appendChild(radioButton2)
radiodiv2.appendChild(label2)

