import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // invisible (and confusing) application/index route
  this.route('welcome');
  this.route('contact');
  this.route('guidance');
  this.route('design');
  this.route('implementation');
  this.route('not-found', {path: '/*PATH'});
});

export default Router;
