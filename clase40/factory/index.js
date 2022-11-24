import MyEmployeeFactory from "./MyEmployeeFactory.js";

(_ => {
    let factory = new MyEmployeeFactory()
    let types = ['fulltime', 'parttime', 'contractor'];
    let employees = [];
    
    for (let i = 0; i < 100; i++) {
        employees.push(factory.createEmployee({ type: types[Math.floor(Math.random(2) * 2)] }))
    }

    employees.forEach(e => {
        console.log(e.speak())
    })
})()