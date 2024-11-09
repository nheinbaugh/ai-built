export const CANDIDATE_VALIDATION_MESSAGES = {
  NAME: {
    REQUIRED: 'Name is required and must be a string',
    EMPTY: 'Name is required',
    TOO_SHORT: 'Name is too short',
    TOO_LONG: 'Name is too long'
  },
  PARTY: {
    REQUIRED: 'Party is required and must be a string',
    EMPTY: 'Party name is required',
    TOO_SHORT: 'Party name is too short',
    TOO_LONG: 'Party name is too long'
  },
  BIOGRAPHY: {
    REQUIRED: 'Biography is required and must be a string',
    EMPTY: 'Biography is required',
    TOO_SHORT: 'Biography is too short',
    TOO_LONG: 'Biography is too long'
  },
  IMAGE_URL: {
    REQUIRED: 'Image URL is required and must be a string',
    EMPTY: 'Image URL is required',
    INVALID_FORMAT: 'Invalid URL format',
    TOO_LONG: 'Image URL is too long'
  },
  IMAGE_URL_REQUIRED: 'Image URL is required',
  IMAGE_URL_INVALID: 'Invalid URL format',
  CANDIDATE: {
    INVALID: 'Invalid candidate data'
  }
} as const; 