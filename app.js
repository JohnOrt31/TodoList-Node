require('colors');

const { showMenu, pause } = require('./helpers/messages');

console.clear();

const main = async() => {
    console.log('Hola Mundo');

    let opt = '';
    do {
        opt = await showMenu(); 
        console.log({opt})
        if ( opt !== '0' ) await pause();  
    } while ( opt != '0' );
    
}

main();