console.log('while')
//dichiaro variabile array vuoto dove pushare numeri dispari
let numberList = []

// l'utente deve inserire numeri finchè non ne inserirà 10 dispari da inserire nell'array
while (numberList.length < 10){
    let number = parseInt(prompt('Inserisci un numero intero'))
    console.log(number)
    const resto = number % 2
    // for (let )
    if (resto === 1){
        numberList.push(number)
        console.log('inserisco numero dispari in array')  
    }  
}   
console.log (numberList)

for (let i = 0; i < numberList.length; i++){
    const currentNumber = numberList[i]
    console.log(currentNumber)
}

