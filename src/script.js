const message = 'the chibreakbeat calculator'
let N1 = prompt("Escolha um numero");
let N2 = prompt("Escolha outro numero");
let OperationType = prompt("escolha uma operação (+/add/1 - adição, -/sub/2 - subtração, */multi/3 - multiplicação, /4 e div - divisão)");
let N1Int = parseInt(N1);
let N2Int = parseInt(N2);
let V;

document.querySelector('#header').innerHTML = message

console.log(message)
if(OperationType == "+" || OperationType == "add" ||  OperationType == "1")
{
   V=N1Int + N2Int
   alert("o resultado é:" +V);
}
else if(OperationType == "-"|| OperationType == "sub" || OperationType == "2")
{
  V=N1Int - N2Int
  alert("o resultado é:" +V);
}
else if(OperationType == "*"||  OperationType =="multi" || OperationType == "3")
{
  V=N1Int * N2Int
  alert("o resultado é:" +V);
}
else if(OperationType == "/" || OperationType == "div" || OperationType == "4")
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
document.querySelector('#header').innerHTML = "resultado:" + V; 
document.querySelector('#paragrafo').innerHTML = "A CALCULADORA MAIS INSANA DOS SETE MARES";





