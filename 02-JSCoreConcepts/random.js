const fill = () => {

    let getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

    let arr = [
        getRandomInt(5, 20),
        getRandomInt(5, 20),
        getRandomInt(5, 20),
        getRandomInt(5, 20),
        getRandomInt(5, 20),
        getRandomInt(5, 20),
        getRandomInt(5, 20),
        getRandomInt(5, 20),
        getRandomInt(5, 20),
        getRandomInt(5, 20),
    ]
    return arr
}

const print = () => { console.log(fill()) }

print()