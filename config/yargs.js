/**
 * 
 * 
 */

const descripcion = {

    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'

};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'crear un elmento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado

    })
    .command('borrar', 'Borra el elemento', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}