import { isRememberedUser } from "../isRememberedUser";
import { SearchParamName } from "../../../../common/enums/SearchParamName";

test("isRememberedUser should handle undefined search param", () => {
  expect(isRememberedUser(undefined)).toBe(false);
});

test("isRememberedUser should handle empty search param", () => {
  expect(isRememberedUser("")).toBe(false);
});

test("isRememberedUser should handle search param with other params", () => {
  expect(isRememberedUser("?test=true")).toBe(false);
});

test("isRememberedUser should handle search param with proper params", () => {
  expect(isRememberedUser(`?${SearchParamName.Remembered}=true`)).toBe(true);
  expect(isRememberedUser(`?${SearchParamName.Remembered}=false`)).toBe(false);
});
