## Metal

If you have used Rails before you may be familiar with `ActionController::Base` which your controllers will inherit from. `ActionController::Base` provides lots of functionality for you including parameter passing and template rendering.

[ActionController::Metal](https://api.rubyonrails.org/classes/ActionController/Metal.html) sits above `ActionController::Base`. Using `Metal` directly [can sometimes bring performance benefits](https://collectiveidea.com/blog/archives/2016/11/29/avoid-parsing-rails-controller-params-with-metal).
