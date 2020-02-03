const opts = {
    base: {
        demand: true,
        alias: 'b',
        default: 2
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crear archivo con lista de tabla de multiplicar', opts)
    .help()
    .argv;


module.exports = {
    argv
}