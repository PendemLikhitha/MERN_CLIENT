describe(' Page E2E testing',function(){
    let userData;
    beforeEach(function(){
        cy.fixture('user').then((user)=>{
            this.userData = user;
        });
    });
    it('Testing Register Page Function',function(){ //used to run our tests
        cy.visit('/register'); 
        cy.get('h1').should('contain','Register Here!!');
        cy.get('input[name="name"]').type(this.userData.name);
        cy.get('input[name="email"]').type(this.userData.email);
        cy.get('input[name="password"]').type(this.userData.password);
        cy.get('button[type="submit"]').click({multiple:true});
        cy.contains("Register Successful!! :)").should('be.visible')
        cy.log('Registration Functionality is working')

    })
})