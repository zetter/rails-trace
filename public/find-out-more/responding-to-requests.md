## Responding to Requests

Out of the box, Rails runs with the [Puma web server](https://puma.io/). Puma is responsible for receiving HTTP requests through a web socket and parsing them into a format that Rails can understand.

The first methods we see are called from Puma's <code>[Server#run](https://github.com/puma/puma/blob/v3.12.0/lib/puma/server.rb#L286)</code>. When Puma this method creates a pool of threads that wait for requests. The different threads allow Puma to respond to requests concurrently.
