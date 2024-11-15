/**
 * Maximum lengths for candidate fields
 */
export const CANDIDATE_CONSTRAINTS = {
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 100,
  BIOGRAPHY_MIN_LENGTH: 50,
  BIOGRAPHY_MAX_LENGTH: 1000,
  PARTY_MIN_LENGTH: 2,
  PARTY_MAX_LENGTH: 50,
  IMAGE_URL_MAX_LENGTH: 2048
} as const;

