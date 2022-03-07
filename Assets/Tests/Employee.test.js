
const Employee = require('../lib/Employee');

const name = "John";
const ID = "7";
const email = "John.7@gmail.com";

describe("Employee",()=>{
    describe("getName", ()=>{
        it("Should provide Employee Name", ()=>{
            const result = new Employee(name,ID,email).getName()

            

            expect(result).toBe("John");

        });
    });

    describe("getId", ()=>{
        it("Should provide Employee ID", ()=>{
            const employee =  new Employee(name,ID,email)

            expect(employee.id).toBe("7");

        });
    });

    describe("getEmail", ()=>{
        it("Should provide Employee Email", ()=>{
            const employee = new Employee(name,ID,email)

            expect(employee.email).toBe("John.7@gmail.com")
        });
    });

    describe("getRole",()=>{
        it("Should provide Employee Role",()=>{
            const employee = new Employee(name,ID,email)
            role = employee.getRole()
            expect(employee.role).toBe("Employee")
        })
    })
});

