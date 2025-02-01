const message = 'the chibreakbeat calculator'
let N1 = prompt("Escolha um numero");
let N2 = prompt("Escolha outro numero");
let OperationType = prompt("escolha uma operação (+/add/1 - adição, -/sub/2 - subtração, */multi/3 - multiplicação, /4 e div - divisão)");
let N1Int = parseInt(N1);
let N2Int = parseInt(N2);
let V;

document.querySelector('#header').innerHTML = message

console.log(message)
if(OperationType == "+" || "add" || "1")
{
   V=N1Int + N2Int
   alert("o resultado é:" +V);
}
else if(OperationType == "-"|| "sub" || "2")
{
  V=N1Int - N2Int
  alert("o resultado é:" +V);
}
else if(OperationType == "*"|| "multi" || "3")
{
  V=N1Int * N2Int
  alert("o resultado é:" +V);
}
else if(OperationType == "/" || "div" || "4")
{
  if(N2 !== "0"){
    V=N1Int / N2Int
  alert("o resultado é:" +V);
  }
  else
  {
    alert("nao pode dividir por zero!! ! !")
  }
  
}

else if(!["+", "-", "*", "/"].includes(OperationType))
  {
    alert("po escolhe algo ai mano");
  }



console.log(V);
document.querySelector('#header').innerHTML = V; 





