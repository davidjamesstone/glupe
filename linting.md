# Linting

[standard.js](http://standardjs.com/) is used to lint both the server-side and client-side javascript code.

One Style to Rule Them All. No decisions to make. No .eslintrc, .jshintrc, or .jscsrc files to manage. It just works.


It's defined as a build task and can be run using `npm run lint`.

Some of the highlights of standard.js are:

-   **2 spaces** – for indentation
-   **Single quotes for strings** – except to avoid escaping
-   **No unused variables** – this one catches _tons_ of bugs!
-   **No semicolons** – [It's](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding) [fine.](http://inimino.org/~inimino/blog/javascript_semicolons) [Really!](https://www.youtube.com/watch?v=gsfbh17Ax9I)
-   **Space after keywords** `if (condition) { ... }`
-   **Space after function name** `function name (arg) { ... }`
-   Always use `===` instead of `==` – but `obj == null` is allowed to check `null || undefined`.
-   Always handle the node.js `err` function parameter
-   Always prefix browser globals with `window` – except `document` and `navigator` are okay
    -   Prevents accidental use of poorly-named browser globals like `open`, `length`, `event`, and `name`.
