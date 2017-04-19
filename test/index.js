import fs from "fs";
import test from "ava";
import stylelint from "stylelint";
import config from "../";

const valid = fs.readFileSync("test/valid.scss", "utf-8");
const invalid = fs.readFileSync("test/invalid.scss", "utf-8");

test("no warnings with valid css", t => {
  return stylelint.lint({
    code: valid,
    config: config,
  })
  .then(data => {
    const { errored } = data;
    t.falsy(errored, "no errored");
  });
});

test("a warning with invalid css", t => {
  return stylelint.lint({
    code: invalid,
    config: config,
  })
  .then(data => {
    const { errored, results } = data;
    const { warnings } = results[0];
    t.truthy(errored, "errored");
    t.is(warnings.length, 128, "flags 128 warning");
  });
});
