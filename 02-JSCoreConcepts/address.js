let title = "dr";
let name = "Mateusz";
let surname = 'Kubicki';
let street = 'Długa 15';
let city = 'Kraków';
let zip = '30-781';
let country = 'Poland';


/* 
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/

function withoutFormatting() {
    console.log(' dr', name, surname, '\n', 'ul.', street, '\n', zip, city, '\n', country)
}


function withFormatting() {
    console.log(`dr ${name} ${surname}
ul. ${street}
${zip} ${city}
${country}
`)
}


withoutFormatting()
withFormatting()
