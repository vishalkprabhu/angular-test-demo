import { compute } from "./compute";

describe("compute", () => {
  it("it should return 0 if number is negative", () => {
    const result = compute(-1);
    expect(result).toBe(0);
  });
  it("it should incremnt if number is positive", () => {
    const result = compute(1);
    expect(result).toBe(2);
  });
});
