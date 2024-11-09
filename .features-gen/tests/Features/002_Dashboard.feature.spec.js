/** Generated from: tests/Features/002_Dashboard.feature */
import { test } from "playwright-bdd";

test.describe.only("Validating Dashboard Page", () => {

  test.beforeEach(async ({ Given }) => {
    await Given("Admin gives the correct LMS portal URL");
  });

  test("Verify after login Admin lands on dashboard page", { tag: ["@only"] }, async ({ Given, When, Then }) => {
    await Given("Admin is in login Page");
    await When("Admin enter valid username and password from excel file and clicks login button");
    await Then("Admin should land on dashboard page.");
  });

  test("Verify LMS title", { tag: ["@only"] }, async ({ Given, When, Then }) => {
    await Given("Admin is in login Page");
    await When("Admin enter valid username and password from excel file and clicks login button");
    await Then("Admin should see LMS -Learning management system as title");
  });

  test("Verify LMS title alignment", { tag: ["@only"] }, async ({ Given, When, Then }) => {
    await Given("Admin is in login Page");
    await When("Admin enter valid username and password from excel file and clicks login button");
    await Then("LMS title should be on the top left corner of page");
  });

  test("Validate navigation bar text", { tag: ["@only"] }, async ({ Given, When, Then }) => {
    await Given("Admin is in login Page");
    await When("Admin enter valid username and password from excel file and clicks login button");
    await Then("Admin should see correct spelling in navigation bar text");
  });

  test("Validate LMS title has correct spelling and space", { tag: ["@only"] }, async ({ Given, When, Then }) => {
    await Given("Admin is in login Page");
    await When("Admin enter valid username and password from excel file and clicks login button");
    await Then("Admin should see correct spelling and space in LMS title");
  });

  test("Validate navigation bar order 1st program", { tag: ["@only"] }, async ({ Given, When, Then }) => {
    await Given("Admin is in login Page");
    await When("Admin enter valid username and password from excel file and clicks login button");
    await Then("Admin should see program in the 1st place");
  });

  test("Validate navigation bar order 2nd batch", { tag: ["@only"] }, async ({ Given, When, Then }) => {
    await Given("Admin is in login Page");
    await When("Admin enter valid username and password from excel file and clicks login button");
    await Then("Admin should see program in the 2nd place");
  });

  test("Validate navigation bar order 3rd class", { tag: ["@only"] }, async ({ Given, When, Then }) => {
    await Given("Admin is in login Page");
    await When("Admin enter valid username and password from excel file and clicks login button");
    await Then("Admin should see program in the 3rd place");
  });

  test("Validate navigation bar order 4th Logout", { tag: ["@only"] }, async ({ Given, When, Then }) => {
    await Given("Admin is in login Page");
    await When("Admin enter valid username and password from excel file and clicks login button");
    await Then("Admin should see program in the 4th place");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests/Features/002_Dashboard.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Verify after login Admin lands on dashboard page": {"pickleLocation":"6:5","tags":["@only"]},
  "Verify LMS title": {"pickleLocation":"11:5","tags":["@only"]},
  "Verify LMS title alignment": {"pickleLocation":"16:5","tags":["@only"]},
  "Validate navigation bar text": {"pickleLocation":"21:5","tags":["@only"]},
  "Validate LMS title has correct spelling and space": {"pickleLocation":"26:5","tags":["@only"]},
  "Validate navigation bar order 1st program": {"pickleLocation":"31:5","tags":["@only"]},
  "Validate navigation bar order 2nd batch": {"pickleLocation":"36:5","tags":["@only"]},
  "Validate navigation bar order 3rd class": {"pickleLocation":"41:5","tags":["@only"]},
  "Validate navigation bar order 4th Logout": {"pickleLocation":"46:5","tags":["@only"]},
};