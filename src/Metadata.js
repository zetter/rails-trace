function lookup(type) {
  return {
   "gem/puma": {name: 'Puma', colour: "#ff0029"},
   "gem/railties": {name: "Railties", colour:"#377eb8"},
   "gem/actionpack": {name: "Action Pack", colour:"#66a61e"},
   "gem/rack": {name: "Rack", colour:"#984ea3"},
   "gem/activesupport": {name: "Active Support", colour:"#00d2d5"},
   "gem/activerecord": {name: "Active Record", colour:"#ff7f00"},
   "gem/concurrent": {name: "Concurrent", colour:"#af8d00"},
   "gem/actionview": {name: "Action View", colour:"#7f80cd"},
   "gem/i18n": {name: "i18n", colour:"#b3e900"},
   "gem/arel": {name: "Arel", colour:"#c42e60"},
   "gem/sqlite3": {name: "sqlite3", colour:"#a65628"},
   "gem/activemodel": {name: "Active Model", colour:"#f781bf"},
   "gem/sprockets": {name: "Sprockets", colour:"#8dd3c7"},
   "application": {name: "Blog Application", colour:"#bebada"},
   "standard_library": {name: "Ruby Standard Libary", colour:"#fb8072"},
   "gem/turbolinks": {name: "Turbolinks", colour:"#80b1d3"}
 }[type] || {name: "Other", colour:"#fdb462"}
}

export default lookup;
