console.log(2);
console.log(6);
console.log(10);
console.log(14);

const withWhile = () => {
    let i = 2
    while (i === 14) {
        console.log(i)
        i += 4
    }
}

const withFor = () => {
    const tab = [2, 6, 10, 14]
    for (const n of tab) {
        console.log(n)
    }
}

withWhile()
withFor()
