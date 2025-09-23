import Carrinho from '../pages/carrinho'

describe('Produtos', () => {
    beforeEach(() => {
        // arranje
        Login.visitarPagina();
        Login.preencherUsuarioValido();
        
    })
  
  it('Adicionar UM produto ao carrinho', () => {
      // guardar o nome do produto
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('.shopping_cart_badge').should('be.visible').and('have.text', '1');

      // actions
      cy.get('.shopping_cart_link').click();

      // assert
      cy.get('.cart_item').should('have.length', 1);
      cy.get('.cart_item').first().find('.inventory_item_name').should('contain.text', 'Sauce Labs Backpack'); // verificar se o nome do produto é o mesmo do que foi capturado la no get da linha 9
      cy.screenshot('verificar-produto-carrinho');
  })
})