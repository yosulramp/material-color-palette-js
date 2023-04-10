import HslColor from './HslColor';
import LchColor from './LchColor';
import XyzColor from './XyzColor';

class RgbColor {
  constructor(
    private red: number,
    private green: number,
    private blue: number,
    private alpha: number = 1.0
  ) {}

  get rgbHex(): string {
    const { red, green, blue } = this;
    const redHex = Math.round(red * 0xff)
      .toString(16)
      .padStart(2, '0');
    const greenHex = Math.round(green * 0xff)
      .toString(16)
      .padStart(2, '0');
    const blueHex = Math.round(blue * 0xff)
      .toString(16)
      .padStart(2, '0');

    return `${redHex}${greenHex}${blueHex}`.toUpperCase();
  }

  toLchColor(): LchColor {
    return this.toHslColor()
      .toRgbColor()
      .toXyzColor()
      .toLabColor()
      .toLchColor();
  }

  toHslColor(): HslColor {
    const max = Math.max(this.red, this.green, this.blue);
    const min = Math.min(this.red, this.green, this.blue);
    const delta = max - min;

    const hue = () => {
      const calculator = (value: number) =>
        Math.round((60.0 * value + 360.0) % 360.0);
      if (delta == 0) {
        return 0;
      }
      if (max == this.red) {
        return calculator((this.green - this.blue) / delta);
      }
      if (max == this.green) {
        return calculator((this.blue - this.red) / delta + 2);
      }
      return calculator((this.red - this.green) / delta + 4);
    };

    const saturation = () => {
      if (max == 0.0 || min == 1.0) return 0.0;
      return delta / (1 - Math.abs(max + min - 1));
    };

    const lightness = (max + min) / 2.0;

    return new HslColor(hue(), saturation(), lightness, this.alpha);
  }

  toXyzColor(): XyzColor {
    const { red, green, blue, alpha } = this;
    const x =
      0.4124564 * red.correctGamma() +
      0.3575761 * green.correctGamma() +
      0.1804375 * blue.correctGamma();
    const y =
      0.2126729 * red.correctGamma() +
      0.7151522 * green.correctGamma() +
      0.072175 * blue.correctGamma();
    const z =
      0.0193339 * red.correctGamma() +
      0.119192 * green.correctGamma() +
      0.9503041 * blue.correctGamma();
    return new XyzColor(x, y, z, alpha);
  }
}

export default RgbColor;
