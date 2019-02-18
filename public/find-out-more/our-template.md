## Our Template

Templates are written in a templating language such as ERB or HAML so can't be called like a normal Ruby method. Instead [the first time a template is used Rails compiles it into a method](https://medium.com/rubyinside/disassembling-rails-template-rendering-2-a99214c6fde8). In this case Rails has made a new method in  `ActionView::CompiledTemplates` named after our template.

Rails modifies the application trace so it appears to be executing the corresponding line in your view template rather than the compile method which makes debugging errors in your view templates easier.
