## Our Template

Templates are written in a templating language such as ERB or HAML so can't be called like a normal Ruby method. Instead [the first time a template is used Rails compiles it into a method](https://medium.com/rubyinside/disassembling-rails-template-rendering-2-a99214c6fde8). Here Rails has already compiled this view into a method named after our template in  `ActionView::CompiledTemplates` that we can call.

Rails modifies the application trace so it appears to be executing the corresponding line in your view template rather than the compiled method. This makes debugging errors in your view templates easier.
