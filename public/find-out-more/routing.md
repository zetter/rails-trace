## Routing

`ActionDispatch::Routing::RouteSet` is the last middleware to be called. It
looks up what route the request refers to using
`ActionDispatch::Journey::Router`. Later this route will be used to call the right
controller in our application.

When a Rails application starts the
routes defined in `config/routes.rb` [are processed to make it easier to lookup
which route a request should use](https://www.youtube.com/watch?v=5hKkkQMOj3c).
