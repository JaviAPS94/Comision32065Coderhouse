import faker from 'faker';
faker.locale = 'es';

function generar() {
    return {
        nombre: faker.name.firstName(),
        email: faker.internet.email()
    }
};

export {
    generar
}