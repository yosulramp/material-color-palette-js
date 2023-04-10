import RgbColor from './RgbColor';

class HslColor {
  constructor(
    private hue: number,
    private saturation: number,
    private lightness: number,
    private alpha: number = 1.0
  ) {}

  get complementaryColor() {
    return this.harmonize(180);
  }

  get analogousColor() {
    return [this.harmonize(330), this.harmonize(30)];
  }

  get triadicColor() {
    return [this.harmonize(60), this.harmonize(120)];
  }

  toRgbColor(): RgbColor {
    const { hue, saturation, lightness, alpha } = this;

    const chroma = (1 - Math.abs(2.0 * lightness - 1.0)) * saturation;
    const huePrime = hue / 60.0;
    const x = chroma * (1 - Math.abs((huePrime % 2) - 1));
    const m = lightness - chroma / 2.0;

    if (huePrime < 1.0) {
      return new RgbColor(chroma + m, x + m, m, alpha);
    }
    if (huePrime < 2.0) {
      return new RgbColor(x + m, chroma + m, m, alpha);
    }
    if (huePrime < 3.0) {
      return new RgbColor(m, chroma + m, x + m, alpha);
    }
    if (huePrime < 4.0) {
      return new RgbColor(m, x + m, chroma + m, alpha);
    }
    if (huePrime < 5.0) {
      return new RgbColor(x + m, m, chroma + m, alpha);
    }
    return new RgbColor(chroma + m, m, x + m, alpha);
  }

  // ref. https://dev.to/benjaminadk/make-color-math-great-again--45of
  private harmonize(angle: number): HslColor {
    const { hue, saturation, lightness, alpha } = this;

    return new HslColor((hue + angle) % 360, saturation, lightness, alpha);
  }
}

export default HslColor;
