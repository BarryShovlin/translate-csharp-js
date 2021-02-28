console.log("My Enemy List!");
console.log("----------------")

const enemies = [
    {
        firstName: "Joshua",
        lastName: "Flowers",
        Offenses: ["Being a jerk to me in elementary school", "Not being nice to me in elementary school"],
        isReallyHated: true
    },
    {
        firstName: "Darth",
        lastName: "Vader",
        Offenses: ["Cut off Luke's hand", "Murdered all thos kids", "Unkind management practices"],
        isReallyHated: false
    },
    {
        firstName: "Betty",
        lastName: "Rudelady",
        Offenses: ["Cut off Luke's hand", "Murdered all thos kids", "Unkind management practices"],
        isReallyHated: true
    },
    {
        firstName: "Leon",
        lastName: "Peck",
        Offenses: ["Keeps giving me a hotplate"],
        isReallyHated: false
    },


]

const enemyList = (enemies) => {
    for (const enemy of enemies) {
        if (enemy.isReallyHated === true) {
            console.log(`${enemy.firstName} ${enemy.lastName} (Really, really dislike!)`)
        }
        else {
            console.log(`${enemy.firstName} ${enemy.lastName}`)
        }
    }
}

enemyList(enemies)


