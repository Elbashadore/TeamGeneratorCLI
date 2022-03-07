
const Engineer = require('../lib/Engineer');

const github = "Elbashadore"

describe("Engineer",()=>{
    describe("getGithub", ()=>{
        it("Should provide Engineer github", ()=>{
            const result = new Engineer(github).getGithub()

            

            expect(result).toBe("Elbashadore");

        });
    });
});

