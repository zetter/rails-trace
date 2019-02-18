## Our Application

This is the first point in dealing with the request that we run our application
code.

The request we've made is to show a single blog post. The `set_post` method loads the record from the database. It's defined as a `before_action` so it runs before the controller
action and the view.
