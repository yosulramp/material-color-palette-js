import "./number-extension";

describe("coerceAtMost, When input value ", () => {
  const maximumValue = 1.5;

  it("over maximum value, result should be maximum value:", () => {
    const inputValue = maximumValue + 0.1;
    const result = inputValue.coerceAtMost(maximumValue);

    expect(result).toBe(maximumValue);
  });

  it("not over maximum value, result should be maximum value:", () => {
    const inputValue = maximumValue - 0.1;
    const result = inputValue.coerceAtMost(maximumValue);

    expect(result).toBe(inputValue);
  });
});

describe("coerceAtLeast, When input value ", () => {
  const minimumValue = 1.5;

  it("under minimum value, result should be minimum value:", () => {
    const inputValue = minimumValue - 0.1;
    const result = inputValue.coerceAtLeast(minimumValue);

    expect(result).toBe(minimumValue);
  });

  it("not under minimum value, result should be input value:", () => {
    const inputValue = minimumValue + 0.1;
    const result = inputValue.coerceAtLeast(minimumValue);

    expect(result).toBe(inputValue);
  });
});

describe("coerceIn, ", () => {
  const inputValue = 10;

  it("When arguments hasn't, result should be target value.", () => {
    const result = inputValue.coerceIn();

    expect(result).toBe(inputValue);
  });

  it("When minimum value greater than maximum value, throw error", () => {
    const minimumValue = inputValue + 0.1;
    const maximumValue = inputValue - 0.1;
    const result = () => inputValue.coerceIn(minimumValue, maximumValue);

    expect(result).toThrowError();
  });

  it("When target value less than minimum value, result should be minimum value.", () => {
    const minimumValue = inputValue + 0.1;
    const maximumValue = inputValue + 0.2;
    const result = inputValue.coerceIn(minimumValue, maximumValue);

    expect(result).toBe(minimumValue);
  });

  it("When target value greater than maximum value, result should be maximum value.", () => {
    const minimumValue = inputValue - 0.2;
    const maximumValue = inputValue - 0.1;
    const result = inputValue.coerceIn(minimumValue, maximumValue);

    expect(result).toBe(maximumValue);
  });

  it("When arguments has only minimum value and target value less than minimum value, result should be minimum value.", () => {
    const minimumValue = inputValue + 0.1;
    const result = inputValue.coerceIn(minimumValue);

    expect(result).toBe(minimumValue);
  });

  it("When arguments has only maximum value and target value greater than maximum value, result should be maximum value.", () => {
    const maximumValue = inputValue - 0.1;
    const result = inputValue.coerceIn(undefined, maximumValue);

    expect(result).toBe(maximumValue);
  });
});
