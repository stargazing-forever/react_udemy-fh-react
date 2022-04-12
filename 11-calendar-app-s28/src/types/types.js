export const types = {

  /* UI */
  uiOpenModal: '[ui] Open Modal',
  uiCloseModal: '[ui] Close Modal',


  /* EVENTS*/
  // used
  eventSetActive:'[event] Set Active',
  eventAddNew: '[event] Add new',
  eventClearActiveEvent: '[event] Clear active event',
  eventUpdated: '[event] Event Updated',
  eventDeleted: '[event] Event Deleted',
  eventLoaded: '[event] Events loaded',
  eventLogout:'[event] Clean events',
  // unused
  eventStartAddNew: '[event] Start add new',

  /* AUTH */
  // used
  authLogin: '[auth] Login',
  authChekingFinish: '[auth] Finish checking login state',
  authLogout: '[auth] Logout',

  // unused
  authStartLogin: '[auth] Start login',
  authStartRegister: '[auth] Start Register',
  authStartStartTokenRenew: '[auth] Start token renew',
}