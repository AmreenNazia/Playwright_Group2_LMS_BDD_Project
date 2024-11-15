/** Generated from: tests\Features\006_Logout\001_Logout.feature */
import { test } from "playwright-bdd";

test.describe("Validation on Logout button", () => {

  test.beforeEach(async ({ Given }) => {
    await Given("Admin is logged in to LMS Portal");
  });

  test("Verify logout function", async ({ Given, When, Then }) => {
    await Given("Admin is on dashboard page after Login");
    await When("Admin clicks on the logout in the menu bar");
    await Then("Admin should be redirected to login page");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests\\Features\\006_Logout\\001_Logout.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Verify logout function": {"pickleLocation":"6:5"},
};