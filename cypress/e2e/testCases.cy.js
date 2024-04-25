import LoginPage from "../support/LoginPage";
import ContactPage from "../support/ContactPage";
import ContactFormPage from "../support/ContactFormPage";
const environmentUrls = {
    'cz': {
        'login': 'https://dev.fakturaonline.cz/login',
        'contactPage': 'https://dev.fakturaonline.cz/contacts',
        'contactFormPage': 'https://dev.fakturaonline.cz/contact-form',
        'username': 'R.V@post.cz',
        'password': 'HJQS3'
    },
    'com': {
        'login': 'https://dev.invoiceonline.com/login',
        'contactPage': 'https://dev.invoiceonline.com/contacts',
        'contactFormPage': 'https://dev.invoiceonline.com/contacts/new',
        'username': 'wargamingstore@seznam.cz',
        'password': 'com_password'
    },
    'sk': {
        'login': 'https://dev.fakturaonline.sk/prihlasenie',
        'contactPage': 'https://dev.fakturaonline.sk/kontakty',
        'contactFormPage': 'https://dev.fakturaonline.sk/kontakty/new',
        'username': 'robian@seznam.cz',
        'password': 'sk_password'
    },
};


Object.entries(environmentUrls).forEach(([environment, urls]) => {
    describe(`Contact page - ${environment}`, () => {

        const loginPage = new LoginPage(urls.login);
        const contactPage = new ContactPage(urls.contactPage);
        const contactFormPage = new ContactFormPage(urls.contactFormPage);

        beforeEach(() => {
            loginPage.login(username, password);
        });

        it('User should be able to login', () => {
            contactPage.visit();
            contactPage.noContactsCheck();
            contactPage.addContact();
            contactFormPage.fillTheForm();
        });
    });
});
