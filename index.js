// Code your solutions in this file
function writeCards(names, eventName) {
    const tyMessages = [];
    for (let a = 0; a < names.length; a++) {
        tyMessages.push(`Thank you, ${names[a]}, for the wonderful ${eventName} gift!`);
    }
    return tyMessages;
}

function countDown(number) {
    // while (number >= 0) {
    //     console.log(number);
    //     number--;
    // }

    for (let a = number; a >= 0; a--) {
        console.log(a);
    }
}