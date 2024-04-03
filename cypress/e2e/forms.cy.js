describe('form tests', () => {

    beforeEach(() => {
        cy.visit('/forms')
    });
    it('Test Subscribe form', () => {
        cy.contains(/testing forms/i)
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
        cy.get('@subscribe-input').type('mark.maray@gaplabs.com')
        cy.contains(/Successfully subbed: mark.maray@gaplabs.com!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Successfully subbed: mark.maray@gaplabs.com!/i).should('exist')
        cy.wait(3000)
        cy.contains(/Successfully subbed: mark.maray@gaplabs.com!/i).should('not.exist')
    });
    it('Test for the unhappy path', () => {
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
        cy.get('@subscribe-input').type('mark.maray@gaplabs.io')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Invalid email: mark.maray@gaplabs.io!/i).should('exist')
        cy.wait(3000)
        cy.contains(/Invalid email: mark.maray@gaplabs.io!/i).should('not.exist')
    })
    it('Test for the No input path',()=>{
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/fail!/i).should('exist')
        cy.wait(3000)
        cy.contains(/fail!/i).should('not.exist')    
    })
});
