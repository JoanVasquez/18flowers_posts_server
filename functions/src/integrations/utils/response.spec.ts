import { onSuccess } from "../../utils/response";

// testing response util
test("response test", () => {
  const successMessage = "success";
  const response = onSuccess(successMessage);
  expect(response.result).toEqual(successMessage);
});
