 
      let count = 0;
      function myFunction(elemnt, playerName) {
         count += 1;
         var x = document.createElement(elemnt);
         var t = document.createTextNode(playerName);
         x.appendChild(t);
      document.getElementById("myList").appendChild(x);
    }
    
    
      document.getElementById('rubelBtnClick').addEventListener('click' ,function(){
      document.getElementById("rubelBtnClick").disabled = true;
    })
      document.getElementById('sabbirBtnClick').addEventListener('click' ,function(){
        document.getElementById("sabbirBtnClick").disabled = true;
      })
      document.getElementById('shakibBtnClick').addEventListener('click' ,function(){
        document.getElementById("shakibBtnClick").disabled = true;
      })
      document.getElementById('tamimBtnClick').addEventListener('click' ,function(){
        document.getElementById("tamimBtnClick").disabled = true;
      })
      document.getElementById('mushfiqBtnClick').addEventListener('click' ,function(){
        document.getElementById("mushfiqBtnClick").disabled = true;
      })
      document.getElementById('mashrafeeBtnClick').addEventListener('click' ,function(){
        document.getElementById("mashrafeeBtnClick").disabled = true;
      })




     function inputFieldAmount(elementId) {
       const inputAmountField = document.getElementById(elementId);
       const inputAmountFieldString = inputAmountField.value;
       const inputAmountFieldValue = parseInt(inputAmountFieldString);
  
       return inputAmountFieldValue;
     }

     function textFieldAmount(elementId) {
       const textFieldTotal = document.getElementById(elementId);
       const textFieldString = textFieldTotal.innerText;
       const textField = parseInt(textFieldString);
  
       return textField;
     }



document.getElementById('calculate').addEventListener('click', function () {
    const perPlayer = inputFieldAmount('per-player-cost');
  
    const totalPlayerCost = perPlayer 

    document.getElementById('playerExpenses').innerHTML = totalPlayerCost;
})

document.getElementById('totalCalculate').addEventListener('click', function () {
    const totalPlayerPrice = textFieldAmount('playerExpenses')
    const managerCost = inputFieldAmount('manager-cost');
    const coachCost = inputFieldAmount('coach-cost');
  
  const totalCost = totalPlayerPrice + managerCost + coachCost;

    document.getElementById('totalCost').innerHTML = totalCost;
})