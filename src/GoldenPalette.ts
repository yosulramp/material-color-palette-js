import LchColor from './color-spaces/LchColor';
import './utilities/number-extension';

class GoldenPalette {
  constructor(private colors: LchColor[]) {}

  minDeltaE(color: LchColor): number {
    const colorDeltaList = this.colors.map(classColor =>
      color.deltaE(classColor)
    );
    return Math.min(...colorDeltaList);
  }

  getClosestColor(color: LchColor): LchColor {
    const colorDeltaList = this.colors.map(classColor =>
      color.deltaE(classColor)
    );
    const minDeltaOfColors = Math.min(...colorDeltaList);
    const indexOfColorDeltaList = colorDeltaList.indexOf(minDeltaOfColors);
    return this.colors[indexOfColorDeltaList];
  }

  createCustomPalette(customBaseColor: LchColor): LchColor[] {
    let maxLightness = 100;

    const closestGoldenPaletteColor = this.getClosestColor(customBaseColor);
    const closestColorIndex = this.colors.indexOf(closestGoldenPaletteColor);

    return this.colors.map((color, index) => {
      if (color === closestGoldenPaletteColor) {
        return customBaseColor;
      }

      const adjustedColor = color
        .minus(
          closestGoldenPaletteColor
            .minus(customBaseColor)
            .adjustLightness(
              (lightness: number) =>
                lightness *
                (this.lightnessFactors[index] /
                  this.lightnessFactors[closestColorIndex])
            )
            .adjustChroma(
              (chroma: number) =>
                chroma *
                (this.hasMainColorLowChroma()
                  ? 1.0
                  : (
                      this.chromaFactors[index] /
                      this.chromaFactors[closestColorIndex]
                    ).coerceAtMost(1.25))
            )
        )
        .adjustLightness((lightness: number) =>
          lightness.coerceIn(0, maxLightness)
        )
        .adjustChroma((chroma: number) => chroma.coerceAtLeast(0.0))
        .adjustHue((hue: number) => (hue + 360) % 360);

      maxLightness = (adjustedColor.getLightness() - 1.7).coerceAtLeast(0.0);

      return adjustedColor;
    });
  }

  hasMainColorLowChroma() {
    return this.colors[5].getChroma() < 30;
  }

  private lightnessFactors = [
    2.048875457, 5.124792061, 8.751659557, 12.07628774, 13.91449542,
    15.92738893, 15.46585818, 15.09779227, 15.13738673, 15.09818372,
  ];

  private chromaFactors = [
    1.762442714, 4.213532634, 7.395827458, 11.07174158, 13.89634504,
    16.37591477, 16.27071136, 16.54160806, 17.35916727, 19.88410864,
  ];
}

export default GoldenPalette;
