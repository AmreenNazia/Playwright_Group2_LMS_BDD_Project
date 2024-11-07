/** Generated from: tests\Features\001_Login.feature */
import { test } from "playwright-bdd";

test.describe("", () => {

  test.beforeEach(async ({ Given, page }) => {
    await Given("Admin gives the correct LMS portal URL", null, { page });
  });

  test.describe("Validate login with valid credentials", () => {

    test("Example #1", async ({ Given, page, When, Then }) => {
      await Given("Admin is in login Page", null, { page });
      await When("Admin enter valid \"playwrightuser@gmail.com\" and \"Playwright@1234\" and clicks login button");
      await Then("Admin should land on dashboard page.");
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests\\Features\\001_Login.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Validate login with valid credentials|Example #1": {"pickleLocation":"15:1"},
};