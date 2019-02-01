
# Current plan...

THE GOAL: Have all my writing live somewhere respectable - and practice custom liquid fire transitions.

1. So... I'll need to outline some models first. 'article' I suppose.
2. But I'm not really using a server... and so, an ember-data model doesn't make sense yet.
3. I'll mock it up in a JSON object for now... --- see design.js route

## notes on linting:

Ember's linting is already angry. I care... but I have some opinions -

sheriff/templates/design/article.hbs

6:6  error  Usage of triple curly brackets is unsafe  no-triple-curlies
16:10  error  Usage of triple curly brackets is unsafe  no-triple-curlies
18:9  error  Usage of triple curly brackets is unsafe  no-triple-curlies

^ Yes. I get it. But this is just a first phase. There is no real data - and no one is going to send data here.



11:19  error  you must use double quotes in templates  quotes
13:39  error  you must use double quotes in templates  quotes
26:12  error  you must use double quotes in templates  quotes
28:16  error  you must use double quotes in templates  quotes

^ This is a personal project - and _personally_ - I think hitting 2 keys - instead of one is rediculous. I like to use single quote marks for things that have meaning / like a property name - and double quotes for strings. This tells a story that is useful.


13:8  error  Self-closing a void element is redundant  self-closing-void-elements

^ I think self closing tags tell a helpful story. Is there any real reason to remove them?

BUT... if working on a team / I'll conform to whatever works best for that team.
