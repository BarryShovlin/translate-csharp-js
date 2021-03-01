
console.log("Let's roll some dice, baby!")
console.log("---------------------------")

const Die = (number) => {
    return {
        value: number
    }
}

const Roll = () => {
    const randoNumber = (min, max) => {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1))
    }
    const dieValue = randoNumber(1, 6)
    const die = Die(dieValue)
    return die
}

for (let i = 0; i < 10; i++) {
    die1 = Roll()
    die2 = Roll();


    let message = `${die1.value} + ${die2.value} === ${die1.value + die2.value}`
    if (die1.value === die2.value) {
        message += " DOUBLES!"
    }

    console.log(message)
}