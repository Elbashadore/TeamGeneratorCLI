const Intern = require('../lib/Intern');

const school = "DU"

describe("Intern",()=>{
    describe("getschool", ()=>{
        it("Should provide Intern's School", ()=>{
            const result = new Intern(school).getSchool();

            

            expect(result).toBe("DU");

        });
    });
});
