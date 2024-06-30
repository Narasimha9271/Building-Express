-   In **App.js** -> Application object is where our main functions like `get, use` going to reside.
-   The `methods` library just returns all the http methods in lowercase.
-   `this.lazyrouter()` -- which means for the given application we are going to create an `Router`.<br>
    `Router.js`
    > Going to handle the routing logic. Only one per application.
-   The important properties of an router is its stack.
-   our router - which internally has `stack` to keep our `routes` inclined. We need to expose a function, so that user can add specific routes into the `stack`. This function is called as route.
-   For a given `path` (a route actually) we are creating a `Route` and a `Layer`.
-   The layer contains the route. Layer also takes few properties.
-   After creating the route and layer, we are pushing the data into the routers stack. <br>
    `Route.js`
    > Going to hold information about the route and the layer, which has the handles for a given path.
-   **Layer** -> Contains the `path` and necessary function reference to execute when a path matches the given request.
