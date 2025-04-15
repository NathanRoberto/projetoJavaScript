const USD = 5.0
const EUR = 5.5
const GBP = 6.0

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

form.onsubmit = (event) => {
    event.preventDefault()
    

    switch (currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
}

function convertCurrency(amount, price, symbol){
    try{

        description.textContent = `${symbol} 1 = ${price}`

        let total = String(amount * price).replace(",", ".")

        result.textContent = `${total} Reais`

        if (isNaN(total)){
            return alert ("Digite um número correto para converter")
        }

        footer.classList.add("show-result")

    } catch (err){
        footer.classList.remove("show-result")
        alert('Não foi possível converter.')
    }

}


function formatCurrenyBRL(value){
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
}