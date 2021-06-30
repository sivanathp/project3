import { AppPage } from './app.po';
import { browser, logging , by, element} from 'protractor';
import { navigateToRegistrationPage, navigateToBracketsPage} from './routing.e2e-spec';



 export var contestant0 = element(by.id('contestant0'));
 export  var contestant1 = element(by.id('contestant1'));
 export  var contestant2 = element(by.id('contestant2'));
 export  var contestant3 = element(by.id('contestant3'));
 export  var contestant4 = element(by.id('contestant4'));
 export  var contestant5 = element(by.id('contestant5'));
 export  var contestant6 = element(by.id('contestant6'));
 export  var contestant7 = element(by.id('contestant7'));
 export  var registerButton = element(by.id('registerbtn'));

export function registerEightPlayers(){
    
    navigateToRegistrationPage();
contestant0.sendKeys('Ajna');
contestant1.sendKeys('Lewis');
contestant2.sendKeys('Orsega');
contestant3.sendKeys('Alex');
contestant4.sendKeys('Li');
contestant5.sendKeys('Yang');
contestant6.sendKeys('Yorder');
contestant7.sendKeys('Kyle');
registerButton.click();
    
  }

export function registerFourPlayers(){
    
    navigateToRegistrationPage();


contestant0.sendKeys('Ajna');
contestant1.sendKeys('Lewis');
contestant2.sendKeys('Orsega');
contestant3.sendKeys('Alex');
registerButton.click();
    
  }
describe('players registration App', () => {
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
  


  it('should register 4 contestants', function() {
    page.navigateTo();
    registerFourPlayers();
    
    expect(registerMessage.getText()).toEqual('Ajna,Lewis,Orsega,Alex');
    
        
   });

it('should register 8 contestants', function() {
    page.navigateTo();
    registerEightPlayers();
    
    expect(registerMessage.getText()).toEqual('Ajna,Lewis,Orsega,Alex,Li,Yang,Yorder,Kyle');
    
        
   });

it('cannot register 3 contestants', function() {
    page.navigateTo();
    browser.get('/');
    registrationLink.click();

contestant0.sendKeys('Ajna');
contestant1.sendKeys('Lewis');
contestant2.sendKeys('Orsega');

registerButton.click();
    
    expect(registerMessage.getText()).toEqual('Should be 2, 4, or 8 contestants');
    
        
   });

it('cannot register 5 contestants', function() {
    page.navigateTo();
    browser.get('/');
    registrationLink.click();

contestant0.sendKeys('Ajna');
contestant1.sendKeys('Lewis');
contestant2.sendKeys('Orsega');
contestant3.sendKeys('Alex');
contestant4.sendKeys('Li');

registerButton.click();
    
    expect(registerMessage.getText()).toEqual('Should be 2, 4, or 8 contestants');
    
        
   });

it('cannot register 7 contestants', function() {
    page.navigateTo();
    browser.get('/');
    registrationLink.click();

contestant0.sendKeys('Ajna');
contestant1.sendKeys('Lewis');
contestant2.sendKeys('Orsega');
contestant3.sendKeys('Alex');
contestant4.sendKeys('Li');
contestant5.sendKeys('Yang');
contestant6.sendKeys('Yorder');

registerButton.click();
    
    expect(registerMessage.getText()).toEqual('Should be 2, 4, or 8 contestants');
    
        
   });

it('cannot register 6 contestants', function() {
    page.navigateTo();
    browser.get('/');
    registrationLink.click();

contestant0.sendKeys('Ajna');
contestant1.sendKeys('Lewis');
contestant2.sendKeys('Orsega');
contestant3.sendKeys('Alex');
contestant4.sendKeys('Li');
contestant5.sendKeys('Yang');

registerButton.click();
    
    expect(registerMessage.getText()).toEqual('Should be 2, 4, or 8 contestants');
    
        
   });

it('should autofill 2 contestants', function() {
    page.navigateTo();
    browser.get('/');
    registrationLink.click();
    autofilltwoButton.click();
    
registerButton.click();
    
    expect(registerMessage.getText()).toEqual('Zoe,Kaylee');
    
        
   });

it('should autofill 4 contestants', function() {
    page.navigateTo();
    browser.get('/');
    registrationLink.click();
    autofillfourButton.click();
    
registerButton.click();
    
    expect(registerMessage.getText()).toEqual('John,Paul,George,Ringo');
    
        
   });

it('should autofill 8 contestants', function() {
    page.navigateTo();
    browser.get('/');
    registrationLink.click();
    autofilleightButton.click();
    
registerButton.click();
    
    expect(registerMessage.getText()).toEqual('Leia,Luke,Lando,Han,Chewy,R2D2,C3P0,Vader');
    
        
   });

});
