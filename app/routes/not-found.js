import PageRoute from 'sheriff/routes/page-route';

export default PageRoute.extend({

	beforeModel() {
		Ember.run.later( ()=> {
			this.transitionTo('application');
		}, 10000);
	},

});
