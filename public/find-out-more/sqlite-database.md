## SQLite Database

[SQLite](https://www.sqlite.org/index.html) is The default database for new Rails applications. Rails uses the [SQLite3 Ruby Interface gem](https://github.com/sparklemotion/sqlite3-ruby) to be able to read and write to SQLite databases.

`SQLite3::Statement#each` is the last Ruby method called before the SQL query is run against the database. They call C-code in the SQLite3 Ruby gem and in the SQLite engine to run query (not shown here).
