console.log('while')
//dichiaro numero all'utente
let number
//dichiaro variabile resto ed array vuoto dove pushare numeri dispari
let resto = number % 2
let numberList = []


//l'utente deve inserire numeri finchè non ne inserirà 10 dispari da inserire nell'array
while (numberList.length < 10){
    number = parseInt(prompt('Inserisci un numero'))
    console.log(number)

    if ((resto === 0) || isNaN(number) ){
        console.log('il numero è pari o non valido')
        continue
    }  
    else{
        numberList.push(number)
        console.log('inserisco numero dispari in array')  
    } 
}   

console.log (numberList)