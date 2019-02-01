import Route from '@ember/routing/route';

const implementationContent = {
	pageTitle: `Implementation`,
	pageIntroduction: `Because <em>then</em> you have to actually do it.`,
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
    {
      name: "Welcome",
      slug: 'welcome',
    },
  ],
};

export default Route.extend({

	model() {
		return implementationContent;
	},

  setupController(controller, model) {
		controller.set('page', model);
  },

});
