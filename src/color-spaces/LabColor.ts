import LchColor from './LchColor';
import '../utilities/number-extension';
import XyzColor from './XyzColor';

class LabColor {
  constructor(
    private lightness: number,
    private a: number,
    private b: number,
    private alpha: number = 1.0
  ) {}

  toLchColor(): LchColor {
    const { lightness, a, b, alpha } = this;

    const chroma = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    const hue = () => {
      if (1e-4 > Math.abs(b) && 1e-4 > Math.abs(a)) {
        return 0;
      }
      return (Math.atan2(b, a).toDegrees() + 360.0) % 360.0;
    };
    return new LchColor(lightness, chroma, hue(), alpha);
  }

  toXyzColor() {
    const { lightness, a, b, alpha, fInv } = this;

    const x = 0.95047 * fInv((lightness + 16.0) / 116.0 + a / 500.0);
    const y = 1 * fInv((lightness + 16.0) / 116.0);
    const z = 1.08883 * fInv((lightness + 16.0) / 116.0 - b / 200.0);

    return new XyzColor(x, y, z, alpha);
  }

  private fInv(value: number): number {
    const delta = 6.0 / 29.0;

    if (value > delta) {
      return Math.pow(value, 3);
    }
    return 3.0 * Math.pow(delta, 2) * (value - 4.0 / 29.0);
  }
}

export default LabColor;
