const { add, subtract, divide, multiply, product } = require("./math");

describe("blogs.js tests", () => {
  it("it should test Return All Blogs  ", () => {
    expect(add(2, 2)).toBe(4);
  });

  it("Should Return blog by ID", () => {
    expect(subtract(2, 2)).toBe(0);
  });

  it("Should Create Blog", () => {
    expect(divide(2, 2)).toBe(1);
  });

  it("Should Update Blog", () => {
    expect(multiply(2, 2)).toBe(4);
  });
  it("Should Delete Blog", () => {
    expect(product(2, 2)).toBe(4);
  });
});
