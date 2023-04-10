import HslColor from './color-spaces/HslColor';
import LchColor from './color-spaces/LchColor';
import RgbColor from './color-spaces/RgbColor';
import { goldenPalettes } from './constants/golden-palette';
import GoldenPalette from './GoldenPalette';

const createPrimaryPalette = (hexColor: string): RgbColor[] | null => {
  const hexToRgbColor = toRgbColorOrNull(hexColor);
  if (hexToRgbColor == null) {
    return null;
  }

  const hslColor = hexToRgbColor.toHslColor();

  return createPalette(hslColor);
};

const createComplementaryPalette = (hexColor: string): RgbColor[] | null => {
  const hexToRgbColor = toRgbColorOrNull(hexColor);
  if (hexToRgbColor == null) {
    return null;
  }

  const hslColor = hexToRgbColor.toHslColor().complementaryColor;

  return createPalette(hslColor);
};

const createAnalogousPalette = (hexColor: string): RgbColor[][] | null => {
  const hexToRgbColor = toRgbColorOrNull(hexColor);
  if (hexToRgbColor == null) {
    return null;
  }

  const hslColors = hexToRgbColor.toHslColor().analogousColor;

  return hslColors.map(hslColor => createPalette(hslColor));
};

const createTriadicPalette = (hexColor: string): RgbColor[][] | null => {
  const hexToRgbColor = toRgbColorOrNull(hexColor);
  if (hexToRgbColor == null) {
    return null;
  }

  const hslColors = hexToRgbColor.toHslColor().triadicColor;

  return hslColors.map(hslColor => createPalette(hslColor));
};

const createPalette = (hslColor: HslColor): RgbColor[] => {
  const lchColor = hslColor.toRgbColor().toXyzColor().toLabColor().toLchColor();

  const customPalette =
    getClosestGoldenPalette(lchColor).createCustomPalette(lchColor);

  const customPaletteAsRgb = customPalette.map(color =>
    color.toLabColor().toXyzColor().toRgbColor()
  );

  return customPaletteAsRgb;
};

const getClosestGoldenPalette = (color: LchColor): GoldenPalette => {
  const goldenPaletteMinDeltaList = goldenPalettes.map(goldenPalette => {
    return goldenPalette.minDeltaE(color);
  });
  const goldenPaletteMinDelta = Math.min(...goldenPaletteMinDeltaList);
  const indexOfGoldenPaletteMinDelta = goldenPaletteMinDeltaList.indexOf(
    goldenPaletteMinDelta
  );

  return goldenPalettes[indexOfGoldenPaletteMinDelta];
};

const toRgbColorOrNull = (hexColor: string) => {
  const rgbAsInt = parseInt(hexColor, 16);
  let rgbColor = null;
  if (hexColor.length === 8) {
    const red = ((rgbAsInt >> 24) & 0xff) / 255;
    const green = ((rgbAsInt >> 16) & 0xff) / 255;
    const blue = ((rgbAsInt >> 8) & 0xff) / 255;
    const alpha = (rgbAsInt & 0x000000ff) / 255;
    rgbColor = new RgbColor(red, green, blue, alpha);
  }

  if (hexColor.length === 6) {
    const red = ((rgbAsInt >> 16) & 0xff) / 255;
    const green = ((rgbAsInt >> 8) & 0xff) / 255;
    const blue = (rgbAsInt & 0xff) / 255;
    rgbColor = new RgbColor(red, green, blue);
  }

  return rgbColor;
};

export { RgbColor };
export {
  createPrimaryPalette,
  createComplementaryPalette,
  createAnalogousPalette,
  createTriadicPalette,
};
