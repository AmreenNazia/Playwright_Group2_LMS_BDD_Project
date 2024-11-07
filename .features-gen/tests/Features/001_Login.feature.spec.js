/** Generated from: tests\Features\001_Login.feature */
import { test } from "playwright-bdd";

test.describe("", () => {

  test("Validate login with valid credentials", async ({ Given, page, When, Then }) => {
    await Given("Admin is in login Page", null, { page });
    await When("Admin enter valid username and password from excel file and clicks login button", null, { page });
    await Then("Admin should land on dashboard page.");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests\\Features\\001_Login.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Validate login with valid credentials": {"pickleLocation":"17:1"},
};