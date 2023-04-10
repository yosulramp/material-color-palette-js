import LabColor from './LabColor';
import '../utilities/number-extension';

class LchColor {
  constructor(
    private lightness: number,
    private chroma: number,
    private hue: number,
    private alpha: number = 1.0
  ) {}

  getLightness() {
    return this.lightness;
  }

  getChroma() {
    return this.chroma;
  }

  deltaE(other: LchColor): number {
    const { lightness, chroma } = this;

    const deltaLightness = lightness - other.lightness;
    const meanLightness = (lightness + other.lightness) / 2.0;
    const meanChroma = (chroma + other.chroma) / 2.0;
    const aFactor =
      1 -
      Math.sqrt(
        Math.pow(meanChroma, 7) / (Math.pow(meanChroma, 7) + Math.pow(25.0, 7))
      );
    const thisPrime = (() => {
      const { lightness, a, b, alpha } = Object.assign(this.toLabColor());
      const labColor = new LabColor(
        lightness,
        a + (a / 2.0) * aFactor,
        b,
        alpha
      );
      return labColor.toLchColor();
    })();
    const otherPrime = (() => {
      const { lightness, a, b, alpha } = Object.assign(other.toLabColor());
      const labColor = new LabColor(
        lightness,
        a + (a / 2.0) * aFactor,
        b,
        alpha
      );
      return labColor.toLchColor();
    })();
    const deltaChromaPrime = thisPrime.chroma - otherPrime.chroma;
    const meanChromaPrime = (thisPrime.chroma + otherPrime.chroma) / 2.0;
    const deltaHuePrime = thisPrime.hueDelta(otherPrime);
    const deltaHPrime =
      2.0 *
      Math.sqrt(thisPrime.chroma * otherPrime.chroma) *
      Math.sin((deltaHuePrime / 2.0).toRadians());
    const meanHuePrime = thisPrime.meanHue(otherPrime);
    const t =
      1.0 -
      0.17 * Math.cos((meanHuePrime - 30.0).toRadians()) +
      0.24 * Math.cos((2.0 * meanHuePrime).toRadians()) +
      0.32 * Math.cos((3.0 * meanHuePrime + 6.0).toRadians()) -
      0.2 * Math.cos((4.0 * meanHuePrime - 63.0).toRadians());
    const sL =
      1.0 +
      (0.015 * Math.pow(meanLightness - 50.0, 2)) /
        Math.sqrt(20.0 + Math.pow(meanLightness - 50.0, 2));

    const sC = 1.0 + 0.045 * meanChromaPrime;
    const sH = 1.0 + 0.015 * meanChromaPrime * t;
    const rT =
      -2.0 *
      Math.sqrt(
        Math.pow(meanChromaPrime, 7) /
          (Math.pow(meanChromaPrime, 7) + Math.pow(25, 7))
      ) *
      Math.sin(
        (
          60.0 * Math.exp(-Math.pow((meanHuePrime - 275.0) / 25.0, 2))
        ).toRadians()
      );
    return Math.sqrt(
      Math.pow(deltaLightness / sL, 2) +
        Math.pow(deltaChromaPrime / sC, 2) +
        Math.pow(deltaHPrime / sH, 2) +
        rT * (deltaChromaPrime / sC) * (deltaHPrime / sH)
    );
  }

  toLabColor(): LabColor {
    const { lightness, chroma, hue, alpha } = this;

    const a = chroma * Math.cos(hue.toRadians());
    const b = chroma * Math.sin(hue.toRadians());
    return new LabColor(lightness, a, b, alpha);
  }

  minus(other: LchColor) {
    const newLightness = this.lightness - other.lightness;
    const newChroma = this.chroma - other.chroma;
    const newHue = this.hue - other.hue;
    return new LchColor(newLightness, newChroma, newHue);
  }

  adjustLightness(block: (lightness: number) => number) {
    const { lightness, chroma, hue, alpha } = this;

    return new LchColor(block(lightness), chroma, hue, alpha);
  }

  adjustChroma(block: (chroma: number) => number) {
    const { lightness, chroma, hue, alpha } = this;

    return new LchColor(lightness, block(chroma), hue, alpha);
  }

  adjustHue(block: (hue: number) => number) {
    const { lightness, chroma, hue, alpha } = this;

    return new LchColor(lightness, chroma, block(hue), alpha);
  }

  private hueDelta(other: LchColor) {
    const { hue } = this;

    if (hue - other.hue >= -180.0 && hue - other.hue <= 180.0) {
      return hue - other.hue;
    }
    if (hue <= other.hue) {
      return hue - other.hue + 360.0;
    }
    return hue - other.hue - 360.0;
  }

  private meanHue(other: LchColor) {
    const { hue } = this;

    if (hue - other.hue >= -180.0 && hue - other.hue <= 180.0) {
      return (other.hue + hue) / 2.0;
    }
    if (other.hue + hue < 360.0) {
      return (other.hue + hue + 360.0) / 2.0;
    }
    return (other.hue + hue - 360.0) / 2.0;
  }
}

export default LchColor;
