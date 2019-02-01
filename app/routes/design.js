import Route from '@ember/routing/route';

const designContent = {
	pageTitle: `Design`,
	pageIntroduction: `It's going to involve <em>thinking...</em> `,
	articles: [
		{
			title: `Design? What is it?`,
			slug: `design-what-is-it`,
			subheading: `Well... it's everything and nothing - until it's something...`,
			introduction: `A compelling (short) introduction. This can also be used for 'description' in search results. It's a teaser - to help someone decide if they want to keep reading`,
			thoughts: [
				{
					image: `https://placehold.it/1600x900`,
					heading: `Section heading 1`,
					description: `I'd like to have a CMS that allows for repeatable content. I like the idea of having an introduction - and then a bunch of 'sections' walking through whatever topic is at hand. There can be a number of optional content 'things' and then I'll loop through them to build out the article.`,
				},
				{
					image: `https://placehold.it/1600x900`,
					heading: `Section heading 2`,
					description: `An explaination of this section. It must have some purpose... or it wouldn't be here... right?`,
				},
				{
					image: `https://placehold.it/1600x900`,
					heading: `Section heading 3`,
					description: `An explaination of this section. It must have some purpose... or it wouldn't be here... right?`,
				},
			],
			conclusion: `A nice wrap up of what I was writing about.`,
			references: [
				{
					name: `Read more in 'Guidance'`,
					route: `guidance`,
				},
			],
		},
		{
			title: `The layout question no visual designer wants to answer`,
			slug: `the-layout-question-no-visual-designer-wants-to-answer`,
			subheading: `Well... <em>just one of the questions they don't want to address...</em>`,
			introduction: `A compelling (short) introduction. This can also be used for 'description' in search results. It's a teaser - to help someone decide if they want to keep reading`,
			thoughts: [
				{
					image: `https://placehold.it/1600x900`,
					heading: `Section heading 1`,
					description: `An explaination of this section. <span class="link">Outbound link</span><sup>[1]</sup>`,
				},
				{
					image: `https://placehold.it/1600x900`,
					heading: `Section heading 2`,
					description: `An explaination of this section. It must have some purpose... or it wouldn't be here... right?`,
				},
				{
					image: `https://placehold.it/1600x900`,
					heading: `Section heading 3`,
					description: `An explaination of this section. It must have some purpose... or it wouldn't be here... right?`,
				},
			],
			conclusion: `A nice wrap up of what I was writing about.`,
			references: [
				{
					name: `Outbound link`,
					url: `https:placehold.it`,
				},
				{
					name: `See how it's implemented`,
					route: `implementation`,
				},
			],
		},
	],
};

export default Route.extend({

	model() {
		return designContent;
	},

  setupController(controller, model) {
		controller.set('design', model);
  },

});
