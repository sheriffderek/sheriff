import PageRoute from 'sheriff/routes/page-route';
import { later } from '@ember/runloop';

export default PageRoute.extend({

	beforeModel() {
		later( ()=> {
			this.transitionTo('application');
		}, 10000);
	},

});
