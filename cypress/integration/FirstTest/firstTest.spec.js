context('Integrating cypress in jenkins', () => {
    beforeEach(() => {
        cy.visit('/');
    })
    
    it('Test # 1 - Should contain title', () => {
        cy.get('.nav__titulo').should('have.text', 'Challenge Encriptador de Textos');
    })
    it('Test # 2 - Should show place holder in principal text', () => {
        cy.get('.principal__texto--ingresado').invoke('attr','placeholder').should('eq', 'Ingrese el texto aquí');
    })
    it('Test # 3 - Should show no found text', () => {
        cy.get('.principal__noencontrado').should('be.visible');
    })
    it('Test # 4 - Should show image', () => {
        cy.get('.principal__imagen').should('be.visible');
    })
    it('Test # 5 - Should show instruction text', () => {
        cy.get('.principal__instruccion').should('be.visible');
    })
})
