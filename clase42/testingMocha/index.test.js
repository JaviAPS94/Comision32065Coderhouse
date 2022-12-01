const Todos = require('./todos');
const assert = require('assert').strict;
const fs = require('fs');

describe('Test de integracion de tareas', () => {
    it('debería crear el contenedor de tareas vacío', () => {
        const todos = new Todos();
        assert.strictEqual(todos.list().length, 0);
    });

    it('deberia adiciona tareas correctamente', () => {
        const todos = new Todos();

        todos.add('tarea 1');
        assert.strictEqual(todos.list().length, 1);
    });

    it('deberia marcar una tarea como completa', () => {
        const todos = new Todos();
        todos.add('tarea 1');
        todos.complete('tarea 1');
        assert.deepStrictEqual(todos.list(), [{ title: 'tarea 1', complete: true }]);
    });
});

describe('comprobar error en completar tarea inexistente', () => {
    it('deberia dar error porque no hay tarea', () => {
        const todos = new Todos();
        const errorEsperado = new Error('No hay tareas');
        assert.throws(() => {
            todos.complete('Tarea 1');
        }, errorEsperado);
    });
});

describe('saveToFilePromise its ok', () => {
    before(() => {
        console.log('============')
    });

    after(() => {
        console.log('========')
    })

    beforeEach(() => {
        this.todos = new Todos();
    });

    afterEach(() => {
        if(fs.existsSync('todos.txt')) {
            fs.unlinkSync('todos.txt');
        }
    });

    it('deberia guardar una tarea en el archivo todos.txt', async () => {
        this.todos.add('Tarea 3');
        await this.todos.saveToFilePromise();
        assert.strictEqual(fs.existsSync('todos.txt'), true);
    })
})


