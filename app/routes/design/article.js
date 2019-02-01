import Route from '@ember/routing/route';

export default Route.extend({

	model(params) {
		const design = this.modelFor('design');
		const thisArticle = design.articles.find( (article)=> {
			return article.slug === params.slug;
		});

		return thisArticle;
	},

	setupController(controller, model) {
		controller.set('article', model);
	},

});
