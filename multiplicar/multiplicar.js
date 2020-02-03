const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite) => {

    console.log('===================='.green);
    console.log(`Tabla de ${ base }`.green);
    console.log('===================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${i} * ${i} = ${ i * i } `);
    }

}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i } \n`;
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err) reject(err);
            else
                resolve(`tabla-${base}.txt`)
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}