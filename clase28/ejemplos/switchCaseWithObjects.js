function getValue(operacion, num1, num2) {
    const operaciones = {
        SUMA: () => {
            return num1 + num2;
        },
        RESTA: () => {
            return num1 - num2;
        },
        MULTIPLICACION: () => {
            return num1 * num2;
        },
        default: () => {
            return num1 + num2;
        }
    };

    return (operaciones[operacion] || operaciones['default'])();
};

console.log(getValue('MULTIPLICACION', 6, 5));