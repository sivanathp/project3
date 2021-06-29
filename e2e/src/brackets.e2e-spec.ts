import { AppPage } from './app.po';
import { browser, logging , by, element} from 'protractor';

describe('players brackets App', () => {
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


  var completeround = element(by.id('completeroundbtn'));

   var champion = element(by.id('champion'));





  beforeEach(() => {
    page = new AppPage();
  });
  

  it('should register and play with 4 contestants', function() {
    page.navigateTo();
    browser.get('/');
    registrationLink.click();

contestant0.sendKeys('Ajna');
contestant1.sendKeys('Lewis');
contestant2.sendKeys('Orsega');
contestant3.sendKeys('Alex');
registerButton.click();
    
    expect(registerMessage.getText()).toEqual('Ajna,Lewis,Orsega,Alex');
    

    bracketsLink.click();
      var match1player1 = element(by.id('match1player1')); 
      var match1player2 = element(by.id('match1player2')); 
      var match0player1 = element(by.id('match0player1'));  
      var match0player2 = element(by.id('match0player2'));
      

 
    match1player1.click();
    match0player1.click();
    completeround.click();
    match0player1.click();
    completeround.click();
    
    expect(champion.getText()).toEqual('Winner: Ajna');

    
        
   });

it('should register and play with 2 contestants', function() {
    page.navigateTo();
    browser.get('/');
    registrationLink.click();

contestant0.sendKeys('Ajna');
contestant1.sendKeys('Lewis');
registerButton.click();
    
    expect(registerMessage.getText()).toEqual('Ajna,Lewis');
    

    bracketsLink.click();
      
      var match0player1 = element(by.id('match0player1'));  
      var match0player2 = element(by.id('match0player2'));
      

 
    match0player2.click();
    completeround.click();
    
    expect(champion.getText()).toEqual('Winner: Lewis');

    
        
   });


it('match winner should be selected in 2 contestants', function() {
    page.navigateTo();
    browser.get('/');
    registrationLink.click();

contestant0.sendKeys('Ajna');
contestant1.sendKeys('Lewis');
registerButton.click();
    
    expect(registerMessage.getText()).toEqual('Ajna,Lewis');
    

    bracketsLink.click();
      
      var match0player1 = element(by.id('match0player1'));  
      var roundmessage = element(by.id('bracketmessage'));
      

 
    completeround.click();
    
    expect(roundmessage.getText()).toEqual('Please complete all matches');

    
        
   });


it('should register and play with 8 contestants', function() {
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
contestant7.sendKeys('Kyle');
registerButton.click();
    
    expect(registerMessage.getText()).toEqual('Ajna,Lewis,Orsega,Alex,Li,Yang,Yorder,Kyle');

bracketsLink.click();
      var match1player1 = element(by.id('match1player1')); 
      var match1player2 = element(by.id('match1player2')); 
      var match0player1 = element(by.id('match0player1'));  
      var match0player2 = element(by.id('match0player2'));
      var match2player1 = element(by.id('match2player1')); 
      var match2player2 = element(by.id('match2player2')); 
      var match3player1 = element(by.id('match3player1'));  
      var match3player2 = element(by.id('match3player2'));
      

    match1player1.click();
    match0player1.click();
    match2player2.click();
    match3player2.click();
    completeround.click();
    match1player1.click();
    match0player1.click();
    completeround.click();
    match0player2.click();
    completeround.click();
    
    expect(champion.getText()).toEqual('Winner: Yang');
    
        
   });



});
