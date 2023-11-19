import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-proba-4-город-l');
  this.route('i-i-s-proba-4-город-e',
  { path: 'i-i-s-proba-4-город-e/:id' });
  this.route('i-i-s-proba-4-город-e.new',
  { path: 'i-i-s-proba-4-город-e/new' });
  this.route('i-i-s-proba-4-улицы-l');
  this.route('i-i-s-proba-4-улицы-e',
  { path: 'i-i-s-proba-4-улицы-e/:id' });
  this.route('i-i-s-proba-4-улицы-e.new',
  { path: 'i-i-s-proba-4-улицы-e/new' });
});

export default Router;
