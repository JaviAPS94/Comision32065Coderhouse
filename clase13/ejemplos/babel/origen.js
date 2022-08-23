// const lista = [2, 3, 4, 5];
// lista.map(x => x * x).forEach(x => console.log(x));

const getNum0a255 = () => Math.floor(Math.random() * 256)

class Color {
    get() {
        let color = `rgb(${getNum0a255()},${getNum0a255()},${getNum0a255()})`
        return color
    }
}

const color = new Color()
console.log(color.get()) 