/** Generated from: tests\Features\003_Program\001_Navigation.feature */
import { test } from "playwright-bdd";

test.describe("Navigation", () => {

  test.beforeEach(async ({ Given }) => {
    await Given("Admin is logged in to LMS Portal");
  });

  test("Verify that Admin is able to navigate to Program module", async ({ Given, When, Then }) => {
    await Given("Admin is on dashboard page after Login");
    await When("Admin clicks Program on the navigation bar");
    await Then("Admin should be navigated to Program module");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests\\Features\\003_Program\\001_Navigation.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Verify that Admin is able to navigate to Program module": {"pickleLocation":"7:5"},
};