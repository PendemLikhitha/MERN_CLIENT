//This is where we will write e2e test cases
//Describe has 2  params :labeland func
describe('Open Home Page',()=>{
    it('Open Home Page',()=>{
        cy.visit('/')
        // '/' represents baseUrl.Visit is used to visit url
        // cy.contains("Welcome to Home Page!!");//Checks whehter a text or component is present in the doc or not
         cy.contains('Register')
         cy.contains('Login')
    })
})