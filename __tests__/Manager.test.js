const Manager = require("../lib/Manager");

test("Constructor should set office number", () => {
  const testOffice = 1212;
  const lil = new Manager("Lilymac", 5, "lilymac@hibi.hibi", testOffice;
  expect(lil.officeNumber).toBe(testOffice);
});

test("getRole() should return \"Manager\"", () => {
  const testOffice = "Manager";
  const lil = new Manager("Lilymac", 5, "lilymac@test.com", 1212);
  expect(lil.getRole()).toBe(testOffice);
});

test("getOffice() should return office number", () => {
  const testOffice = 1212;
  const lil = new Manager("Lilymac", 5, "lilymac@test.com", testOffice);
  expect(lil.getOfficeNumber()).toBe(testOffice);
});