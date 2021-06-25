import { AppPage } from './app.po';
import { browser, logging , by, element} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;
  var subpageTitle = element(by.id('subpageTitle'));
  var registrationLink =  element(by.id('registration-navbar'));
  var bracketsLink =  element(by.id('brackets-navbar'));
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

});
