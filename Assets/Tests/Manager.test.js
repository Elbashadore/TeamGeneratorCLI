
const Manager = require('../lib/Manager');

const officeNumber = "27"

describe("Manager",()=>{
    describe("getOfficeNumber", ()=>{
        it("Should provide Manager's office number", ()=>{
            const result = new Manager(officeNumber).getOffice();

            

            expect(result).toBe("27");

        });
    });
});

