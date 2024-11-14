/** Generated from: tests/Features/002_Dashboard/002_Dashboard.feature */
import { test } from "playwright-bdd";

test.describe("Validating Dashboard Page", () => {

  test.beforeEach(async ({ Given }) => {
    await Given("Admin gives the correct LMS portal URL");
  });

  test("Verify after login Admin lands on dashboard page", async ({ Given, When, Then }) => {
    await Given("Admin is in login Page");
    await When("Admin enter valid username and password from the scenario \"ValidCredential\" and \"Login\" and clicks login button");
    await Then("Admin should land on dashboard page.");
  });

  test("Verify LMS title", async ({ Given, When, Then }) => {
    await Given("Admin is in login Page");
    await When("Admin enter valid username and password from the scenario \"title\" and \"Dashboard\" and clicks login button");
    await Then("Admin should see LMS -Learning management system as title from scenario \"title\"");
  });

  test("Verify LMS title alignment", async ({ Given, When, Then }) => {
    await Given("Admin is in login Page");
    await When("Admin enter valid username and password from the scenario \"ValidCredential\" and \"Login\" and clicks login button");
    await Then("LMS title should be on the top left corner of page from scenario \"ValidCredential\"");
  });

  test("Validate navigation bar text", async ({ Given, When, Then }) => {
    await Given("Admin is in login Page");
    await When("Admin enter valid username and password from the scenario \"navBarText\" and \"Dashboard\" and clicks login button");
    await Then("Admin should see correct spelling in navigation bar text from scenario \"navBarText\"");
  });

  test("Validate LMS title has correct spelling and space", async ({ Given, When, Then }) => {
    await Given("Admin is in login Page");
    await When("Admin enter valid username and password from the scenario \"title\" and \"Dashboard\" and clicks login button");
    await Then("Admin should see correct spelling and space in LMS title from scenario \"title\"");
  });

  test("Validate navigation bar order 1st program", async ({ Given, When, Then }) => {
    await Given("Admin is in login Page");
    await When("Admin enter valid username and password from the scenario \"program\" and \"Dashboard\" and clicks login button");
    await Then("Admin should see program in the 1st place from scenario \"program\"");
  });

  test("Validate navigation bar order 2nd batch", async ({ Given, When, Then }) => {
    await Given("Admin is in login Page");
    await When("Admin enter valid username and password from the scenario \"batch\" and \"Dashboard\" and clicks login button");
    await Then("Admin should see program in the 2nd place from scenario \"batch\"");
  });

  test("Validate navigation bar order 3rd class", async ({ Given, When, Then }) => {
    await Given("Admin is in login Page");
    await When("Admin enter valid username and password from the scenario \"class\" and \"Dashboard\" and clicks login button");
    await Then("Admin should see program in the 3rd place from scenario \"class\"");
  });

  test("Validate navigation bar order 4th Logout", async ({ Given, When, Then }) => {
    await Given("Admin is in login Page");
    await When("Admin enter valid username and password from the scenario \"logout\" and \"Dashboard\" and clicks login button");
    await Then("Admin should see program in the 4th place from scenario \"logout\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests/Features/002_Dashboard/002_Dashboard.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Verify after login Admin lands on dashboard page": {"pickleLocation":"11:13"},
  "Verify LMS title": {"pickleLocation":"19:13"},
  "Verify LMS title alignment": {"pickleLocation":"28:13"},
  "Validate navigation bar text": {"pickleLocation":"36:13"},
  "Validate LMS title has correct spelling and space": {"pickleLocation":"44:13"},
  "Validate navigation bar order 1st program": {"pickleLocation":"52:13"},
  "Validate navigation bar order 2nd batch": {"pickleLocation":"60:13"},
  "Validate navigation bar order 3rd class": {"pickleLocation":"68:13"},
  "Validate navigation bar order 4th Logout": {"pickleLocation":"76:13"},
};