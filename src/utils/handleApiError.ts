import type { ApiValidationErrors, ParsedFormErrors } from "../types/auth.type";

export const handleApiError = (
  error: any,
  setFormErrors?: (val: ParsedFormErrors) => void
) => {
  const responseData = error?.response?.data;

  if (!responseData || typeof responseData !== "object") {
    console.error("Bilinməyən xəta:", error);
    return;
  }

  console.log(error, 'funcError');

  const parsedErrors: ParsedFormErrors = {};

  // 1. Əgər 409 statuslu ümumi error varsa (məsələn: "User artıq mövcuddur")
  if (responseData.statusCode === 409 || responseData.statusCode === 401 && typeof responseData.error === "string") {
    parsedErrors.general = responseData.error;
    if (setFormErrors) setFormErrors(parsedErrors);
    return;
  }

 

  if (setFormErrors) {
    const validationErrors = responseData as ApiValidationErrors;

    for (const key in validationErrors) {
      const lowerKey = key.toLowerCase();
      if (validationErrors[key]?.length) {
        parsedErrors[lowerKey] = validationErrors[key]![0];
      }
    }

    // Əgər heç bir field error yoxdursa amma ümumi `error` varsa
    if (Object.keys(parsedErrors).length === 0 && responseData.error) {
      parsedErrors.general = responseData.error;
    }

    setFormErrors(parsedErrors);
  } else {
    console.error("Bilinməyən xəta:", error);
  }
};
