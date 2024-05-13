// Anthony Neidhardt CSC 193A Gary Kane  

function bigger(){
    document.getElementById("textbox").style.fontSize = "24pt";
  }

  function bold(){
    document.getElementById("textbox").style.fontWeight = "bold";
    document.getElementById("textbox").style.color = "blue"; 
    document.getElementById("textbox").style.textDecoration = "underline";
}

  function unbold(){
    document.getElementById("textbox").style.fontWeight = "normal";
  }

  function moo(){
    var list = document.getElementById("textbox");
    var str = list.value;
    var parts = str.split(".");  
    str = parts.join("Moo.");
    list.value = str;       
  }