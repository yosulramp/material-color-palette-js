# Material Palette Generator

This repository code porting for [Hammwerk/material-color-palette](https://github.com/Hammwerk/material-color-palette) as Javascript(by Typescript).

This library have same result of [original material palette generator](https://m2.material.io/design/color/the-color-system.html#tools-for-picking-colors).

## Usage

Install package with `npm install material-color-palette-js`.

```typescript
import {
  createAnalogousPalette,
  createComplementaryPalette,
  createPrimaryPalette,
  createTriadicPalette,
} from 'material-color-palette-js';

const customPrimaryPalette = createPrimaryPalette('F44336');
const customComplementaryPalette = createComplementaryPalette('F44336');
const customAnalogousPalette = createAnalogousPalette('F44336');
const customTriadicPalette = createTriadicPalette('F44336');
```
