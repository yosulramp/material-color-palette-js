import LabColor from './LabColor';
import RgbColor from './RgbColor';

class XyzColor {
  constructor(
    private x: number,
    private y: number,
    private z: number,
    private alpha: number = 1
  ) {}

  toLabColor(): LabColor {
    const { x, y, z, alpha, f } = this;

    const lightness = 116.0 * f(y) - 16;
    const a = 500.0 * (f(x / 0.95047) - f(y));
    const b = 200.0 * (f(y) - f(z / 1.08883));
    return new LabColor(lightness, a, b, alpha);
  }

  toRgbColor(): RgbColor {
    const { x, y, z, alpha } = this;

    const red = (3.2404542 * x + -1.5371385 * y + -0.4985314 * z)
      .reverseGammaCorrection()
      .coerceIn(0.0, 1.0);
    const green = (-0.969266 * x + 1.8760108 * y + 0.041556 * z)
      .reverseGammaCorrection()
      .coerceIn(0.0, 1.0);
    const blue = (0.0556434 * x + -0.2040259 * y + 1.0572252 * z)
      .reverseGammaCorrection()
      .coerceIn(0.0, 1.0);

    return new RgbColor(red, green, blue, alpha);
  }

  private f(value: number): number {
    const delta = 6.0 / 29.0;

    if (value > Math.pow(delta, 3)) {
      return Math.pow(value, 1.0 / 3.0);
    }
    return value / (3.0 * Math.pow(delta, 2)) + 4.0 / 29.0;
  }
}

export default XyzColor;
