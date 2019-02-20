## Rack Middlewares

[Rack](https://rack.github.io/) is an interface that says how web servers can talk to web applications like Rails. It also allows Rack Middlewares to be used to perform actions based on the request such as caching, logging or modifying HTTP headers.

An example of one of the many middlewares that Rails uses is [Rack::Sendfile](https://www.rubydoc.info/gems/rack/Rack/Sendfile). This helps serve files from disk efficiently by making use of the `X-Sendfile` header.

You can [read more about Rack](https://www.engineyard.com/blog/understanding-rack-apps-and-middleware) and learn [how Rails uses it](https://guides.rubyonrails.org/rails_on_rack.html).
