# Logic Arrows API
[![LogicArrows](https://img.shields.io/badge/logic--arrows-steam-blue?logo=data:image/svg%2Bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cGF0aCBmaWxsPSIjNTAwIiBkPSJtOTkgMWMtMC44Ny0wLjg3LTIuMi0xLjMtMy42LTAuODJsLTc3IDI1Yy00LjkgMS43LTYuMyA3LjgtMi43IDExbDE1IDE1LTI5IDI5Yy0yLjcgMi43LTIuNyA3LjEgMCA5LjhsNyA3YzIuNyAyLjcgNy4xIDIuNyA5LjggMGwyOS0yOSAxNSAxNWMzLjcgMy43IDkuOCAyLjIgMTEtMi43bDI1LTc3YzAuNDktMS4zIDAuMDQ1LTIuNy0wLjgyLTMuNnoiIHN0cm9rZS13aWR0aD0iMS43Ii8+PC9zdmc+)](https://store.steampowered.com/app/4210250/Logic_Arrows/)
[![npm](https://img.shields.io/npm/v/logic-arrows-api)](https://www.npmjs.com/package/logic-arrows-api)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
<br/>

<a href="https://store.steampowered.com/app/4210250/Logic_Arrows/"><img src="img/logic-arrows.jpg"
alt="Logic Arrows" width="460"></a>

TypeScript declarations for the script block API of
[Logic Arrows](https://store.steampowered.com/app/4210250/Logic_Arrows/). They give you
autocompletion, inline documentation and type checking when you write the code of a script block
in an external editor.

This is an unofficial package, published with the permission of the author of the game. It is an
early version: everything it describes has been checked in the game, but the API of the game is
still growing, and the declarations may change.

## Install

```
npm install --save-dev logic-arrows-api
```

## Use

The API of a script block is global: `world`, `game`, `always`, `onActive` and the others are
available without an import. Add the package to the `types` of your `tsconfig.json`, or of your
`jsconfig.json` if you write plain JavaScript:

```json
{
  "compilerOptions": {
    "types": ["logic-arrows-api"]
  }
}
```

Or reference it at the top of a single file:

```js
/// <reference types="logic-arrows-api" />
```

After that the editor knows the API:

```js
let count = 0;

onActive(event => {
  count++;
  showText('Activated **' + count + '** times, last at tick ' + event.tick + '.');
});
```

## Reference

The whole API is described in [script-api.d.ts](script-api.d.ts). You can read it right here,
without installing anything.

## License

[MIT](LICENSE)
