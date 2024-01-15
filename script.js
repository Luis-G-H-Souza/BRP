

var px = "px"
function pegabtl(){
    //Manipulaçao do border radius
    var btl = document.getElementById("btl").value;
    var br = document.getElementById("br");
    br.style.borderTopLeftRadius = btl + px;

    //manipulaçao da div
    var t = document.createTextNode("border-top-left-radius:" + btl + px);
    var div = document.getElementById("textbtl");
    if(div){
        div.removeChild(div.firstChild);
        var p = document.createElement("p")
        div.appendChild(p);
        p.appendChild(t);
        br.appendChild(div);
    }
    else{
        var div = document.createElement("div");
        div.id = "textbtl"
        var p = document.createElement("p")
        div.appendChild(p);
        p.appendChild(t);
        br.appendChild(div);
        }
}
function pegabtr(){
    var btr = document.getElementById("btr").value;
    var br = document.getElementById("br");
    br.style.borderTopRightRadius = btr + px;
    //manipulaçao da div
    var t = document.createTextNode("border-top-right-radius:" + btr + px);
    var div = document.getElementById("textbtr");
    if(div){
        div.removeChild(div.firstChild);
        var p = document.createElement("p")
        div.appendChild(p);
        p.appendChild(t);
        br.appendChild(div);
    }
    else{
        var div = document.createElement("div");
        div.id = "textbtr"
        var p = document.createElement("p")
        div.appendChild(p);
        p.appendChild(t);
        br.appendChild(div);
        }
}
function pegabbl(){
    var bbl = document.getElementById("bbl").value;
    var br = document.getElementById("br");
    br.style.borderBottomLeftRadius = bbl + px;
    //manipulaçao da div
    var t = document.createTextNode("border-bottom-left-radius:" + bbl + px);
    var div = document.getElementById("textbbl");
    if(div){
        div.removeChild(div.firstChild);
        var p = document.createElement("p")
        div.appendChild(p);
        p.appendChild(t);
        br.appendChild(div);
    }
    else{
        var div = document.createElement("div");
        div.id = "textbbl"
        var p = document.createElement("p")
        div.appendChild(p);
        p.appendChild(t);
        br.appendChild(div);
        }
}
function pegabbr(){
    var bbr = document.getElementById("bbr").value;
    var br = document.getElementById("br");
    br.style.borderBottomRightRadius = bbr + px;
    //manipulaçao da div
    var t = document.createTextNode("border-bottom-right-radius:" + bbr + px);
    var div = document.getElementById("textbbr");
    if(div){
        div.removeChild(div.firstChild);
        var p = document.createElement("p")
        div.appendChild(p);
        p.appendChild(t);
        br.appendChild(div);
    }
    else{
        var div = document.createElement("div");
        div.id = "textbbr"
        var p = document.createElement("p")
        div.appendChild(p);
        p.appendChild(t);
        br.appendChild(div);
        }
}

   
function copy() {
    // Get the text field
    var copyText = document.getElementById("bar");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }

