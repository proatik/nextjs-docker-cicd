import { add, subtract } from "@/lib/calculation";

describe("Calculation functions", () => {
  test("add should correctly add two numbers", () => {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, -1)).toBe(-2);
    expect(add(0, 0)).toBe(0);

    expect(add(1, 2)).toBe(4); // this will fail
  });

  test("subtract should correctly subtract two numbers", () => {
    expect(subtract(2, 1)).toBe(1);
    expect(subtract(-1, -1)).toBe(0);
    expect(subtract(0, 0)).toBe(0);
  });
});
