
class ContactFormPage {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    visit(environment) {
        cy.visit(`https://dev.fakturaonline.${environment}/new`)
        cy.url().should('eq', `https://dev.fakturaonline.${environment}/new`)
    }
    fillTheForm(environment) {
        cy.intercept('POST', '/graphql', {}).as('UserData')
        cy.url().should('eq', `https://dev.fakturaonline.${environment}/kontakty/new`)
        cy.get('#invoice_attributes_company_number').type('09932691').type('{enter}');
        cy.wait('@UserData')
        cy.get('input.vti__input.el-input__inner').type('728884872')
        cy.get('#invoice_attributes_email').type('R.V@post.cz')
        cy.get('[name="invoice_attributes_name"]').type('Robin Valenta')
        cy.get('[name="tax_number"]').type('CZ0107100400')
        cy.get('span[data-v-1e95d640]').contains('span', 'Uložit změny').click()

    }
}

export default ContactFormPage;