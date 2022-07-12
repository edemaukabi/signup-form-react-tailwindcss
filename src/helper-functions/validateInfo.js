export default function validateInfo(values) {
  const { email, password } = values;
  let errors = {};
  function validateInput(inputtext, inputType) {
    const emailRegex = /\S+@\S+\.\S+/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let elementRegex;
    if (inputType === "email") {
      elementRegex = emailRegex;
    } else if (inputType === "password") {
      elementRegex = passwordRegex;
    }
    if (inputtext.trim().match(elementRegex)) {
      return true;
    } else return false;
  }

  if (!values.email.trim()) {
    errors.email = "Email required";
  } else if (!validateInput(email, "email")) {
    errors.email = `Not a valid email address`;
  }

  if (!values.password.trim()) {
    errors.password = "Password required";
  } else if (!validateInput(password, "password")) {
    errors.password = `Not a valid password, must contain at least 8 characters, one uppercase, one lowercase, one number and one special character`;
  }

  return errors;
}
