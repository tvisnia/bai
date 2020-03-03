class Person {

    name = ''
    surname = ''

    constructor(name, surname) {
        this.name = name
        this.surname = surname
    }

    withSurnameUppercase() {
        return `${this.name} ${this.surname.toUpperCase()}`
    }

    initials() {
        return `${this.name.charAt(0)}.${this.surname.charAt(0)}.`
    }

}

const JN = new Person('Jan', 'Nowak')
const TW = new Person('Tomasz', 'Wiśniewski')

console.log(JN.withSurnameUppercase())
console.log(JN.initials())
console.log(TW.withSurnameUppercase())
console.log(TW.initials())
