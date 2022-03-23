# Turbo Test

An example of how to allow a persistent media player element between page loads.

To set up run `npm install && npm run build`

By default, Turbo will persist anything outside of the `#app` element. You could, for example, change the id of the target element in `src/index.js` by updating the references to a different selector.

If you want to change the location of the source and output files, make sure that's reflected in the `package.json` build script.
