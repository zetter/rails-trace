## Controller Action

Here the `show` method in our `PostsController` is called.  Our `show` method is empty since we've already loaded the record we want to show in a `before_action` and are relying on [Rails's default rendering](https://guides.rubyonrails.org/layouts_and_rendering.html#rendering-by-default-convention-over-configuration-in-action) to render the correct view template for us.
