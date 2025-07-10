import type { ApiValidationErrors, ParsedFormErrors } from "../types/auth.type";

export const handleApiError = (
  error: any,
  setFormErrors?: (val: ParsedFormErrors) => void
) => {
  if (
    error?.response?.data &&
    typeof error.response.data === "object" &&
    setFormErrors
  ) {
    const validationErrors = error.response.data as ApiValidationErrors;

    const parsedErrors: ParsedFormErrors = {};

    for (const key in validationErrors) {
      if (validationErrors[key]?.length) {
        parsedErrors[key] = validationErrors[key]![0]; // yalnız ilk mesaj
      }
    }

    setFormErrors(parsedErrors);
  } else {
    console.error("Bilinməyən xəta:", error);
  }
};
