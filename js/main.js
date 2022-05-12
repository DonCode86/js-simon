// Visualizzare in pagina 5 numeri casuali. 
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomNum = [];
const userNumbers = [];
let i;
let j;
while (randomNum.length < 5) {
    const generatedNum = getRandomNumber(1, 100);
    if (!randomNum.includes(generatedNum)) {
        randomNum.push(generatedNum)
    }
}
alert("memorizza i numeri che stanno per uscire!!!!")
alert(randomNum);
console.log(randomNum)
    // alert("Memorizza questi numeri!!: ",
    //     randomNum);

// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
setTimeout(function() {
    while (userNumbers.length < 5) {
        const userNum = Number(prompt("Inserisci i numeri che ricordi, uno alla volta e premi ok"))
        userNumbers.push(userNum)
    }
    // for (let i = 0; i < randomNum.length; i++) {
    //     const generatedNum = getRandomNumber(1, 100);
    //     if (!randomNum.includes(generatedNum)) {
    //         randomNum.push(generatedNum)
    //     }
    // }
    // for (let j = 0; j < userNumbers.length; j++) {
    //     const userNum = Number(prompt("Inserisci i numeri che ricordi, uno alla volta e premi ok"))
    //     userNumbers.push(userNum)
    // }
}, 3000);
console.log(userNumbers)
    // console.log(userNumbers)
    // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.