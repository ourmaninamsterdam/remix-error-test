# Example of compilation errors not being shown in the browser

## Steps

1. `yarn run dev`
2. Go to http://localhost:3000
3. In `routes/index.tsx`, cause a compilation error (i.e. add an unknown HTML tag or something similar).

## Expected result (based on Next.js/CRA)

The browser should reload showing the compilation error instead of your page and you cannot continue until it's rectified.

## Actual result

The browser reloads with the last-known good build of your page. The expected compilation error is only shown in the terminal:

```sh
✘ [ERROR] [plugin browser-route-module] Build failed with 1 error:
app/routes/index.tsx:4:30: ERROR: Expected closing tag "h1" to match opening tag "h200"


Build failed with 1 error:
error: Build failed with 1 error:
app/routes/index.tsx:4:30: ERROR: Expected closing tag "h1" to match opening tag "h200"
💿 Rebuilt in 62ms
GET / 200 - - 37.632 ms
GET / 200 - - 12.597 ms
```

NOTE: Runtime errors *do* get shown in the browser.
