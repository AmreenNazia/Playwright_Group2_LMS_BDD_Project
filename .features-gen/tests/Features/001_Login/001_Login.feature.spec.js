/** Generated from: tests/Features/001_Login/001_Login.feature */
import { test } from "playwright-bdd";

test.describe.only("Login Page Verification", () => {

  test.beforeEach(async ({ Given }) => {
    await Given("Admin launch the browser");
  });

  test.describe("Validate login with valid credentials", () => {

    test("Example #1", { tag: ["@only"] }, async ({ Given, When, Then }) => {
      await Given("Admin is in login Page");
      await When("Admin enter valid username and password from excel file for the scenario \"ValidCredential\" and clicks login button");
      await Then("Admin should land on dashboard page.");
    });

  });

  test.describe("Validate login with invalid credentials", () => {

    test("Example #1", { tag: ["@only"] }, async ({ Given, When, Then }) => {
      await Given("Admin is in login Page");
      await When("Admin enter invalid credentials from excel file for the Scenario \"InvalidCredential\" and clicks login button");
      await Then("Admin should receive an error message");
    });

  });

  test.describe("Validate login credentials with null Adminname", () => {

    test("Example #1", { tag: ["@only"] }, async ({ Given, When, Then }) => {
      await Given("Admin is in login Page");
      await When("Admin enter value only in password for the \"InValidNullUsername\" from the exceland clicks login button");
      await Then("Admin should receive an error message for null userName");
    });

  });

  test.describe("Validate login credentials with null password", () => {

    test("Example #1", { tag: ["@only"] }, async ({ Given, When, Then }) => {
      await Given("Admin is in login Page");
      await When("Admin enter value only in adminname for the \"InValidNullPassword\" from the excel and clicks login button");
      await Then("Admin should receive an error message for null password");
    });

  });

  test.describe("Validate login credentials with null userName and password", () => {

    test("Example #1", { tag: ["@only"] }, async ({ Given, When, Then }) => {
      await Given("Admin is in login Page");
      await When("Admin try to login leaving adminname and password blank for the \"InValidEmptyUserAndPassword\" from the excel and clicks login button");
      await Then("Admin should receive an error message for the InValidEmptyUserAndPassword");
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests/Features/001_Login/001_Login.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Validate login with valid credentials|Example #1": {"pickleLocation":"14:1","tags":["@only"]},
  "Validate login with invalid credentials|Example #1": {"pickleLocation":"23:1","tags":["@only"]},
  "Validate login credentials with null Adminname|Example #1": {"pickleLocation":"33:1","tags":["@only"]},
  "Validate login credentials with null password|Example #1": {"pickleLocation":"41:1","tags":["@only"]},
  "Validate login credentials with null userName and password|Example #1": {"pickleLocation":"49:1","tags":["@only"]},
};