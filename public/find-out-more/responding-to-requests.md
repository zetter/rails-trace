## Responding to Requests

Rails requires a web server to be running to respond to requests. Out of the box, Rails is setup with [Puma](https://puma.io/).

Puma is responsible for receiving HTTP requests through a web socket, and parsing them into a format that Rails can understand. When you start puma it create a pool of threads that wait for requests. This allows it to respond to multiple requests concurrently.
