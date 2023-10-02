export const UTILITIES = {
  ILLUSTRATION: {
    DEFAULT_URL: '/assets/svg/',
    LOGIN_SIGNUP_SVG: 'login-signup.svg',
    CHAKRA_SVG: 'chakra.svg',
    VIDEO_CALL_SVG: 'video-call-re.svg',
    SYNC_SVG: 'sync.svg',
    FIND_DOCTOR: 'find-doctors.svg',
    LAB_TEST_SVG: 'lab-test.svg',
    NO_DATA_SVG: 'no-data.svg',
    CAR_BOOKING_SVG: 'car-booking.svg',
    TIFIN_SVG: 'tiffin.svg',
  },
  REGEX_PATTERN: {
    MOBILE_NUMBER: /^(\+\d{1,3}[- ]?)?\d{10}$/,
  },
  ERROR_MESSAGE: {
    REQUIRED: (controlName: string) => `${controlName} is required.`,
    PATTERN: (controlName: string) => `Enter valid ${controlName}.`,
    MINLENGTH: (length: number) => `Minimum ${length} character are required`,
  },
  ROUTE_PATH: {
    AUTH: 'auth',
    ADMIN_PORTAL: 'admin-portal',
    DASHBOARD: 'dashboard',
    HOSPITAL: 'hospital',
    DOCTOR: 'doctor',
  },
};
