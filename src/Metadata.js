function lookup(type) {
  return {
   "gem/puma": {name: 'Puma', colour: "#ff0029", path: 'https://github.com/puma/puma/blob/v3.12.0/'},
   "gem/railties": {name: "Railties", colour:"#377eb8", path: 'https://github.com/rails/rails/blob/v5.2.2/railties/'},
   "gem/actionpack": {name: "Action Pack", colour:"#66a61e", path: 'https://github.com/rails/rails/blob/v5.2.2/actionpack/'},
   "gem/rack": {name: "Rack", colour:"#984ea3", path: 'https://github.com/rack/rack/blob/2.0.6/'},
   "gem/activesupport": {name: "Active Support", colour:"#00d2d5", path: 'https://github.com/rails/rails/blob/v5.2.2/activesupport/'},
   "gem/activerecord": {name: "Active Record", colour:"#ff7f00", path: 'https://github.com/rails/rails/blob/v5.2.2/activerecord/'},
   "gem/concurrent": {name: "Concurrent", colour:"#af8d00", path: 'https://github.com/ruby-concurrency/concurrent-ruby/blob/v1.1.4/'},
   "gem/actionview": {name: "Action View", colour:"#7f80cd", path: 'https://github.com/rails/rails/blob/v5.2.2/actionview/'},
   "gem/i18n": {name: "i18n", colour:"#b3e900", path: 'https://github.com/ruby-i18n/i18n/blob/v1.5.3/'},
   "gem/arel": {name: "Arel", colour:"#c42e60", path: 'https://github.com/rails/arel/blob/v9.0.0/'},
   "gem/sqlite3": {name: "sqlite3", colour:"#a65628", path: 'https://github.com/sparklemotion/sqlite3-ruby/blob/v1.3.13/'},
   "gem/activemodel": {name: "Active Model", colour:"#f781bf", path: 'https://github.com/rails/rails/blob/v5.2.2/activemodel/'},
   "gem/sprockets": {name: "Sprockets", colour:"#8dd3c7", path: 'https://github.com/rails/sprockets/blob/v3.7.2/'},
   "application": {name: "Blog Application", colour:"#444"},
   "standard_library": {name: "Ruby Standard Libary", colour:"#fb8072", path: 'https://github.com/ruby/ruby/tree/v2_6_0/lib/'},
   "gem/turbolinks": {name: "Turbolinks", colour:"#80b1d3", path: 'https://github.com/turbolinks/turbolinks-rails/blob/v5.2.0/'}
 }[type] || {name: "Other", colour:"#fdb462"}
}

function additionalInfoSlug(klass, method) {
  return {
    'Puma::Server/process_client': 'responding-to-requests',
    'Rack::Sendfile/call': 'rack-middlewares',
    'ActionDispatch::Routing::RouteSet/call': 'routing',
    'PostsController/set_post': 'our-application',
    'SQLite3::Statement/each': 'sqlite-database',
    'ActiveRecord::Core::ClassMethods/find': 'the-model-layer',
    'PostsController/show': 'controller-action',
    'ActionController::Rendering/render': 'rendering',
    'ActionView::CompiledTemplates/_app_views_posts_show_html_erb___319784893945399008_70149931330880': 'our-template',
    'Puma::Server/cork_socket': 'sending-the-response',
    'ActionDispatch::Routing::RouteSet::Dispatcher/dispatch': 'metal'
  }[`${klass}/${method}`]
}

export {lookup as default, additionalInfoSlug};
