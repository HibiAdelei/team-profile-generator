const Intern = require("../lib/Intern");

test("constructor should set school", () => {
  const testSchool = "UCSD";
  const addie = new Intern("Adelei", 5, "adelame@hibi.hibi", testSchool);
  expect(addie.school).toBe(testSchool);
});

test("getRole() should return \"Intern\"", () => {
  const testSchool = "Intern";
  const addie = new Intern("Adelei", 5, "adelame@hibi.hibi", "UCSD");
  expect(addie.getRole()).toBe(testSchool);
});

test("getSchool should return school", () => {
  const testSchool = "UCSD";
  const addie = new Intern("Adelei", 5, "adelame@hibi.hibi", testSchool);
  expect(addie.getSchool()).toBe(testSchool);
});