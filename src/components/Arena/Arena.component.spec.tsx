export default describe('<Arena/>', () => {
    context('Open project page', () => {
        it('Go to base url', () => {
            cy.visit(Cypress.env('base_url'));
        });
    });

    context('Testing start game', () => {
        it('Should be clicked button and generation food in cell', () => {
            cy.get('.start__btn').click({ force: true });
        });
    });
});
