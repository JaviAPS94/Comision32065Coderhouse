import Employee from "./Employee.js";

class FullTimeEmployee extends Employee {
    constructor(data) {
        super();
        this.type = 'full time'
    }
}

class PartTimeEmployee extends Employee {
    constructor(data) {
        super();
        this.type = 'part time'
    }
}

class ContractorEmployee extends Employee {
    constructor(data) {
        super();
        this.type = 'contractor'
    }
}

export {
    FullTimeEmployee,
    PartTimeEmployee,
    ContractorEmployee
}