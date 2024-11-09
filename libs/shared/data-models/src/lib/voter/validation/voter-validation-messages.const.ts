export const VOTER_VALIDATION_MESSAGES = {
  NAME: {
    EMPTY: 'Name is required',
    TOO_SHORT: 'Name is too short',
    TOO_LONG: 'Name is too long'
  },
  EMAIL: {
    EMPTY: 'Email is required',
    INVALID_FORMAT: 'Invalid email format',
    TOO_LONG: 'Email is too long'
  },
  PASSWORD: {
    EMPTY: 'Password is required',
    TOO_SHORT: 'Password is too short',
    TOO_LONG: 'Password is too long',
    UPPERCASE: 'Password must contain at least one uppercase letter',
    LOWERCASE: 'Password must contain at least one lowercase letter',
    NUMBER: 'Password must contain at least one number',
    SPECIAL: 'Password must contain at least one special character (!@#$%^&*)'
  },
  DATE_OF_BIRTH: {
    INVALID: 'Date of birth must be a valid date'
  },
  ADDRESS: {
    REQUIRED: 'Address is required'
  },
  VOTER: {
    INVALID: 'Invalid voter data'
  }
} as const; 