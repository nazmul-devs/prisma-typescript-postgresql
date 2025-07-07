export const success = <T>(data: T, message = "Success") => ({
  success: true,
  message,
  data,
});

export const error = (message = "Error", code = 500) => ({
  success: false,
  message,
  code,
});
