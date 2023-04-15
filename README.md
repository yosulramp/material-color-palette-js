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
const colors = customPrimaryPalette?.map(rgbColor => rgbColor.rgbHex);
// [ "FFEBEE", "FFCDD2", "EF9A9A", "E57373", "EF5350", "F44336", "E53935", "D32F2F", "C62828", "B71B1C" ]

const customComplementaryPalette = createComplementaryPalette('F44336');
const complementaryPaletteAsHex = this.complementaryPalette?.map(
  rgbColor => rgbColor.rgbHex
);
// [ "FCE7CC", "E2C4A9", "C2A082", "A07D5A", "88623D", "6F491F", "65401A", "563412", "49270A", "3B1A00" ]

const customAnalogousPalette = createAnalogousPalette('F44336');
const analogousPaletteAsHex = this.createAnalogousPalette?.map(rgbColors =>
  rgbColors.map(rgbColor => rgbColor.rgbHex)
);
// [
//     [ "DFF6F7", "B0E7EB", "7FD8DE", "4EC7D1", "2EBCC8", "16B1C1", "16A1AF", "158D96", "14797F", "125656" ],
//     [ "E5E7F0", "BFC2DB", "969AC3", "6E74AB", "51579B", "353C8B", "2F3582", "272C77", "1F226B", "121256" ]
// ]

const customTriadicPalette = createTriadicPalette('F44336');
const triadicPaletteAsHex = this.createTriadicPalette?.map(rgbColors =>
  rgbColors.map(rgbColor => rgbColor.rgbHex)
);
// [
//     [ "DFF6F7", "B0E7EB", "7FD8DE", "4EC7D1", "2EBCC8", "16B1C1", "16A1AF", "158D96", "14797F", "125656" ],
//     [ "E5E7F0", "BFC2DB", "969AC3", "6E74AB", "51579B", "353C8B", "2F3582", "272C77", "1F226B", "121256" ]
// ]
```
