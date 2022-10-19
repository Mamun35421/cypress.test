
context('Travel App Login', () =>{

    it('Create Register page', () =>{
    
        cy.visit('https://travel-guru-71.web.app/login')
        cy.get('.btn-logintoggle').click()
        cy.get("input[name=name]").type('Mamun Or Rashid');
        cy.get("input[name=email]").type('mr1917387@gmail.com');
        cy.get("input[name=password]").type('mamun421@');
        cy.get("input[name=confirmPassword]").type('mamun421@');
        cy.get('.btn-logintoggle').click()  
    
    })

    it('Type email and password and click login', ()=>{
        cy.visit('https://travel-guru-71.web.app')
        cy.get('.login-button').click()
     
        cy.get("input[name=email]").type('mr1917387@gmail.com');
        cy.get("input[name=password]").type("Mamun421@"); 
     
        cy.get('button[type="submit"]').click();
        
    })
    it('Travel Place', ()=>{
     
        cy.visit('https://travel-guru-71.web.app')
        cy.contains('Booking').click();
    })
    it('Booking Travel Date', ()=>{

    
        cy.get('.booking-form ').type('27/10/2022') ;
        cy.get('.booking-form').type('02/11/2022');
        cy.contains('Start Booking').click();
    })
})
