
class LoginPage {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    login(email, password, environment) {
        cy.intercept('POST', '/graphql', {}).as('UserData')
        cy.visit(`https://dev.fakturaonline.${environment}/prihlaseni`)
        cy.get('button.el-button.login-button').click()
        cy.url().should('eq', `https://dev.fakturaonline.${environment}/prihlaseni`)
        cy.get('#email').type(email)
        cy.get('#current-password').type(password)
        cy.get('[data-analytics-id="button.login"]').click()
        cy.wait('@UserData')
    }
}

export default LoginPage;