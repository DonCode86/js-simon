// Visualizzare in pagina 5 numeri casuali. 
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const numbersHtml = document.querySelector(".numbers")
const randomNum = [];
const userNumbers = [];
const guessedNumbers = [];
while (randomNum.length < 5) {
    const generatedNum = getRandomNumber(1, 100);
    if (!randomNum.includes(generatedNum)) {
        randomNum.push(generatedNum)
    }
}
numbersHtml.innerHTML = randomNum;
// nascondiamo i numeri
setTimeout(function() {
    numbersHtml.innerHTML = "";
}, 2000);
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
setTimeout(function() {
    for (let i = 0; i < 5; i++) {
        const userNum = Number(prompt("Inserisci i numeri che ricordi, uno alla volta e premi ok"))
        userNumbers.push(userNum)
        if (randomNum.includes(userNum)) {
            guessedNumbers.push(userNum)
        }
    }
    //il software dice quanti e quali dei numeri da indovinare sono stati individuati.

    for (let i = 0; i < userNumbers.length; i++) {
        const number = userNumbers[i];
        //se il numero e' presente nell'array randomNumbers e non e' inculso nell'array guessedNumbers, lo aggiungo all'array
        if (randomNum.includes(number) && !guessedNumbers.includes(number)) {
            guessedNumbers.push(number);
        }
    }
    if (guessedNumbers.length > 0) {
        alert(`Hai indovinato ${guessedNumbers.length} numeri (${guessedNumbers})`);
    } else {
        alert("Non hai indovinato nessun numero!")
    }
    console.log(guessedNumbers)
}, 2000)