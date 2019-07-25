let text = 'Lorem ipsum dolor sit amet KEIKSMAZODIS consectetur adipisicing KEIKSMAZODIS elit. Ipsa ipsam KEIKSMAZODIS magnam molestias KEIKSMAZODIS omnis explicabo KEIKSMAZODIS obcaecati.';
let shortText = 'Lorem ipsum';

console.log( text );

// teksto ilgis
console.log( text.length );

// kokia pirma raide
console.log( text[0] );

// kokia paskutine raide
console.log( text[ text.length - 1 ] );

// didziosios/mazosios raides
console.log( text.toUpperCase() );
console.log( text.toLowerCase() );
console.log( text.toString() );

// israsyti visus simbolius
for ( let i=0; i<shortText.length; i++ ) {
    console.log(shortText[i]);
    
}

// ar galima "array" principu overwrite'inti n-th raide? :-(
    // Ats.: NE
shortText[0] = 'Š';
console.log( shortText );

//pakeisti pirmaja teksto raide
let newShrotText = '';
for ( let i=0; i<shortText.length; i++ ) {
    if ( i === 2 || i === 7 ) {
        newShrotText += 'Š';
    } else {
        newShrotText += shortText[i];
    }
}
shortText = newShrotText;
console.log(shortText);

console.log('-----------');

// pirma nauja raide + visos likusios
console.log( 'R' + shortText.substr(1) );
console.log( shortText.substr(6, 3) );

let abc = 'qwertyuiopasdfghjklzxcvbnm';
let randomText = abc.substr(6, 1) + abc.substr(12, 1);
console.log(randomText);

let zodis = 'abecele';
// zodis: 'abecele'
//        'a'               substr(0, 1)
//            'e'           substr(4, 1)
//        'abec'            substr(0, 4)
//          'ece'           substr(2, 3)
//             'le'         substr(abc.length - 2, 2)

console.log( zodis.substr(zodis.length - 2, 2) );
console.log( zodis.substr(-2) );

// norimo zodzio ismetimas is sakinio, jie jis ten yra

console.log('KEIKSMAZODIS sakinyje "text" yra pozicijoje: ' + text.indexOf('KEIKSMAZODIS'));
// jeigu randa
if ( text.indexOf('KEIKSMAZODIS') !== -1 ) {
    // ismetame lauk
    text = text.replace('KEIKSMAZODIS', '');
}
console.log(text);


console.log('------------');
// is nurodyto teksto ismetame visas rastas ieskomo zodzio reiksmes ir jas pakeiciame kitu norimu tekstu
// for, forEach, while, for in, do while, map, filter, sort, reduce

// while ( text.indexOf('KEIKSMAZODIS') !== -1 ) {
//     text = text.replace('KEIKSMAZODIS', '');
// }

do {
    text = text.replace('KEIKSMAZODIS', '');
} while ( text.indexOf('KEIKSMAZODIS') !== -1 );

do {
    console.log('antras do-while');
    text = text.replace('KEIKSMAZODIS', '');
} while ( text.indexOf('KEIKSMAZODIS') !== -1 );

// for ( let i=0; i<1; i++ ) {
//     if ( text.indexOf('KEIKSMAZODIS') !== -1 ) {
//         text = text.replace('KEIKSMAZODIS', '');
//         i--;
//     }
// }

console.log(text);



// suskaiciuoti kiek zodziu
// pirmiausia issivalome dvigubus tarpus
while ( text.indexOf('  ') !== -1 ) {
    text = text.replace('  ', ' ');
}

// zodziu yra tiek kiek tekste yra tarpu + 1
let zodziuKiekis = 0;
for ( let i=0; i<text.length; i++ ) {
    // condition ? if true : if false
    text[i] === ' ' ? zodziuKiekis = zodziuKiekis + 1 : zodziuKiekis = zodziuKiekis + 0;
}
if (text !== '') {
    zodziuKiekis++;
}
console.log(zodziuKiekis);

// zodziu zodyna
let zodynas = text.split(' ');
console.log(zodynas);

// console.log( zodynas[0] );
console.log( zodynas[6] );




// sutvarkyti teksta

// funkcinis kelias galimas, bet renkames kita
// console.log( correctGrammer( badText ) );

// naujas String objekto metoda
// console.log( badText.correctGrammer() );

String.prototype.correctGrammer = function(){
    let validusTekstas = '';
    validusTekstas = ''+this;

    // isvalome visus dvygubus ir daugiau tarpus
    const tarpasSimbolis = [
        { from: '  ', to: ' ' },
        { from: ' :', to: ':' },
        { from: ' ?', to: '?' },
        { from: ' !', to: '!' },
        { from: ' .', to: '.' },
        { from: ' ,', to: ',' }
    ];
    tarpasSimbolis.forEach( rule => {
        while ( validusTekstas.indexOf(rule.from) !== -1 ) {
            validusTekstas = validusTekstas.replace(rule.from, rule.to);
        }
    });

    // isvalome simbolius, kuriu negali eiti is eiles daugiau nei 1
    const singleSyblom = [',', '!', '?', ':', '-'];
    singleSyblom.forEach( symb => {
        while ( validusTekstas.indexOf(symb+symb) !== -1 ) {
            validusTekstas = validusTekstas.replace(symb+symb, symb);
        }
    });

    // negalimu eiti salia vienas kito simboliu valimas

    // tvarkome situacija su minusu ir tarpais aplink ji
        // ' - ' arba '-' -> all good
        // '- ' arba ' -' -> keiciam i ' - '


    return validusTekstas;
}

let badText = 'Lorem-    ipsum., dolore ...       sit amet   :consectetur? And ?? some -- awesoem   ::  ?.. o cia yra in-house teksto galabas -nezinau kas yra galabas.';
console.log( badText );

console.log('#################3');

console.log( badText.correctGrammer() );

//##################################################################################


const services = [ {title: 'a'}, {title: 'b'}, {title: 'c'} ]

function generateServices( data ) {
    let HTML = '';
    data.forEach( item => {
        HTML += `<div class="service">
                    <h3>${item.title}</h3>
                </div>`;
    });
    return HTML;
}

document.querySelector('#services_block').innerHTML = generateServices(services);

//##################################################################################

const testimonials = [ {text: 'a'}, {text: 'b'}, {text: 'c'} ]

function generateTestimonials( data ) {
    let HTML = '';
    data.forEach( item => {
        HTML += `<div class="testimonial">
                    <h3>${item.text}</h3>
                </div>`;
    });
    return HTML;
}

document.querySelector('#testimonials_block').innerHTML = generateTestimonials(testimonials);

