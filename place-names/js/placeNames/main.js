const names = ["Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"];

console.log("All Place Names");

const nameLoop = (namesArray) => {
    for (const name of namesArray) {
        console.log(name)
    }
}

nameLoop(names)

console.log(" ")

let newArray = []

const nameFilter = () => {
    console.log("'The' Place Names")
    names.filter(name => {
        if (name.includes("The")) {
            newArray.push(name)
        }
    })
    console.log(newArray)
}

nameFilter()