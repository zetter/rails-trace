## Sending the Response

After we render the view and all of our Rack middlewares have finished running
puma can send the page we've generated back to the client.

After the response is sent, Rails performs some cleanup of caches and releases
any database connections.
