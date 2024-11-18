/** Generated from: tests/Features/003_Program/007_SearchBarValidation.feature */
import { test } from "playwright-bdd";

test.describe("Manage Program - Search bar", () => {

  test.beforeEach(async ({ Given, When }) => {
    await Given("Admin is logged in to LMS Portal");
    await When("Admin clicks on program in dashboard and admin lands on Manage program Page");
  });

  test("Verify Admin is able to search results found for program name", async ({ Given, When, Then }) => {
    await Given("Admin is on Program module");
    await When("Admin enter the program to search By program name");
    await Then("Admin should able to see Program name, description, and status for searched program name");
  });

  test("Admin should able to see Program name, description, and status for searched program name", async ({ Given, When, Then }) => {
    await Given("Admin is on Program module");
    await When("Admin enter the program to search By program description");
    await Then("Admin should able to see Program name, description, and status for searched program description");
  });

  test("Verify Admin is able to search results not found", async ({ Given, When, Then }) => {
    await Given("Admin is on Program module");
    await When("Admin enter the program to search By program name that does not exist");
    await Then("There should be zero results.");
  });

  test("Verify Admin is able to search with partial program name", async ({ Given, When, Then }) => {
    await Given("Admin is on Program module");
    await When("Admin enter the program to search By partial name of program");
    await Then("Admin should able to see Program name, description, and status for searched program name");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests/Features/003_Program/007_SearchBarValidation.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Verify Admin is able to search results found for program name": {"pickleLocation":"8:1"},
  "Admin should able to see Program name, description, and status for searched program name": {"pickleLocation":"14:1"},
  "Verify Admin is able to search results not found": {"pickleLocation":"20:1"},
  "Verify Admin is able to search with partial program name": {"pickleLocation":"25:1"},
};