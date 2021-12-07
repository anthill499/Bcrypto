// Practice

import returnOne from "./example";
import "regenerator-runtime/runtime";

test("Should return one", () => {
  expect(returnOne()).toBe(1);
});

async function asyncSample() {
  return 1;
}

test("Returns 1 asynchronously", async () => {
  return asyncSample().then((data) => {
    expect(data).toBe(1);
  });
});

test("Example pass case", () => {
  expect(1 + 1).toBe(2);
});

const thisNull = null;
const thisUndefined = undefined;

function returnOutput(param) {
  return param;
}

test("Return proper output", () => {
  expect(returnOutput(thisNull)).toBeNull();
  expect(returnOutput(thisUndefined)).toBeUndefined();
});
