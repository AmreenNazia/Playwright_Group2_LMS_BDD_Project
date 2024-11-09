/** Generated from: tests/Features/001_Login.feature */
import { test } from "playwright-bdd";

test.describe("", () => {

  test.beforeEach(async ({ Given }) => {
    await Given("Admin gives the correct LMS portal URL");
  });

  test("Validate login with valid credentials", async ({ Given, When, Then }) => {
    await Given("Admin is in login Page");
    await When("Admin enter valid username and password from excel file and clicks login button");
    await Then("Admin should land on dashboard page.");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests/Features/001_Login.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Validate login with valid credentials": {"pickleLocation":"9:1"},
};