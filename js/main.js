// Visualizzare in pagina 5 numeri casuali. 
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNum = [];
const userNumbers = [];
let guessedNumbers = [];
for (let i = 0; i < 5; i++) {
    const generatedNum = getRandomNumber(1, 100);
    if (!randomNum.includes(generatedNum)) {
        randomNum.push(generatedNum)
    }
    console.log(randomNum[i])
}
alert("memorizza i numeri che stanno per uscire!!!!")
alert(randomNum);
console.log(randomNum)
    // Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
setTimeout(userInput, 3000);

function userInput() {
    for (let i = 0; i < randomNum.length; i++) {
        const userNum = Number(prompt("Inserisci i numeri che ricordi, uno alla volta e premi ok"))
        userNumbers.push(userNum)
        if (randomNum.includes(userNum)) {
            guessedNumbers.push(userNum)
        }
    }
    console.log("Hai indovinato un totale di", guessedNumbers.length, "numeri.")
    console.log("I numeri che hai indovinato sono:", guessedNumbers)

}


// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.