import { onSuccess } from "../../utils/response";

test("response test", () => {
  const successMessage = "success";
  const response = onSuccess(successMessage);
  expect(response.result).toEqual(successMessage);
});
