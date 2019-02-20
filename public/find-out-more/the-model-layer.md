## The Model Layer

[ActiveRecord](https://guides.rubyonrails.org/active_record_basics.html) is Rails's model layer. It models records in your application that you want to persist to a database.

You can see methods being called here to help manage database connections and to generate the SQL query to needed to load our `Post` record from the database. Once the query is run Rails creates a new `Post` object with fields from the database.
