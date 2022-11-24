import { ContractorEmployee, FullTimeEmployee, PartTimeEmployee } from "./ChildrenClases.js"

export default class MyEmployeeFactory {
    createEmployee(data) {
        if(data.type == 'fulltime') return new FullTimeEmployee(data)
        if(data.type == 'parttime') return new PartTimeEmployee(data)
        if(data.type == 'contractor') return new ContractorEmployee(data)
    }
}