
class ContactPage {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    visit(environment) {
        cy.visit(`https://dev.fakturaonline.${environment}/kontakty`)
        cy.url().should('eq', `https://dev.fakturaonline.${environment}/kontakty`)
    }
    addContact(environment) {
        cy.intercept('POST', '/new', {}).as('CreateNewContactForm')
        cy.url().should('eq', `https://dev.fakturaonline.${environment}/kontakty`)
        cy.get('[data-analytics-id="contactsTable.buttons.addContact"]').click()
        //cy.wait('@CreateNewContactForm')
    }

    noContactsCheck() {
        cy.get('[data-analytics-id="contactsTable.emptyContacts.button"]').should("be.visible")
    }

}

export default ContactPage;