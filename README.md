
yarn install

babel src/app.js --out-file=public/scripts/app.js --presets=env,react
babel src/playground/es6-classes-1.js --out-file=public/scripts/app.js --presets=env,react --watch


babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch