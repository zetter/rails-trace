## Sending the Response

After we render the view and all of our Rack middlewares have finished running, Puma can send the page we've generated back to the client. Here it's using the `fast_write` method to send data to the open socket.

After the response is sent, Rails performs some cleanup of caches and releases any database connections.
