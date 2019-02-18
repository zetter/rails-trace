## Rack Middlewares

[Rack](https://rack.github.io/) is an interface that says how web servers can talk to Rails applications. It also allows Rack Middlewares to be created to perform actions based on the request such as caching, logging or adding HTTP headers.

[Rack::Sendfile](https://www.rubydoc.info/gems/rack/Rack/Sendfile) is an example of a middleware that Rails uses to help serve files from disk by making use of the `X-Sendfile` header.

You can [read more about Rack](https://www.engineyard.com/blog/understanding-rack-apps-and-middleware) and learn [how Rails uses it](https://guides.rubyonrails.org/rails_on_rack.html).
