

var px = "px"

//funçao para criar o esqueleto de uma div generica
function criaDiv(id, text){
    var div = document.createElement("div");
    div.id = id;
    var p = document.createElement("p");
    var t = document.createTextNode(text);
    p.appendChild(t);
    div.appendChild(p);

    return div;

}
 
//funçao para atualizar o border radius de acordo com os valores passados nos inputs
function AtualizaBR(br, name, value){
    var val = value + px;
    br.style[name] = val;
    var t = name + " :" + val;
    var id = name;
    var div = document.getElementById(id);
    criatext(div, t, br, id)
    
}

//funçao para criar o texto com o comando do border radius de acordo com os valores dos inputs
function criatext(div, t, br, id){
    if(div){    
       div.querySelector("p").textContent = t; 
            }
    else{
        div = criaDiv(id, t);
        br.appendChild(div);  
        } 
    }

function mudabar(){
        vbtl = pegabtl();
        vbtr = pegabtr();
        vbbl = pegabbl();
        vbbr = pegabbr();
        var b = document.getElementById("bar");
        b.value = vbtl + px + " " + vbtr + px + " " + vbbl + px + " " + vbbr + px + " ";
    }

//funcoes para pegar o valor de cada input
function pegabtl(){
    //Manipulaçao do border radius
    var btl = document.getElementById("btl").value;
    var br = document.getElementById("br");
    var name = "borderTopLeftRadius";
    AtualizaBR(br, name, btl);

    return btl;
}

function pegabtr(){
    //Manipulaçao do border radius
    var btr = document.getElementById("btr").value;
    var br = document.getElementById("br");
    var name1 = "borderTopRightRadius";
    AtualizaBR(br, name1, btr);

    return btr;
}
function pegabbl(){
    //Manipulaçao do border radius
    var bbl = document.getElementById("bbl").value;
    var br = document.getElementById("br");
    var name2 = "borderBottomLeftRadius";
    AtualizaBR(br, name2, bbl);

    return bbl;
}
function pegabbr(){
    //Manipulaçao do border radius
    var bbr = document.getElementById("bbr").value;
    var br = document.getElementById("br");
    var name3 = "borderBottomRightRadius";
    AtualizaBR(br, name3, bbr);

    return bbr;
}



    
   

function copy() {
   var b = document.getElementById("bar");
     navigator.clipboard.writeText("border-radius: " + b.value +";");
  
//     // Alert the copied text
alert("Copied the text");
        
//    })
  
//     // Select the text field

 
  }

