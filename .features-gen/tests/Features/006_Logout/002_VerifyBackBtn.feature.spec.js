/** Generated from: tests/Features/006_Logout/002_VerifyBackBtn.feature */
import { test } from "playwright-bdd";

test.describe("Validation on Logout button", () => {

  test.beforeEach(async ({ Given }) => {
    await Given("Admin is logged out of the application");
  });

  test("Verify back button function", async ({ Given, When, Then }) => {
    await Given("Admin is in login Page");
    await When("Admin clicks  browser back button");
    await Then("Admin should receive error message");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests/Features/006_Logout/002_VerifyBackBtn.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Verify back button function": {"pickleLocation":"5:9"},
};