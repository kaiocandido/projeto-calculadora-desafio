const convertButton = document.querySelector("button")
const currencySelect = document.querySelector(".optins")
const currencyFor = document.querySelector("#box-media")



function convertValues() {

    const inputCurrencyValue = document.querySelector(".final").value // valor digitado

    const currencyValueToConvert = document.querySelector("#realll")//valor em real

    const currencyValueToConverted = document.querySelector("#dolarrr")//valor em final

    const currencyValuePrimaryMoney = document.querySelector(".p2")// valor digitado

   
   

    
    const dolarToday = 5.03 // valor dolar
    const euroToday = 5.33 // valor euro
    const libraToday = 6.12 //valor libra
    const bitcoinToday = 150.94 //valor bitcoin
    const realToday = 5.03 // valor real

  
    



    //SESSÃO DE CALCULO 

    //Real for Dolar

    if (currencySelect.value == "dolar") {


        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {

            style: "currency",
            currency: "USD"

        }).format(inputCurrencyValue / dolarToday)

    }

    //Real for Euro

    if (currencySelect.value == "euro") {


        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {

            style: "currency",
            currency: "EUR"

        }).format(inputCurrencyValue / euroToday)

    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {

        style: "currency",
        currency: "BRL"

    }).format(inputCurrencyValue)


    //Real For Libra


if (currencySelect.value == "libra") {


    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-GB", {

        style: "currency",
        currency: "GBP"

    }).format(inputCurrencyValue / libraToday)

}


currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {

    style: "currency",
    currency: "BRL"

}).format(inputCurrencyValue)


// Real For biticoin


if (currencySelect.value == "bitcoin") {


    currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {

        style: "currency",
        currency: "XBT"

    }).format(inputCurrencyValue / bitcoinToday)


    currencyValuePrimaryMoney

}


}









//FUNÇÃO "PARA" >>

function changeCurrency12() {

    console.log("trocou button2")

    const currencyNames = document.getElementById("pp")
    const currencyImg = document.querySelector(".img2")

    if (currencySelect.value == "dolar") {
        currencyNames.innerHTML = "Dólar"
        currencyImg.src = "./estados-unidos (1) 1.png"



    }

    if (currencySelect.value == "euro") {
        currencyNames.innerHTML = "Euro"
        currencyImg.src = "./euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyNames.innerHTML = "Libra"
        currencyImg.src = "./libra 1.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyNames.innerHTML = "Bitcoin"
        currencyImg.src = "./bitcoin 1.png"
    }





    convertValues()
}



// FUNÇÃO DO BOTÃO DE CONVERTER DE >>>

function changeFunFor(){

    console.log(currencyFor.value)

    const currencyImgPrimary = document.querySelector(".img-brasil")
    const currencyPrimaryP = document.querySelector(".p")

    //Troca de IMG EUA
    if (currencyFor.value == "dolar") {
       currencyPrimaryP.innerHTML = "Dólar"
       currencyImgPrimary.src = "./estados-unidos (1) 1.png"

    }

    //Troca Img Euro
    if (currencyFor.value == "euro") {
        currencyPrimaryP.innerHTML = "Euro"
        currencyImgPrimary.src = "./euro.png"
 
 
     }


    //Troca Img Libra
     if (currencyFor.value == "libra") {
        currencyPrimaryP.innerHTML = "Libra"
        currencyImgPrimary.src = "./libra 1.png"
 
 
     }

     
     //Troc Img Biticoin
     if (currencyFor.value == "bitcoin") {
        currencyPrimaryP.innerHTML = "Biticoin"
        currencyImgPrimary.src = "./bitcoin 1.png"
 
 
     }


      //Troc Img Real
      if (currencyFor.value == "real") {
        currencyPrimaryP.innerHTML = "Real"
        currencyImgPrimary.src = "./brasil 2.png"
 
 
     }

    convertValues()
    
}


currencySelect.addEventListener("change", changeCurrency12)

currencyFor.addEventListener("change",changeFunFor)

convertButton.addEventListener("click", convertValues)

