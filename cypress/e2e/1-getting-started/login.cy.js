
context('Travel App Login', () =>{
    it('Login page', () =>{
        cy.visit('https://travel-guru-71.web.app')
        cy.get('.login-button').click()
    })

    it('Type email and password and click login', ()=>{
        cy.get("input[name=email]").type('mr1917387@gmail.com');
        cy.get("input[name=password]").type("Mamun421@"); 
     
        cy.get('button[type="submit"]').click();
        
    })
    it('Travel Place', ()=>{
        cy.visit('https://travel-guru-71.web.app')
        cy.contains('Booking').click();
    })
    it('Booking Travel Date', ()=>{
    
   
        cy.wait(10000);
        cy.contains('Start Booking').click();
    })
})
