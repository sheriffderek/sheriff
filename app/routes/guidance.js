import Route from '@ember/routing/route';

const guidanceContent = {
	pageTitle: `Guidance`,
	pageIntroduction: `Help is nice.`,
};

export default Route.extend({

	model() {
		return guidanceContent;
	},

  setupController(controller, model) {
		controller.set('page', model);
  },

});
