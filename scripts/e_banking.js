let money = 0;

let deposit = () => {
    let addedMoney = parseFloat(document.getElementById("depositAmount").value)
    money += addedMoney;
    console.log(money)
    document.getElementById("balance").innerHTML = money;
}