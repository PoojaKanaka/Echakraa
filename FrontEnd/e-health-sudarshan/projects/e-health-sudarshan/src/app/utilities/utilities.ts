export const UTILITIES = {
  ILLUSTRATION: {
    DEFAULT_URL: '/assets/svg/',
    LOGIN_SIGNUP_SVG: 'login-signup.svg',
  },
  REGEX_PATTERN: {
    MOBILE_NUMBER: /^(\+\d{1,3}[- ]?)?\d{10}$/,
  },
  ERROR_MESSAGE: {
    REQUIRED: (controlName: string) => `${controlName} is required.`,
    PATTERN: (controlname: string) => `Enter valid ${controlname}.`,
  },
};
