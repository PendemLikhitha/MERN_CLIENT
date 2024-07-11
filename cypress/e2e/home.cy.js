describe('Home Page Test',()=>{
    it('Check the Input field and Delete Functionality',()=>{
        cy.visit('/')
        cy.get('input').type('Hemanth')
        cy.get('button').should('be.visible')
        cy.get('button#submit').click();
        cy.contains('Hemanth')
        cy.get('td#print').should('contains.text','Hemanth')
        cy.get('button#delete').should('be.visible')
        cy.get('button#delete').click({multiple:true})
        cy.get('button#delete').should('not.exist')

    })
})