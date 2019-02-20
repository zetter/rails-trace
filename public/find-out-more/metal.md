## Metal

If you have used Rails before you may be familiar with creating controllers which subclass `ActionController::Base`. This provides lots of functionality for your controllers including parameter passing and template rendering.

Within Rails, <code>[ActionController::Metal](https://api.rubyonrails.org/classes/ActionController/Metal.html)</code> sits above `ActionController::Base`. Using `Metal` directly [can sometimes bring performance benefits](https://collectiveidea.com/blog/archives/2016/11/29/avoid-parsing-rails-controller-params-with-metal).
