import Login from '../pages/login'

describe('Login', () => {

    beforeEach(() => {
        // arranje
        Login.visitarPagina();
    })

    it('Realizar login com sucesso', () => {
        // actions
        Login.preencherUsuarioValido();

        // assert
        cy.url().should('include', '/inventory.html')
        cy.screenshot('login-sucesso')
    })


    it('Realizar login com senha invalida', () => {
        // actions
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('invalido');
        cy.get('[data-test="login-button"]').click();

        // assert
        cy.get('[data-test="error"]').should('contain.text', 'Username and password do not match any user in this service');
        cy.url().should('eq', 'https://www.saucedemo.com/');
        cy.screenshot('login-senha-invalida')
    })


    it('Realizar login com credenciais invalidas', () => {
        // actions
        cy.get('[data-test="username"]').type('invalido');
        cy.get('[data-test="password"]').type('invalido');
        cy.get('[data-test="login-button"]').click();

        // assert
        cy.get('[data-test="error"]').should('contain.text', 'Username and password do not match any user in this service');
        cy.url().should('eq', 'https://www.saucedemo.com/');
        cy.screenshot('login-credenciais-invalida');
    })


    it('Realizar login com usuario bloqueado', () => {
        // actions
        cy.get('[data-test="username"]').type('locked_out_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        // assert
        cy.get('[data-test="error"]').should('contain.text', 'Sorry, this user has been locked out.');
        cy.url().should('eq', 'https://www.saucedemo.com/');
        cy.screenshot('login-usuario-bloqueado');
    })
})