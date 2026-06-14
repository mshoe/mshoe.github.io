#!/usr/bin/env python3

import errno
import functools
import http.server
import os


site_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), "_site")
host = "127.0.0.1"
port = int(os.environ.get("PORT", "4000"))
handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=site_dir)

while True:
    try:
        server = http.server.ThreadingHTTPServer((host, port), handler)
        break
    except OSError as error:
        if error.errno != errno.EADDRINUSE:
            raise
        port += 1

print(f"Serving {site_dir} at http://{host}:{port}/blog/", flush=True)

try:
    server.serve_forever()
except KeyboardInterrupt:
    pass
finally:
    server.server_close()
