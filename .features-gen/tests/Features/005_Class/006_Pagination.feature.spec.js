/** Generated from: tests\Features\005_Class\006_Pagination.feature */
import { test } from "playwright-bdd";

test.describe("Verify Pagination", () => {

  test.beforeEach(async ({ Given, When }) => {
    await Given("Admin is logged in to LMS Portal");
    await When("Admin clicks on program in dashboard and admin lands on class Page");
  });

  test("Verify Next page link(>)", async ({ When, Then }) => {
    await When("Admin clicks Next page link on the class table");
    await Then("Admin should see the next page record on the table  with Pagination has next active link enabled");
  });

  test("Verify Last page link(>>)", async ({ When, Then }) => {
    await When("Admin clicks Last page link");
    await Then("Admin should see the last page record on the table with Next page link are disabled");
  });

  test("Verify First page link(<)", async ({ When, Then }) => {
    await When("Admin clicks First page link");
    await Then("Admin should see the previous page record on the table with pagination has previous page link enabled");
  });

  test("Verify Start page link(<<)", async ({ When, Then }) => {
    await When("Admin clicks Start page link");
    await Then("Admin should see the very first page record on the table with Previous page link are disabled");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests\\Features\\005_Class\\006_Pagination.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Verify Next page link(>)": {"pickleLocation":"8:1"},
  "Verify Last page link(>>)": {"pickleLocation":"12:1"},
  "Verify First page link(<)": {"pickleLocation":"16:1"},
  "Verify Start page link(<<)": {"pickleLocation":"20:1"},
};