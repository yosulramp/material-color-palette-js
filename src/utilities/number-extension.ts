declare global {
  interface Number {
    correctGamma(): number;
  }
}

Number.prototype.correctGamma = function (this: number): number {
  if (this <= 0.04045) {
    return this / 12.92;
  }
  return Math.pow((this + 0.055) / 1.055, 2.4);
};

declare global {
  interface Number {
    correctGamma(): number;
    toDegrees(): number;
  }
}

Number.prototype.toDegrees = function (this: number): number {
  return (this * 180) / Math.PI;
};

declare global {
  interface Number {
    toRadians(): number;
  }
}

Number.prototype.toRadians = function (this: number): number {
  return (this * Math.PI) / 180.0;
};

declare global {
  interface Number {
    reverseGammaCorrection(): number;
  }
}

Number.prototype.reverseGammaCorrection = function (this: number): number {
  if (this <= 0.0031308) {
    return 12.92 * this;
  }
  return 1.055 * Math.pow(this, 1.0 / 2.4) - 0.055;
};

declare global {
  interface Number {
    coerceAtMost(maximumValue: number): number;
  }
}

Number.prototype.coerceAtMost = function (
  this: number,
  maximumValue: number
): number {
  if (this > maximumValue) {
    return maximumValue;
  }
  return this;
};

declare global {
  interface Number {
    coerceAtLeast(minimumValue: number): number;
  }
}

Number.prototype.coerceAtLeast = function (
  this: number,
  minimumValue: number
): number {
  if (this < minimumValue) return minimumValue;

  return this;
};

declare global {
  interface Number {
    coerceIn(minimumValue?: number, maximumValue?: number): number;
  }
}

Number.prototype.coerceIn = function (
  this: number,
  minimumValue?: number,
  maximumValue?: number
): number {
  if (minimumValue != null && maximumValue != null) {
    if (minimumValue > maximumValue)
      throw new Error(
        `Cannot coerce value to an empty range: maximum ${maximumValue} is less than minimum ${minimumValue}.`
      );
    if (this < minimumValue) return minimumValue;
    if (this > maximumValue) return maximumValue;
  }
  if (minimumValue != null && this < minimumValue) return minimumValue;
  if (maximumValue != null && this > maximumValue) return maximumValue;

  return this;
};

export default Number;
