/** Generated from: tests/Features/002_Dashboard/002_Dashboard.feature */
import { test } from "playwright-bdd";

test.describe.only("Validating Dashboard Page", () => {

  test.beforeEach(async ({ Given }) => {
    await Given("Admin gives the correct LMS portal URL");
  });

  test("Verify after login Admin lands on dashboard page", { tag: ["@only"] }, async ({ Given, When, Then }) => {
    await Given("Admin is in login Page");
    await When("Admin enter valid username and password from the scenario \"ValidCredential\" and \"Login\" and clicks login button");
    await Then("Admin should land on dashboard page.");
  });

  test("Verify LMS title", { tag: ["@only"] }, async ({ Given, When, Then }) => {
    await Given("Admin is in login Page");
    await When("Admin enter valid username and password from the scenario \"ValidCredential\" and \"Login\" and clicks login button");
    await Then("Admin should see LMS -Learning management system as title");
  });

  test("Verify LMS title alignment", { tag: ["@only"] }, async ({ Given, When, Then }) => {
    await Given("Admin is in login Page");
    await When("Admin enter valid username and password from the scenario \"ValidCredential\" and \"Login\" and clicks login button");
    await Then("LMS title should be on the top left corner of page");
  });

  test("Validate navigation bar text", { tag: ["@only"] }, async ({ Given, When, Then }) => {
    await Given("Admin is in login Page");
    await When("Admin enter valid username and password from the scenario \"ValidCredential\" and \"Login\" and clicks login button");
    await Then("Admin should see correct spelling in navigation bar text");
  });

  test("Validate LMS title has correct spelling and space", { tag: ["@only"] }, async ({ Given, When, Then }) => {
    await Given("Admin is in login Page");
    await When("Admin enter valid username and password from the scenario \"ValidCredential\" and \"Login\" and clicks login button");
    await Then("Admin should see correct spelling and space in LMS title");
  });

  test("Validate navigation bar order 1st program", { tag: ["@only"] }, async ({ Given, When, Then }) => {
    await Given("Admin is in login Page");
    await When("Admin enter valid username and password from the scenario \"ValidCredential\" and \"Login\" and clicks login button");
    await Then("Admin should see \"Program\" in the 1st place");
  });

  test("Validate navigation bar order 2nd batch", { tag: ["@only"] }, async ({ Given, When, Then }) => {
    await Given("Admin is in login Page");
    await When("Admin enter valid username and password from the scenario \"ValidCredential\" and \"Login\" and clicks login button");
    await Then("Admin should see \"Batch\" in the 2nd place");
  });

  test("Validate navigation bar order 3rd class", { tag: ["@only"] }, async ({ Given, When, Then }) => {
    await Given("Admin is in login Page");
    await When("Admin enter valid username and password from the scenario \"ValidCredential\" and \"Login\" and clicks login button");
    await Then("Admin should see \"Class\" in the 3rd place");
  });

  test("Validate navigation bar order 4th Logout", { tag: ["@only"] }, async ({ Given, When, Then }) => {
    await Given("Admin is in login Page");
    await When("Admin enter valid username and password from the scenario \"ValidCredential\" and \"Login\" and clicks login button");
    await Then("Admin should see \"Logout\" in the 4th place");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests/Features/002_Dashboard/002_Dashboard.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Verify after login Admin lands on dashboard page": {"pickleLocation":"12:13","tags":["@only"]},
  "Verify LMS title": {"pickleLocation":"21:13","tags":["@only"]},
  "Verify LMS title alignment": {"pickleLocation":"29:13","tags":["@only"]},
  "Validate navigation bar text": {"pickleLocation":"37:13","tags":["@only"]},
  "Validate LMS title has correct spelling and space": {"pickleLocation":"45:13","tags":["@only"]},
  "Validate navigation bar order 1st program": {"pickleLocation":"53:13","tags":["@only"]},
  "Validate navigation bar order 2nd batch": {"pickleLocation":"60:13","tags":["@only"]},
  "Validate navigation bar order 3rd class": {"pickleLocation":"67:13","tags":["@only"]},
  "Validate navigation bar order 4th Logout": {"pickleLocation":"74:13","tags":["@only"]},
};