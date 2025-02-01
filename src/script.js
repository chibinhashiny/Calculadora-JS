const message = 'the chibreakbeat calculator'
let N1 = prompt("Escolha um numero");
let N2 = prompt("Escolha outro numero");
let OperationType = prompt("escolha uma operação (1 - adição, 2 - subtração, 3 - multiplicação, 4- divisão)");
let N1Int = parseInt(N1);
let N2Int = parseInt(N2);
let V;

document.querySelector('#header').innerHTML = message

console.log(message)
if(OperationType == "1")
{
   V=N1Int + N2Int
   alert("o resultado é:" +V);
}
else if(OperationType == "2")
{
  V=N1Int - N2Int
  alert("o resultado é:" +V);
}
else if(OperationType == "3")
{
  V=N1Int * N2Int
  alert("o resultado é:" +V);
}
else if(OperationType == "4" )
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

else if(!["1", "2", "3", "4"].includes(OperationType))
  {
    alert("po escolhe algo ai mano");
  }



console.log(V);
document.querySelector('#header').innerHTML = V; 





