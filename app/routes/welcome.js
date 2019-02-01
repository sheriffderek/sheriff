import PageRoute from 'sheriff/routes/page-route';

const welcomeContent = {
	data: {
		attributes: {
			heading: 'Welcome',
			links: [
				{
					name: "Guidance",
					slug: 'guidance',
				},
				{
					name: "Design",
					slug: 'design',
				},
				{
					name: "Implementation",
					slug: 'implementation',
				},
			],
		}
	},
};

export default PageRoute.extend({

	model() {
		return welcomeContent.data.attributes;
	},

  setupController(controller, model) {
		controller.set('page', model);
  },

});
