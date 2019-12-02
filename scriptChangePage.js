function familiaM(){
  $(document).ready(function(){
    $("button").click(function(){
      $("SelectBoxf1").clone().appendTo("body");
      $("SelectBoxF2").clone().appendTo("body");
    });
  });
}
function LoadPage(){
  document.getElementById("Dashboard").style.color = "white";
  document.getElementById("Dashboard").style.backgroundColor = " rgb(9, 157, 216)";
  document.getElementById("Nav1").style.color = "#6a6093";
  document.getElementById("Nav1").style.backgroundColor = "white";
  document.getElementById("Geral").style.color = "#6a6093";
  document.getElementById("Geral").style.backgroundColor = "white";
}
function Dashboard(){
  document.getElementById("Dashboard").style.color = "white";
  document.getElementById("Dashboard").style.backgroundColor = " rgb(9, 157, 216)";
 
}
function changePageGeral(){
  document.getElementById("Dashboard").style.color = "white";
  document.getElementById("Dashboard").style.backgroundColor = " rgb(9, 157, 216)";
  document.getElementById("Precos").style.color = "white";
  document.getElementById("Precos").style.backgroundColor = "#6a6093";
  document.getElementById("Descricoes").style.color = "white";
  document.getElementById("Descricoes").style.backgroundColor = "#6a6093";
  document.getElementById("Familias").style.color = "white";
  document.getElementById("Familias").style.backgroundColor = "#6a6093";
  document.getElementById("Geral").style.color = "#6a6093";
  document.getElementById("Geral").style.backgroundColor = "white";
  document.getElementById("divGeral").style.zIndex = "1";
  document.getElementById("divFamilias").style.zIndex = "0";
  document.getElementById("divDescricoes").style.zIndex = "0";
  document.getElementById("divPrecos").style.zIndex = "0";
}

function changePageFam(){
  document.getElementById("Dashboard").style.color = "white";
  document.getElementById("Dashboard").style.backgroundColor = " rgb(9, 157, 216)";
  document.getElementById("Geral").style.color = "white";
  document.getElementById("Geral").style.backgroundColor = "#6a6093";
  document.getElementById("Precos").style.color = "white";
  document.getElementById("Precos").style.backgroundColor = "#6a6093";
  document.getElementById("Descricoes").style.color = "white";
  document.getElementById("Descricoes").style.backgroundColor = "#6a6093";
  document.getElementById("Familias").style.color = "#6a6093";
  document.getElementById("Familias").style.backgroundColor = "white";
  document.getElementById("divGeral").style.zIndex = "0";
  document.getElementById("divFamilias").style.zIndex = "1";
  document.getElementById("divDescricoes").style.zIndex = "0";
  document.getElementById("divPrecos").style.zIndex = "0";
}

function changePageDesc(){
  document.getElementById("Dashboard").style.color = "white";
  document.getElementById("Dashboard").style.backgroundColor = " rgb(9, 157, 216)";
  document.getElementById("Familias").style.color = "white";
  document.getElementById("Familias").style.backgroundColor = "#6a6093";
  document.getElementById("Geral").style.color = "white";
  document.getElementById("Geral").style.backgroundColor = "#6a6093";
  document.getElementById("Precos").style.color = "white";
  document.getElementById("Precos").style.backgroundColor = "#6a6093";
  document.getElementById("Descricoes").style.color = "#6a6093";
  document.getElementById("Descricoes").style.backgroundColor = "white";
  document.getElementById("divGeral").style.zIndex = "0";
  document.getElementById("divFamilias").style.zIndex = "0";
  document.getElementById("divDescricoes").style.zIndex = "1";
  document.getElementById("divPrecos").style.zIndex = "0";
}

function changePagePreco(){
  document.getElementById("Dashboard").style.color = "white";
  document.getElementById("Dashboard").style.backgroundColor = " rgb(9, 157, 216)";
  document.getElementById("Descricoes").style.color = "white";
  document.getElementById("Descricoes").style.backgroundColor = "#6a6093";
  document.getElementById("Familias").style.color = "white";
  document.getElementById("Familias").style.backgroundColor = "#6a6093";
  document.getElementById("Geral").style.color = "white";
  document.getElementById("Geral").style.backgroundColor = "#6a6093";
  document.getElementById("Precos").style.color = "#6a6093";
  document.getElementById("Precos").style.backgroundColor = "white";
  document.getElementById("divGeral").style.zIndex = "0";
  document.getElementById("divFamilias").style.zIndex = "0";
  document.getElementById("divDescricoes").style.zIndex = "0";
  document.getElementById("divPrecos").style.zIndex = "1";
}

function SelectBox(){
 
    var x = document.getElementById("SelectBoxF2");
    var option = document.createElement("option");
    option.text = "SF2";
    option1.text = "SF3";
    option2.text = "SF4";
    x.add(option,option1,option2);
    console.log(x);
  }
