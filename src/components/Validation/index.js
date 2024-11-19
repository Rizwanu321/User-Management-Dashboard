export const validateUserForm = (user) => {
  const errors = {};

  if (!user.firstname?.trim()) {
    errors.firstname = "First name is required.";
  }

  if (!user.lastname?.trim()) {
    errors.lastname = "Last name is required.";
  }

  if (!user.email?.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!user.department?.trim()) {
    errors.department = "Department is required.";
  }

  return errors;
};
