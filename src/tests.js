/************************************************
 * Tests
 ************************************************/
import {
  expect,
  describe
} from "./testing"

import {ArrayUtils} from "./utils";

describe("ArrayUtils", () => {
  let a = ["A", "B", "C"]
  let result = ArrayUtils.allExcept(a, "B")
  expect(result).to_equal(["A", "C"])
})
