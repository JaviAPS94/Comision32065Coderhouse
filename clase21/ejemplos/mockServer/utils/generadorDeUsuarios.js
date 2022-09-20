import faker from 'faker';
faker.locale = 'es';

function generarUsuario() {
    return {
        nombre: faker.name.firstName(),
        email: faker.internet.email(),
        website: faker.internet.url(),
        image: faker.image.avatar()
    }
};

export { generarUsuario };