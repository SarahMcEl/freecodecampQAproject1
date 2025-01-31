describe('Converter Testing', () => {
  it('Visit URL', () => {
    cy.visit('127.0.0.1:3000')
  })
  describe('Input Type', () => {
    /* ==== Test Created with Cypress Studio ==== */
    it('Whole Number Input Gal', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('http://127.0.0.1:3000/');
      cy.get('#convertField').clear('4');
      cy.get('#convertField').type('4gal');
      cy.get('#convert').click();
      cy.get('#result').should('have.text', '4 gallons converts to 15.14164 liters');
      cy.get('#jsonResult').should('have.text', '{"initNum":4,"initUnit":"gal","returnNum":"15.14164","returnUnit":"l","string":"4 gallons converts to 15.14164 liters"}');
      /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Decimal Number Input Gal', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('http://127.0.0.1:3000/');
      cy.get('#convertField').clear('3');
      cy.get('#convertField').type('3.1gal');
      cy.get('#convert').click();
      cy.get('#result').should('have.text', '3.1 gallons converts to 11.73477 liters');
      cy.get('#jsonResult').should('have.text', '{"initNum":3.1,"initUnit":"gal","returnNum":"11.73477","returnUnit":"l","string":"3.1 gallons converts to 11.73477 liters"}');
      /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Fractional Number Input Gal', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('http://127.0.0.1:3000/');
      cy.get('#convertField').clear('1');
      cy.get('#convertField').type('1/2gal');
      cy.get('#convert').click();
      cy.get('#result').should('have.text', '0.5 gallons converts to 1.89271 liters');
      cy.get('#jsonResult').should('have.text', '{"initNum":0.5,"initUnit":"gal","returnNum":"1.89271","returnUnit":"l","string":"0.5 gallons converts to 1.89271 liters"}');
      /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Fractional Number With Decimal In Numerator Input Gal', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('http://127.0.0.1:3000/');
      cy.get('#convertField').clear('4');
      cy.get('#convertField').type('4.5/3gal');
      cy.get('#convert').click();
      cy.get('#result').should('have.text', '1.5 gallons converts to 5.67812 liters');
      cy.get('#jsonResult').should('have.text', '{"initNum":1.5,"initUnit":"gal","returnNum":"5.67812","returnUnit":"l","string":"1.5 gallons converts to 5.67812 liters"}');
      /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Fractional Number With Decimal Input In Denominator Gal', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('http://127.0.0.1:3000/');
      cy.get('#convertField').clear('2');
      cy.get('#convertField').type('2/4.4gal');
      cy.get('#convert').click();
      cy.get('#result').should('have.text', '0.45454545454545453 gallons converts to 1.72064 liters');
      cy.get('#jsonResult').should('have.text', '{"initNum":0.45454545454545453,"initUnit":"gal","returnNum":"1.72064","returnUnit":"l","string":"0.45454545454545453 gallons converts to 1.72064 liters"}');
      /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Fractional Number With Decimal Input In Denominator and Numerator Gal', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('http://127.0.0.1:3000/');
      cy.get('#convertField').clear('2');
      cy.get('#convertField').type('2.5/8.3gal');
      cy.get('#convert').click();
      cy.get('#result').should('have.text', '0.3012048192771084 gallons converts to 1.14018 liters');
      cy.get('#jsonResult').should('have.text', '{"initNum":0.3012048192771084,"initUnit":"gal","returnNum":"1.14018","returnUnit":"l","string":"0.3012048192771084 gallons converts to 1.14018 liters"}');
      /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Double Fraction Input Gal', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('http://127.0.0.1:3000/');
      cy.get('#convertField').clear('3');
      cy.get('#convertField').type('3/4/5gal');
      cy.get('#convert').click();
      cy.get('#result').should('have.text', 'invalid number');
      cy.get('#jsonResult').should('have.text', '"invalid number"');
      /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('No Numerical Input Gal', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('http://127.0.0.1:3000/');
      cy.get('#convertField').clear('g');
      cy.get('#convertField').type('gal');
      cy.get('#convert').click();
      cy.get('#result').should('have.text', '1 gallons converts to 3.78541 liters');
      cy.get('#jsonResult').should('have.text', '{"initNum":1,"initUnit":"gal","returnNum":"3.78541","returnUnit":"l","string":"1 gallons converts to 3.78541 liters"}');
      /* ==== End Cypress Studio ==== */
    });
  });

  describe('Unit Type Input', () => {
    /* ==== Test Created with Cypress Studio ==== */
    it('Lowercase Gal Input', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('http://127.0.0.1:3000/');
      cy.get('#convertField').clear('g');
      cy.get('#convertField').type('gal');
      cy.get('#convert').click();
      cy.get('#result').should('have.text', '1 gallons converts to 3.78541 liters');
      cy.get('#jsonResult').should('have.text', '{"initNum":1,"initUnit":"gal","returnNum":"3.78541","returnUnit":"l","string":"1 gallons converts to 3.78541 liters"}');
      /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Uppercase Gal Input', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('http://127.0.0.1:3000/');
      cy.get('#convertField').clear('G');
      cy.get('#convertField').type('GAL');
      cy.get('#convert').click();
      cy.get('#result').should('have.text', '1 gallons converts to 3.78541 liters');
      cy.get('#jsonResult').should('have.text', '{"initNum":1,"initUnit":"gal","returnNum":"3.78541","returnUnit":"l","string":"1 gallons converts to 3.78541 liters"}');
      /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Lowercase L Input', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('http://127.0.0.1:3000/');
      cy.get('#convertField').clear('l');
      cy.get('#convertField').type('l');
      cy.get('#convert').click();
      cy.get('#result').should('have.text', '1 liters converts to 0.26417 gallons');
      cy.get('#jsonResult').should('have.text', '{"initNum":1,"initUnit":"l","returnNum":"0.26417","returnUnit":"gal","string":"1 liters converts to 0.26417 gallons"}');
      /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Uppercase L Input', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('http://127.0.0.1:3000/');
      cy.get('#convertField').clear('L');
      cy.get('#convertField').type('L');
      cy.get('#convert').click();
      cy.get('#result').should('have.text', '1 liters converts to 0.26417 gallons');
      cy.get('#jsonResult').should('have.text', '{"initNum":1,"initUnit":"l","returnNum":"0.26417","returnUnit":"gal","string":"1 liters converts to 0.26417 gallons"}');
      /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Lowercase Mi Input', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('http://127.0.0.1:3000/');
      cy.get('#convertField').clear('m');
      cy.get('#convertField').type('mi');
      cy.get('#convert').click();
      cy.get('#result').should('have.text', '1 miles converts to 1.60934 kilometers');
      cy.get('#jsonResult').should('have.text', '{"initNum":1,"initUnit":"mi","returnNum":"1.60934","returnUnit":"km","string":"1 miles converts to 1.60934 kilometers"}');
      /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Uppercase Mi Input', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('http://127.0.0.1:3000/');
      cy.get('#convertField').clear('M');
      cy.get('#convertField').type('MI');
      cy.get('#convert').click();
      cy.get('#result').should('have.text', '1 miles converts to 1.60934 kilometers');
      cy.get('#jsonResult').should('have.text', '{"initNum":1,"initUnit":"mi","returnNum":"1.60934","returnUnit":"km","string":"1 miles converts to 1.60934 kilometers"}');
      /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Lowercase Km Input', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('http://127.0.0.1:3000/');
      cy.get('#convertField').clear('km');
      cy.get('#convertField').type('km');
      cy.get('#convert').click();
      cy.get('#result').should('have.text', '1 kilometers converts to 0.62137 miles');
      cy.get('#jsonResult').should('have.text', '{"initNum":1,"initUnit":"km","returnNum":"0.62137","returnUnit":"mi","string":"1 kilometers converts to 0.62137 miles"}');
      /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Uppercase Km Input', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('http://127.0.0.1:3000/');
      cy.get('#convertField').clear('KM');
      cy.get('#convertField').type('KM');
      cy.get('#convert').click();
      cy.get('#result').should('have.text', '1 kilometers converts to 0.62137 miles');
      cy.get('#jsonResult').should('have.text', '{"initNum":1,"initUnit":"km","returnNum":"0.62137","returnUnit":"mi","string":"1 kilometers converts to 0.62137 miles"}');
      /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Lowercase Lbs Input', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('http://127.0.0.1:3000/');
      cy.get('#convertField').clear('l');
      cy.get('#convertField').type('lbs{enter}');
      cy.get('#convert').click();
      cy.get('#result').should('have.text', '1 pounds converts to 0.45359 kilograms');
      cy.get('#jsonResult').should('have.text', '{"initNum":1,"initUnit":"lbs","returnNum":"0.45359","returnUnit":"kg","string":"1 pounds converts to 0.45359 kilograms"}');
      /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Uppercase Lbs Input', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('http://127.0.0.1:3000/');
      cy.get('#convertField').clear('L');
      cy.get('#convertField').type('LBS{enter}');
      cy.get('#convert').click();
      cy.get('#result').should('have.text', '1 pounds converts to 0.45359 kilograms');
      cy.get('#jsonResult').should('have.text', '{"initNum":1,"initUnit":"lbs","returnNum":"0.45359","returnUnit":"kg","string":"1 pounds converts to 0.45359 kilograms"}');
      /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Lowercase Kg Input', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('http://127.0.0.1:3000/');
      cy.get('#convertField').clear('k');
      cy.get('#convertField').type('kg{enter}');
      cy.get('#convert').click();
      cy.get('#result').should('have.text', '1 kilograms converts to 2.20462 pounds');
      cy.get('#jsonResult').should('have.text', '{"initNum":1,"initUnit":"kg","returnNum":"2.20462","returnUnit":"lbs","string":"1 kilograms converts to 2.20462 pounds"}');
      /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Uppercase Kg Input', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('http://127.0.0.1:3000/');
      cy.get('#convertField').clear('K');
      cy.get('#convertField').type('KG{enter}');
      cy.get('#convert').click();
      cy.get('#result').should('have.text', '1 kilograms converts to 2.20462 pounds');
      cy.get('#jsonResult').should('have.text', '{"initNum":1,"initUnit":"kg","returnNum":"2.20462","returnUnit":"lbs","string":"1 kilograms converts to 2.20462 pounds"}');
      /* ==== End Cypress Studio ==== */
    });
  });
})