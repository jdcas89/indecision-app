
yarn install

babel src/app.js --out-file=public/scripts/app.js --presets=env,react
babel src/playground/es6-arrow-function2.js --out-file=public/scripts/app.js --presets=env,react --watch


babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch