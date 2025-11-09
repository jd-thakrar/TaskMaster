function isBlank(value) {
  return !value || value.trim().length === 0;
}

function validateUsername(username) {
  if (!username || username.trim() === "") return false
  const usernameRegex = /^[a-zA-Z\s]+$/;
  const isAllNumbers = !isNaN(username.trim()) && username.trim() !== "";
  return username.length >= 3 && usernameRegex.test(username) && !isAllNumbers;
}

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function validatePassword(password, minLength = 6) {
  return password && password.trim().length >= minLength;
}

function validatePhoneNumber(phone) {
  const phoneRegex = /^[\d\s+\-()]+$/;
  return phoneRegex.test(phone.trim()) && phone.trim().length >= 10;
}

function validateFullName(name) {
  if (!name || name.trim() === "") return false
  const isAllNumbers = !isNaN(name.trim()) && name.trim() !== "";
  return name.trim().length >= 3 && !isAllNumbers;
}

function validateDateOfBirth(dob) {
  if (!dob) return false
  const birthDate = new Date(dob);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    return age - 1 >= 13 // Must be at least 13 years old;
  }
  return age >= 13;
}

function validateRole(role) {
  return role && role.trim() !== "";
}

function validateAddress(address) {
  return address && address.trim().length >= 5;
}

function showFieldError(fieldId, message) {
  const field = document.getElementById(fieldId);
  let errorElement = field.parentElement.querySelector(".field-error");

  if (!errorElement) {
    errorElement = document.createElement("div");
    errorElement.className = "field-error";
    field.parentElement.appendChild(errorElement);
  }

  errorElement.textContent = message;
  errorElement.style.display = "block";
  field.classList.add("is-invalid");
}

function clearFieldError(fieldId) {
  const field = document.getElementById(fieldId);
  const errorElement = field.parentElement.querySelector(".field-error");

  if (errorElement) {
    errorElement.style.display = "none";
  }
  field.classList.remove("is-invalid");
}

function clearAllErrors(formId) {
  const form = document.getElementById(formId);
  const errorElements = form.querySelectorAll(".field-error");
  const invalidFields = form.querySelectorAll(".is-invalid");

  errorElements.forEach((el) => (el.style.display = "none"));
  invalidFields.forEach((el) => el.classList.remove("is-invalid"));
}

function validateRegisterForm() {
  clearAllErrors("registerForm");

  const fullName = document.getElementById("fullName").value;
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const dob = document.getElementById("dob").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const phone = document.getElementById("phone").value;
  const company = document.getElementById("company").value;
  const address = document.getElementById("address").value;
  const language = document.getElementById("language").value;
  const role = document.getElementById("role").value;
  const profilePic = document.getElementById("profilePic").files;
  const terms = document.getElementById("terms").checked;

  let isValid = true;

  if (!fullName) {
    showFieldError("fullName", "Full name is required");
    isValid = false;
  } else if (!validateFullName(fullName)) {
    showFieldError("fullName", "Full name must be at least 3 characters and contain only letters (no numbers)");
    isValid = false;
  }

  if (!username) {
    showFieldError("username", "Username is required");
    isValid = false;
  } else if (!validateUsername(username)) {
    showFieldError(
      "username",
      "Username must be at least 3 characters and contain only alphabetic characters (no numbers)",
    );
    isValid = false;
  }

  if (!email) {
    showFieldError("email", "Email address is required");
    isValid = false;
  } else if (!validateEmail(email)) {
    showFieldError("email", "Please enter a valid email address");
    isValid = false;
  }

  if (!dob) {
    showFieldError("dob", "Date of birth is required");
    isValid = false;
  } else if (!validateDateOfBirth(dob)) {
    showFieldError("dob", "You must be at least 13 years old to register");
    isValid = false;
  }

  if (!password) {
    showFieldError("password", "Password is required");
    isValid = false;
  } else if (!validatePassword(password)) {
    showFieldError("password", "Password must be at least 6 characters long");
    isValid = false;
  }

  if (!confirmPassword) {
    showFieldError("confirmPassword", "Please confirm your password");
    isValid = false;
  } else if (password !== confirmPassword) {
    showFieldError("confirmPassword", "Passwords do not match");
    isValid = false;
  }

  if (!phone) {
    showFieldError("phone", "Phone number is required");
    isValid = false;
  } else if (!validatePhoneNumber(phone)) {
    showFieldError("phone", "Please enter a valid phone number (at least 10 digits)");
    isValid = false;
  }

  if (!company) {
    showFieldError("company", "Company name is required");
    isValid = false;
  } else if (company.trim().length < 2) {
    showFieldError("company", "Company name must be at least 2 characters");
    isValid = false;
  }

  if (!address) {
    showFieldError("address", "Address is required");
    isValid = false;
  } else if (!validateAddress(address)) {
    showFieldError("address", "Address must be at least 5 characters");
    isValid = false;
  }

  if (!language) {
    showFieldError("language", "Please select a preferred language");
    isValid = false;
  }

  if (!role) {
    showFieldError("role", "Please select a role");
    isValid = false;
  }

  if (!profilePic || profilePic.length === 0) {
    showFieldError("profilePic", "Profile picture is required");
    isValid = false;
  } else if (!profilePic[0].type.startsWith("image/")) {
    showFieldError("profilePic", "Please upload a valid image file");
    isValid = false;
  }

  if (!terms) {
    showFieldError("terms", "You must agree to the Terms and Conditions");
    isValid = false;
  }

  return isValid;
}

function validateLoginForm() {
  clearAllErrors("loginForm");

  const userId = document.getElementById("userId").value;
  const password = document.getElementById("password").value;

  let isValid = true;

  if (!userId) {
    showFieldError("userId", "User ID is required");
    isValid = false;
  }

  if (!password) {
    showFieldError("password", "Password is required");
    isValid = false;
  } else if (password.length < 6) {
    showFieldError("password", "Password must be at least 6 characters long");
    isValid = false;
  }

  return isValid;
}

function validateForgotPasswordForm() {
  clearAllErrors("forgotPasswordForm");

  const email = document.getElementById("email").value;

  let isValid = true;

  if (!email) {
    showFieldError("email", "Email address is required");
    isValid = false;
  } else if (!validateEmail(email)) {
    showFieldError("email", "Please enter a valid email address");
    isValid = false;
  }

  return isValid;
}

function validateContactForm() {
  clearAllErrors("contactForm");

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  let isValid = true;

  if (!firstName) {
    showFieldError("firstName", "First name is required");
    isValid = false;
  }

  if (!lastName) {
    showFieldError("lastName", "Last name is required");
    isValid = false;
  }

  if (!email) {
    showFieldError("email", "Email address is required");
    isValid = false;
  } else if (!validateEmail(email)) {
    showFieldError("email", "Please enter a valid email address");
    isValid = false;
  }

  if (!subject) {
    showFieldError("subject", "Please select a subject");
    isValid = false;
  }

  if (!message) {
    showFieldError("message", "Message is required");
    isValid = false;
  } else if (message.trim().length < 10) {
    showFieldError("message", "Message must be at least 10 characters long");
    isValid = false;
  }

  return isValid;
}

function validateProfileForm() {
  clearAllErrors("profileForm");

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const jobTitle = document.getElementById("jobTitle").value;

  let isValid = true;

  if (!firstName) {
    showFieldError("firstName", "First name is required");
    isValid = false;
  } else if (!validateFullName(firstName)) {
    showFieldError("firstName", "First name must be at least 3 characters and contain only letters (no numbers)");
    isValid = false;
  }

  if (!lastName) {
    showFieldError("lastName", "Last name is required");
    isValid = false;
  } else if (!validateFullName(lastName)) {
    showFieldError("lastName", "Last name must be at least 3 characters and contain only letters (no numbers)");
    isValid = false;
  }

  if (!email) {
    showFieldError("email", "Email address is required");
    isValid = false;
  } else if (!validateEmail(email)) {
    showFieldError("email", "Please enter a valid email address");
    isValid = false;
  }

  if (phone && !validatePhoneNumber(phone)) {
    showFieldError("phone", "Please enter a valid phone number");
    isValid = false;
  }

  if (!jobTitle) {
    showFieldError("jobTitle", "Job title is required");
    isValid = false;
  }

  return isValid;
}

function validatePasswordUpdate(formId = "profileForm") {
  clearAllErrors(formId);

  const currentPasswordId = formId === "userPasswordForm" ? "userCurrentPassword" : "currentPassword";
  const newPasswordId = formId === "userPasswordForm" ? "userNewPassword" : "newPassword";
  const confirmPasswordId = formId === "userPasswordForm" ? "userConfirmPassword" : "confirmPassword";

  const currentPassword = document.getElementById(currentPasswordId).value;
  const newPassword = document.getElementById(newPasswordId).value;
  const confirmPassword = document.getElementById(confirmPasswordId).value;

  let isValid = true;

  if (!currentPassword) {
    showFieldError(currentPasswordId, "Current password is required");
    isValid = false;
  } else {
    clearFieldError(currentPasswordId);
  }

  if (!newPassword) {
    showFieldError(newPasswordId, "New password is required");
    isValid = false;
  } else if (!validatePassword(newPassword)) {
    showFieldError(newPasswordId, "New password must be at least 6 characters long");
    isValid = false;
  } else {
    clearFieldError(newPasswordId);
  }

  if (!confirmPassword) {
    showFieldError(confirmPasswordId, "Please confirm your new password");
    isValid = false;
  } else if (newPassword !== confirmPassword) {
    showFieldError(confirmPasswordId, "Passwords do not match");
    isValid = false;
  } else {
    clearFieldError(confirmPasswordId);
  }

  return isValid;
}

function validateUserProfileForm() {
  clearAllErrors("userProfileForm");

  const firstName = document.getElementById("userFirstName").value;
  const lastName = document.getElementById("userLastName").value;
  const email = document.getElementById("userEmail").value;
  const phone = document.getElementById("userPhone").value;
  const jobTitle = document.getElementById("userJobTitle").value;

  let isValid = true;

  if (!firstName) {
    showFieldError("userFirstName", "First name is required");
    isValid = false;
  } else if (!validateFullName(firstName)) {
    showFieldError("userFirstName", "First name must be at least 3 characters and contain only letters (no numbers)");
    isValid = false;
  }

  if (!lastName) {
    showFieldError("userLastName", "Last name is required");
    isValid = false;
  } else if (!validateFullName(lastName)) {
    showFieldError("userLastName", "Last name must be at least 3 characters and contain only letters (no numbers)");
    isValid = false;
  }

  if (!email) {
    showFieldError("userEmail", "Email address is required");
    isValid = false;
  } else if (!validateEmail(email)) {
    showFieldError("userEmail", "Please enter a valid email address");
    isValid = false;
  }

  if (phone && !validatePhoneNumber(phone)) {
    showFieldError("userPhone", "Please enter a valid phone number");
    isValid = false;
  }

  if (!jobTitle) {
    showFieldError("userJobTitle", "Job title is required");
    isValid = false;
  }

  return isValid;
}

function validateAddTaskForm() {
  clearAllErrors("addTaskForm");

  const taskName = document.getElementById("taskName").value;
  const description = document.getElementById("taskDescription").value;
  const dueDate = document.getElementById("taskDueDate").value;
  const priority = document.getElementById("taskPriority").value;

  let isValid = true;

  if (!taskName) {
    showFieldError("taskName", "Task name is required");
    isValid = false;
  }

  if (!description) {
    showFieldError("taskDescription", "Description is required");
    isValid = false;
  } else if (description.trim().length < 5) {
    showFieldError("taskDescription", "Description must be at least 5 characters long");
    isValid = false;
  }

  if (!dueDate) {
    showFieldError("taskDueDate", "Due date is required");
    isValid = false;
  }

  if (!priority) {
    showFieldError("taskPriority", "Priority is required");
    isValid = false;
  }

  return isValid;
}

function validateCreateProjectForm() {
  clearAllErrors("createProjectForm");

  const projectName = document.getElementById("projectName").value;
  const description = document.getElementById("projectDescription").value;
  const startDate = document.getElementById("projectStartDate").value;
  const endDate = document.getElementById("projectEndDate").value;

  let isValid = true;

  if (!projectName) {
    showFieldError("projectName", "Project name is required");
    isValid = false;
  }

  if (!description) {
    showFieldError("projectDescription", "Description is required");
    isValid = false;
  } else if (description.trim().length < 5) {
    showFieldError("projectDescription", "Description must be at least 5 characters long");
    isValid = false;
  }

  if (!startDate) {
    showFieldError("projectStartDate", "Start date is required");
    isValid = false;
  }

  if (!endDate) {
    showFieldError("projectEndDate", "End date is required");
    isValid = false;
  } else if (new Date(endDate) < new Date(startDate)) {
    showFieldError("projectEndDate", "End date must be after start date");
    isValid = false;
  }

  return isValid;
}

function validateAddMemberForm() {
  clearAllErrors("addMemberForm");

  const memberEmail = document.getElementById("memberEmail").value;
  const memberRole = document.getElementById("memberRole").value;

  let isValid = true;

  if (!memberEmail) {
    showFieldError("memberEmail", "Email address is required");
    isValid = false;
  } else if (!validateEmail(memberEmail)) {
    showFieldError("memberEmail", "Please enter a valid email address");
    isValid = false;
  }

  if (!memberRole) {
    showFieldError("memberRole", "Role is required");
    isValid = false;
  }

  return isValid;
}

function validateUserCreateTaskForm() {
  clearAllErrors("userCreateTaskForm");

  const taskTitle = document.getElementById("userTaskTitleField").value;
  const description = document.getElementById("userTaskDescriptionField").value;
  const dueDate = document.getElementById("userTaskDueDateField").value;
  const priority = document.getElementById("userTaskPriorityField").value;
  const assignee = document.getElementById("userTaskAssigneeField").value;

  let isValid = true;

  if (!taskTitle) {
    showFieldError("userTaskTitleField", "Task title is required");
    isValid = false;
  } else if (taskTitle.trim().length < 3) {
    showFieldError("userTaskTitleField", "Task title must be at least 3 characters");
    isValid = false;
  }

  if (!description) {
    showFieldError("userTaskDescriptionField", "Description is required");
    isValid = false;
  } else if (description.trim().length < 5) {
    showFieldError("userTaskDescriptionField", "Description must be at least 5 characters");
    isValid = false;
  }

  if (!dueDate) {
    showFieldError("userTaskDueDateField", "Due date is required");
    isValid = false;
  }

  if (!priority) {
    showFieldError("userTaskPriorityField", "Priority is required");
    isValid = false;
  }

  if (!assignee) {
    showFieldError("userTaskAssigneeField", "Assignee is required");
    isValid = false;
  }

  return isValid;
}

function validateTaskName(taskName) {
  return taskName && taskName.trim().length >= 3;
}

function validateProjectName(projectName) {
  return projectName && projectName.trim().length >= 3;
}

function validateDate(dateString) {
  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date);
}

function validateDateRange(startDate, endDate) {
  return new Date(endDate) >= new Date(startDate);
}

function validateNumber(value, min = 0, max = Number.POSITIVE_INFINITY) {
  const num = Number.parseFloat(value);
  return !isNaN(num) && num >= min && num <= max;
}

function validateFieldOnChange(fieldId, validationFn, errorMessage) {
  const field = document.getElementById(fieldId);
  if (!field) return

  field.addEventListener("change", () => {
    if (!validationFn(field.value)) {
      showFieldError(fieldId, errorMessage);
    } else {
      clearFieldError(fieldId);
    }
  })

  field.addEventListener("input", () => {
    if (validationFn(field.value)) {
      clearFieldError(fieldId);
    }
  })
}

function validateAdminNewTaskForm() {
  clearAllErrors("adminNewTaskForm");

  const taskName = document.getElementById("adminTaskName").value;
  const project = document.getElementById("adminTaskProject").value;
  const assignTo = document.getElementById("adminTaskAssignTo").value;
  const deadline = document.getElementById("adminTaskDeadline").value;
  const estimatedHours = document.getElementById("adminTaskEstimatedHours").value;

  let isValid = true;

  if (!taskName || taskName.trim().length < 3) {
    showFieldError("adminTaskName", taskName ? "Task name must be at least 3 characters long" : "Task name is required");
    isValid = false;
  }

  if (!project) {
    showFieldError("adminTaskProject", "Project selection is required");
    isValid = false;
  }

  if (!assignTo) {
    showFieldError("adminTaskAssignTo", "Please assign this task to a team member");
    isValid = false;
  }

  if (!deadline) {
    showFieldError("adminTaskDeadline", "Deadline is required");
    isValid = false;
  } else if (!validateDate(deadline)) {
    showFieldError("adminTaskDeadline", "Please enter a valid date");
    isValid = false;
  }

  if (!estimatedHours) {
    showFieldError("adminTaskEstimatedHours", "Estimated hours is required");
    isValid = false;
  } else if (!validateNumber(estimatedHours, 0.5, 999)) {
    showFieldError("adminTaskEstimatedHours", "Estimated hours must be between 0.5 and 999");
    isValid = false;
  }

  return isValid;
}

function validateAdminAddMemberForm() {
  clearAllErrors("adminAddMemberForm");

  const memberName = document.getElementById("adminMemberName").value;
  const memberEmail = document.getElementById("adminMemberEmail").value;
  const memberRole = document.getElementById("adminMemberRole").value;
  const memberDepartment = document.getElementById("adminMemberDepartment").value;

  let isValid = true;

  if (!memberName || memberName.trim().length < 2) {
    showFieldError("adminMemberName", memberName ? "Name must be at least 2 characters" : "Member name is required");
    isValid = false;
  } else if (!validateFullName(memberName)) {
    showFieldError("adminMemberName", "Name must contain only letters (no numbers only)");
    isValid = false;
  }

  if (!memberEmail) {
    showFieldError("adminMemberEmail", "Email is required");
    isValid = false;
  } else if (!validateEmail(memberEmail)) {
    showFieldError("adminMemberEmail", "Please enter a valid email address");
    isValid = false;
  }

  if (!memberRole) {
    showFieldError("adminMemberRole", "Role is required");
    isValid = false;
  }

  if (!memberDepartment) {
    showFieldError("adminMemberDepartment", "Department is required");
    isValid = false;
  }

  return isValid;
}

function validateAdminProjectFormModal() {
  clearAllErrors("adminProjectFormModal");

  const projectName = document.getElementById("adminProjectNameModal").value;
  const projectLead = document.getElementById("adminProjectLeadModal").value;
  const projectClient = document.getElementById("adminProjectClientModal").value;
  const budget = document.getElementById("adminProjectBudgetModal").value;
  const startDate = document.getElementById("adminProjectStartDateModal").value;
  const endDate = document.getElementById("adminProjectEndDateModal").value;

  let isValid = true;

  if (!projectName || projectName.trim().length < 3) {
    showFieldError(
      "adminProjectNameModal",
      projectName ? "Project name must be at least 3 characters" : "Project name is required",
    );
    isValid = false;
  } else if (!validateProjectName(projectName)) {
    const isAllNumbers = !isNaN(projectName.trim()) && projectName.trim() !== "";
    if (isAllNumbers) {
      showFieldError("adminProjectNameModal", "Project name cannot be only numbers");
      isValid = false;
    }
  }

  if (!projectLead) {
    showFieldError("adminProjectLeadModal", "Project lead is required");
    isValid = false;
  }

  if (!projectClient || projectClient.trim().length < 2) {
    showFieldError("adminProjectClientModal", "Client name is required");
    isValid = false;
  }

  if (!budget) {
    showFieldError("adminProjectBudgetModal", "Budget is required");
    isValid = false;
  } else if (!validateNumber(budget, 1, Number.POSITIVE_INFINITY)) {
    showFieldError("adminProjectBudgetModal", "Budget must be a positive number");
    isValid = false;
  }

  if (!startDate) {
    showFieldError("adminProjectStartDateModal", "Start date is required");
    isValid = false;
  } else if (!validateDate(startDate)) {
    showFieldError("adminProjectStartDateModal", "Please enter a valid date");
    isValid = false;
  }

  if (!endDate) {
    showFieldError("adminProjectEndDateModal", "End date is required");
    isValid = false;
  } else if (!validateDate(endDate)) {
    showFieldError("adminProjectEndDateModal", "Please enter a valid date");
    isValid = false;
  } else if (!validateDateRange(startDate, endDate)) {
    showFieldError("adminProjectEndDateModal", "End date must be after start date");
    isValid = false;
  }

  return isValid;
}

function validateAdminSettingsForm() {
  clearAllErrors("adminSettingsForm");

  const companyName = document.getElementById("adminCompanyName").value;
  const adminEmail = document.getElementById("adminEmail").value;
  const timezone = document.getElementById("adminTimezone").value;
  const language = document.getElementById("adminLanguage").value;

  let isValid = true;

  if (!companyName || companyName.trim().length < 2) {
    showFieldError(
      "adminCompanyName",
      companyName ? "Company name must be at least 2 characters" : "Company name is required",
    );
    isValid = false;
  } else {
    const isAllNumbers = !isNaN(companyName.trim()) && companyName.trim() !== "";
    if (isAllNumbers) {
      showFieldError("adminCompanyName", "Company name cannot be only numbers");
      isValid = false;
    }
  }

  if (!adminEmail) {
    showFieldError("adminEmail", "Email is required");
    isValid = false;
  } else if (!validateEmail(adminEmail)) {
    showFieldError("adminEmail", "Please enter a valid email address");
    isValid = false;
  }

  if (!timezone) {
    showFieldError("adminTimezone", "Timezone is required");
    isValid = false;
  }

  if (!language) {
    showFieldError("adminLanguage", "Language is required");
    isValid = false;
  }

  return isValid;
}

function setupPasswordFieldListeners() {
  const adminCurrentPasswordField = document.getElementById("currentPassword");
  const adminNewPasswordField = document.getElementById("newPassword");
  const adminConfirmPasswordField = document.getElementById("confirmPassword");

  const userCurrentPasswordField = document.getElementById("userCurrentPassword");
  const userNewPasswordField = document.getElementById("userNewPassword");
  const userConfirmPasswordField = document.getElementById("userConfirmPassword");

  if (adminCurrentPasswordField) {
    adminCurrentPasswordField.addEventListener("blur", function () {
      if (this.value) clearFieldError("currentPassword")
    })
    adminCurrentPasswordField.addEventListener("input", function () {
      if (this.value) clearFieldError("currentPassword")
    })
  }

  if (adminNewPasswordField) {
    adminNewPasswordField.addEventListener("blur", function () {
      if (this.value && this.value.length >= 6) clearFieldError("newPassword")
    })
    adminNewPasswordField.addEventListener("input", function () {
      if (this.value && this.value.length >= 6) clearFieldError("newPassword")
    })
  }

  if (adminConfirmPasswordField) {
    adminConfirmPasswordField.addEventListener("blur", function () {
      const newPassword = adminNewPasswordField ? adminNewPasswordField.value : "";
      if (this.value && newPassword && this.value === newPassword) clearFieldError("confirmPassword")
    })
    adminConfirmPasswordField.addEventListener("input", function () {
      const newPassword = adminNewPasswordField ? adminNewPasswordField.value : "";
      if (this.value && newPassword && this.value === newPassword) clearFieldError("confirmPassword")
    })
  }

  if (userCurrentPasswordField) {
    userCurrentPasswordField.addEventListener("blur", function () {
      if (this.value) clearFieldError("userCurrentPassword")
    })
    userCurrentPasswordField.addEventListener("input", function () {
      if (this.value) clearFieldError("userCurrentPassword")
    })
  }

  if (userNewPasswordField) {
    userNewPasswordField.addEventListener("blur", function () {
      if (this.value && this.value.length >= 6) clearFieldError("userNewPassword")
    })
    userNewPasswordField.addEventListener("input", function () {
      if (this.value && this.value.length >= 6) clearFieldError("userNewPassword")
    })
  }

  if (userConfirmPasswordField) {
    userConfirmPasswordField.addEventListener("blur", function () {
      const newPassword = userNewPasswordField ? userNewPasswordField.value : "";
      if (this.value && newPassword && this.value === newPassword) clearFieldError("userConfirmPassword")
    })
    userConfirmPasswordField.addEventListener("input", function () {
      const newPassword = userNewPasswordField ? userNewPasswordField.value : "";
      if (this.value && newPassword && this.value === newPassword) clearFieldError("userConfirmPassword")
    })
  }
}

function validateAdminCreateTaskForm() {
  clearAllErrors("adminCreateTaskForm");

  const taskTitle = document.getElementById("adminTaskTitleField").value;
  const taskType = document.getElementById("adminTaskTypeField").value;
  const assignee = document.getElementById("adminTaskAssigneeField").value;
  const startDate = document.getElementById("adminTaskStartDateField").value;
  const endDate = document.getElementById("adminTaskEndDateField").value;

  let isValid = true;

  if (!taskTitle || taskTitle.trim().length < 3) {
    showFieldError(
      "adminTaskTitleField",
      taskTitle ? "Task title must be at least 3 characters" : "Task title is required",
    );
    isValid = false;
  }

  if (!taskType) {
    showFieldError("adminTaskTypeField", "Task type is required");
    isValid = false;
  }

  if (!assignee) {
    showFieldError("adminTaskAssigneeField", "Please assign this task to a team member");
    isValid = false;
  }

  if (!startDate) {
    showFieldError("adminTaskStartDateField", "Start date is required");
    isValid = false;
  } else if (!validateDate(startDate)) {
    showFieldError("adminTaskStartDateField", "Please enter a valid date");
    isValid = false;
  }

  if (!endDate) {
    showFieldError("adminTaskEndDateField", "End date is required");
    isValid = false;
  } else if (!validateDate(endDate)) {
    showFieldError("adminTaskEndDateField", "Please enter a valid date");
    isValid = false;
  } else if (!validateDateRange(startDate, endDate)) {
    showFieldError("adminTaskEndDateField", "End date must be after start date");
    isValid = false;
  }

  return isValid;
}

function validateAdminCreateProjectForm() {
  clearAllErrors("adminCreateProjectForm");

  const projectName = document.getElementById("adminProjectNameField").value;
  const projectLead = document.getElementById("adminProjectLeadField").value;
  const budget = document.getElementById("adminProjectBudgetField").value;
  const startDate = document.getElementById("adminProjectStartDateField").value;
  const endDate = document.getElementById("adminProjectEndDateField").value;

  let isValid = true;

  if (!projectName || projectName.trim().length < 3) {
    showFieldError(
      "adminProjectNameField",
      projectName ? "Project name must be at least 3 characters" : "Project name is required",
    );
    isValid = false;
  } else if (!validateProjectName(projectName)) {
    const isAllNumbers = !isNaN(projectName.trim()) && projectName.trim() !== "";
    if (isAllNumbers) {
      showFieldError("adminProjectNameField", "Project name cannot be only numbers");
      isValid = false;
    }
  }

  if (!projectLead) {
    showFieldError("adminProjectLeadField", "Project lead is required");
    isValid = false;
  }

  if (!budget) {
    showFieldError("adminProjectBudgetField", "Budget is required");
    isValid = false;
  } else if (!validateNumber(budget, 1, Number.POSITIVE_INFINITY)) {
    showFieldError("adminProjectBudgetField", "Budget must be a positive number");
    isValid = false;
  }

  if (!startDate) {
    showFieldError("adminProjectStartDateField", "Start date is required");
    isValid = false;
  } else if (!validateDate(startDate)) {
    showFieldError("adminProjectStartDateField", "Please enter a valid date");
    isValid = false;
  }

  if (!endDate) {
    showFieldError("adminProjectEndDateField", "End date is required");
    isValid = false;
  } else if (!validateDate(endDate)) {
    showFieldError("adminProjectEndDateField", "Please enter a valid date");
    isValid = false;
  } else if (!validateDateRange(startDate, endDate)) {
    showFieldError("adminProjectEndDateField", "End date must be after start date");
    isValid = false;
  }

  return isValid;
}

function validateTeamCreateTaskForm() {
  clearAllErrors("teamCreateTaskForm");

  const taskName = document.getElementById("teamTaskName").value;
  const taskType = document.getElementById("teamTaskType").value;
  const assignee = document.getElementById("teamTaskAssignee").value;
  const startDate = document.getElementById("teamTaskStartDate").value;
  const endDate = document.getElementById("teamTaskEndDate").value;

  let isValid = true;

  if (!taskName || taskName.trim().length < 3) {
    showFieldError("teamTaskName", taskName ? "Task name must be at least 3 characters" : "Task name is required");
    isValid = false;
  }

  if (!taskType) {
    showFieldError("teamTaskType", "Task type is required");
    isValid = false;
  }

  if (!assignee) {
    showFieldError("teamTaskAssignee", "Please assign this task to a team member");
    isValid = false;
  }

  if (!startDate) {
    showFieldError("teamTaskStartDate", "Start date is required");
    isValid = false;
  } else if (!validateDate(startDate)) {
    showFieldError("teamTaskStartDate", "Please enter a valid date");
    isValid = false;
  }

  if (!endDate) {
    showFieldError("teamTaskEndDate", "End date is required");
    isValid = false;
  } else if (!validateDate(endDate)) {
    showFieldError("teamTaskEndDate", "Please enter a valid date");
    isValid = false;
  } else if (!validateDateRange(startDate, endDate)) {
    showFieldError("teamTaskEndDate", "End date must be after start date");
    isValid = false;
  }

  return isValid;
}