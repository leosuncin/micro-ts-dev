# micro-ts-dev

This is a wrapper around [`micro-dev`](https://github.com/zeit/micro-dev) that adds support for TypeScript.

## Usage
First, install `micro-ts-dev`:
```bash
npm install --save-dev micro-ts-dev
```

Next, add a new `script` property inside `package.json`:
```json
"scripts": {
  "dev": "micro-ts-dev"
}
```

Finally, start the development server:
```bash
npm run dev
```

## TypeScript Support

TypeScript support should work out of the box, but you can also create a `tsconfig.json` to specify configuration.

## Babel Support

`micro-ts-dev` uses `babel` to compile TypeScript. By default it uses the `env` and `typescript` presets.

You can create a `.babelrc` file in your project to override the `babel` configuration. `micro-ts-dev` will perform a shallow merge of your custom configuration with the defaults.
