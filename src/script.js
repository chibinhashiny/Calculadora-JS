const message = 'the chibreakbeat calculator'
let N1 = prompt("Escolha um numero");
let N2 = prompt("Escolha outro numero");
let OperationType = prompt("escolha uma operação (+/add/1 - adição, -/sub/2 - subtração, */multi/3 - multiplicação, /4 e div - divisão)");
let N1Int = parseInt(N1);
let N2Int = parseInt(N2);
let V;
let AddBTN = document.getElementById("add");
let SubBTN = document.getElementById("sub");
let MultiBTN = document.getElementById("mult");

let DivBTN = document.getElementById("div");


document.querySelector('#header').innerHTML = message

AddBTN.addEventListener("click", Add);
SubBTN.addEventListener("click", Sub);
MultiBTN.addEventListener("click", Multi);
DivBTN.addEventListener("click", Div);



function Add()
{
  V=N1Int + N2Int
  alert("o resultado é:" +V);
  atualizarResultado();
}

function Sub()
{
  V=N1Int - N2Int
  alert("o resultado é:" +V);
  atualizarResultado();
}


function Multi()
{
  V=N1Int * N2Int
  alert("o resultado é:" +V);
  atualizarResultado();
}


function Div()
{
  if(N2 !== "0"){
    V=N1Int / N2Int
  alert("o resultado é:" +V);
  atualizarResultado();
  }
  else
  {
    alert("nao pode dividir por zero!! ! !")
  }
}



console.log(message)
if(OperationType == "+" || OperationType == "add" ||  OperationType == "1")
{
  Add();
}
else if(OperationType == "-"|| OperationType == "sub" || OperationType == "2")
{
  Sub();
}
else if(OperationType == "*"||  OperationType =="multi" || OperationType == "3")
{
  Multi();
}
else if(OperationType == "/" || OperationType == "div" || OperationType == "4")
{
 Div();
  
}

else if(!["+", "-", "*", "/"].includes(OperationType))
  {
    alert("po escolhe algo ai mano");
  }



console.log(V);


function atualizarResultado() {
  document.querySelector('#header').innerHTML = "Resultado: " + V;
  document.querySelector('#paragrafo').innerHTML = "A CALCULADORA MAIS INSANA DOS SETE MARES";
}







