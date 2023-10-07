export const INPUT_TYPES = {
  PASSWORD: 'password',
  TEXT: 'text'
};

export const supportedRequirements = {
  specialChar: {
    errorMessage: 'Must contain at least one special character: !@#$%^&*',
    validate: (password) => /[!@#$%^&*]/.test(password)
  },
  digit: {
    errorMessage: 'Must contain at least one digit',
    validate: (password) => /\d/.test(password)
  },
  uppercase: {
    errorMessage: 'Must contain at least one uppercase letter',
    validate: (password) => /[A-Z]/.test(password)
  },
  noConsecutive: {
    errorMessage: 'No consecutive characters allowed',
    validate: (password) =>
      !/(.)\1/.test(password.replace(/[^a-zA-Z]/g, '').toLowerCase())
  }
};
