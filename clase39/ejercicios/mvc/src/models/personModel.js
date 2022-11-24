const people = [];

async function getAll() {
    return people;
}

async function guardar(person) {
    people.push(person);
    return person;
}

export {
    getAll,
    guardar
}