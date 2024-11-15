/** Generated from: tests/Features/003_Program/009_PaginationProgram.feature */
import { test } from "playwright-bdd";

test.describe("Manage Program - Pagination", () => {

  test.beforeEach(async ({ Given, When }) => {
    await Given("Admin is logged in to LMS Portal");
    await When("Admin clicks on program in dashboard and admin lands on Manage program Page");
  });

  test("Verify Admin is able to click Next page link", async ({ Given, When, Then }) => {
    await Given("Admin is on Program module");
    await When("Admin clicks Next page link on the program table");
    await Then("Admin should see the Pagination has \"Next\" active link");
  });

  test("Verify Admin is able to click  Last page link", async ({ Given, When, Then }) => {
    await Given("Admin is on Program module");
    await When("Admin clicks Last page link");
    await Then("Admin should see the last page record on the table with Next page link are disabled");
  });

  test("Verify Admin is able to click Previous page link", async ({ Given, When, Then }) => {
    await Given("Admin is on last page of Program module table");
    await When("Admin clicks Previous page link");
    await Then("Admin should see the previous page record on the table with pagination has previous page link");
  });

  test("Verify Admin is able to click  First page link", async ({ Given, When, Then }) => {
    await Given("Admin is on Previous Program page");
    await When("Admin clicks First page link");
    await Then("Admin should see the very first page record on the table with Previous page link are disabled");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests/Features/003_Program/009_PaginationProgram.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Verify Admin is able to click Next page link": {"pickleLocation":"7:1"},
  "Verify Admin is able to click  Last page link": {"pickleLocation":"12:1"},
  "Verify Admin is able to click Previous page link": {"pickleLocation":"17:1"},
  "Verify Admin is able to click  First page link": {"pickleLocation":"22:1"},
};