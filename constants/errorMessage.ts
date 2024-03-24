enum ErrorMessage {
  DuplicateUser = "User already exists. Please choose a different email or username.",
  InvalidEmail = "Please enter a valid email address.",
  PasswordMismatch = "Passwords do not match.",
  InvalidPassword = "Please enter a valid password.",
  UserNotFound = "User not found. Please check your username and try again.",
  UserUnauthorized = "Please check your username and password.",
}

export default ErrorMessage;
