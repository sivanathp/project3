import { AppPage } from './app.po';
import { browser, logging , by, element} from 'protractor';

export var page: AppPage;
export var registrationLink =  element(by.id('registration-navbar'));
export var bracketsLink =  element(by.id('brackets-navbar'));
export function checkNavbarTexts(){
    element(by.id('hello-navbar')).getText().then(function(text){ // Promise
      expect(text).toEqual('Welcome');
    });

    element(by.id('registration-navbar')).getText().then(function(text){ // Promise
      expect(text).toEqual('Registration');
    });

    element(by.id('brackets-navbar')).getText().then(function(text){ // Promise
      expect(text).toEqual('Brackets');
    });
  }

export function navigateToRegistrationPage(){
     
    browser.get('/');
    registrationLink.click();
  }

export function navigateToBracketsPage(){
    
    browser.get('/');
    bracketsLink.click();
    
  }

describe('routing-project App', () => {
  let page: AppPage;
  var subpageTitle = element(by.id('subpageTitle'));
  var registrationLink =  element(by.id('registration-navbar'));
  var bracketsLink =  element(by.id('brackets-navbar'));
  var helloLink =  element(by.id('hello-navbar'));
  var contestant0 = element(by.id('contestant0'));
  var contestant1 = element(by.id('contestant1'));
  var contestant2 = element(by.id('contestant2'));
  var contestant3 = element(by.id('contestant3'));
  var contestant4 = element(by.id('contestant4'));
  var contestant5 = element(by.id('contestant5'));
  var contestant6 = element(by.id('contestant6'));
  var contestant7 = element(by.id('contestant7'));
  var registerButton = element(by.id('registerbtn'));
  var registerMessage = element(by.id('registermessage'));
  var autofilltwoButton = element(by.id('autofilltwo'));
  var autofillfourButton = element(by.id('autofillfour'));
  var autofilleightButton = element(by.id('autofilleight'));

  

  beforeEach(() => {
    page = new AppPage();
  });
  

  it('should have a h1', function() {
    page.navigateTo();
    browser.get('/');
    expect(subpageTitle.getText()).toEqual('Brackets App');
    expect(element(by.css('h2')).getText()).toEqual('Brackets App');
    
        
   });

  it('should go to Registration page', function() {
page.navigateTo();    
navigateToRegistrationPage();
    
    expect(element(by.css('h2')).getText()).toEqual('Register Players');
    
        
   });

   it('should go to Brackets page', function() {
page.navigateTo();
    navigateToBracketsPage();
    
    expect(element(by.css('h2')).getText()).toEqual('Brackets');
    
        
   });

   it('should navigate back to welcome page from Brackets page', function() {
    navigateToBracketsPage();
    
    expect(element(by.css('h2')).getText()).toEqual('Brackets');
    
    helloLink.click();
    expect(element(by.css('h2')).getText()).toEqual('Brackets App');
    
        
   });

   it('testing routes', () => {
    browser.sleep(2000).then(function(){
      checkNavbarTexts();
      
    });
  }); 

  

});
