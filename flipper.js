

var colors = ["#ff0000","#ff00ff","#0000ff","#3cb371","#000000","#ffa500","#6a5acd","#40ff00"];
var numero = 0;
var todo = document.querySelector("#main");




function Mello() {
    if(numero<colors.length-1) {
        document.body.style.backgroundColor = colors[numero++];
    }else {
       colors = 0;
    }
}

Mello();



 




