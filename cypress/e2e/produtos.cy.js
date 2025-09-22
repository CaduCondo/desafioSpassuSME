import Login from '../pages/login'

describe('Produtos', () => {
    beforeEach(() => {
        // arranje
        Login.visitarPagina();
    })

    it('Adicionar UM produto ao carrinho', () => {
        // arranje
        Login.preencherUsuarioValido();

        // actions
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

        // assert
        cy.get('[data-test="shopping-cart-badge"]').should('be.visible').and('have.text', '1');
        cy.screenshot('adicionar-produto-carrinho');
    })


    it('Retirar UM produto ao carrinho', () => {
        // arranje        
        Login.preencherUsuarioValido();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-badge"]').should('be.visible').and('have.text', '1');

        // actions
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();

        // assert
        cy.get('[data-test="shopping-cart-badge"]').should('not.exist');
        cy.screenshot('remover-produto-carrinho');
    })


    it('Retirar UM produto ao carrinho com usuario com erro', () => {
        // arranje
        cy.get('[data-test="username"]').type('problem_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-badge"]').should('be.visible').and('have.text', '1');

        // actions
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();

        // assert
        cy.get('[data-test="shopping-cart-badge"]').should('not.exist');
        cy.screenshot('remover-produto-carrinho');
    })
})