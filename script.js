const breads = document.querySelectorAll("input[name = 'bread']");
const hambs = document.querySelectorAll("input[name = 'hamb']");
const salads = document.querySelectorAll("input[name = 'salad']");
const cheeses = document.querySelectorAll("input[name = 'cheese']");

breads[0].addEventListener('click', colorr);
console.log(breads[0]);
function colorr(){
    document.querySelectorAll("input[name = 'bread']")[0].style.color = "red";
    console.log(breads[0]);
}

function teste() {
    //Qual pão foi escolhido
    let arrBread = test(breads);

    //Qual hamburguer foi escolhido
    let arrHamb = test(hambs);

    //Qual salada foi escolhida
    let arrSalad = test(salads);

    //Qual queijo foi escolhido
    let arrCheese = test(cheeses);

    escreve(arrBread, arrHamb, arrSalad, arrCheese);

    let hello = document.querySelectorAll("label");
    document.querySelector("label").dataset.filter
    console.log(hello);

    hello[0].style.filter = "grayscale(0)";

    console.log(arrBread);
    console.log(arrHamb);
    console.log(arrSalad);
    console.log(arrCheese);
}

function escreve(bread, hamb, salad, cheese){
    document.getElementById("pBread").innerText = "Pão: " + bread[0];
    document.getElementById("pBreadValue").innerText = bread[1];
    document.getElementById("pHamb").innerText = "Hamburguer: " + hamb[0];
    document.getElementById("pHambValue").innerText = hamb[1];
    document.getElementById("pSalad").innerText = "Salada: " + salad[0];
    document.getElementById("pSaladValue").innerText = salad[1];
    document.getElementById("pCheese").innerText = "Queijo: " + cheese[0];
    document.getElementById("pCheeseValue").innerText = cheese[1];

    document.getElementById("valueAll").innerText = "Valor total: " + valueAll([
        bread[1], 
        hamb[1], 
        salad[1], 
        cheese[1]
    ]);
}

function valueAll(arrItens){
    let resultAll = 0;
    arrItens.forEach(function(item){
        resultAll += parseFloat(item);
    });
    return resultAll;
}

function test(ex){
    let result;
    ex.forEach(function(item){
        if(item.checked == true) {
            result = [
                item.value.split(' ')[0], 
                item.value.split(' ')[1]];
                return result;
        }
    });
    return result;
}