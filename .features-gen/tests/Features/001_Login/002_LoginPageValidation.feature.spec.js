/** Generated from: tests/Features/001_Login/002_LoginPageValidation.feature */
import { test } from "playwright-bdd";

test.describe("Login page Validations", () => {

  test.beforeEach(async ({ Given }) => {
    await Given("Admin launches the browser");
  });

  test("Verify Admin is able to land on home page with invalid URL", async ({ Given, When, Then }) => {
    await Given("Admin launch the browser");
    await When("Admin gives the invalid LMS portal URL");
    await Then("Admin should recieve application error");
  });

  test("Verify for broken link", async ({ When, Then }) => {
    await When("Admin gives the correct LMS portal URL");
    await Then("HTTP response >= 400. Then the link is broken");
  });

  test("Verify the text spelling in the page", async ({ When, Then }) => {
    await When("Admin gives the correct LMS portal URL");
    await Then("Admin should see correct spellings in all fields");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests/Features/001_Login/002_LoginPageValidation.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Verify Admin is able to land on home page with invalid URL": {"pickleLocation":"10:1"},
  "Verify for broken link": {"pickleLocation":"15:1"},
  "Verify the text spelling in the page": {"pickleLocation":"19:1"},
};