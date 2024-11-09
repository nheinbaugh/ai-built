import { ValidationError, ValidationResult } from '../types/validation.types';
import { VOTER_VALIDATION_MESSAGES } from "./validation/voter-validation-messages.const";
import { Voter } from "./voter.interface";

/**
 * Validates voter age (must be 18 or older)
 */
export function validateVoterAge(dateOfBirth: Date): boolean {
  const today = new Date();
  const age = today.getFullYear() - dateOfBirth.getFullYear();
  const monthDiff = today.getMonth() - dateOfBirth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dateOfBirth.getDate())) {
    return age - 1 >= 18;
  }
  
  return age >= 18;
}

/**
 * Validates email format
 */
export function validateVoterEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates voter ID format (V followed by 6 digits)
 */
export function validateVoterId(voterId: string): boolean {
  const voterIdRegex = /^V\d{6}$/;
  return voterIdRegex.test(voterId);
}

/**
 * Validates all required voter fields are present and valid
 * Returns ValidationResult with errors array using consistent messages
 */
export function validateVoter(voter: unknown): ValidationResult {
  const errors: ValidationError[] = [];

  if (!voter || typeof voter !== 'object') {
    return {
      valid: false,
      errors: [{ field: 'voter', message: VOTER_VALIDATION_MESSAGES.VOTER.INVALID }]
    };
  }

  const voterData = voter as Partial<Voter>;

  // Name validation
  if (!voterData.firstName) {
    errors.push({ field: 'firstName', message: VOTER_VALIDATION_MESSAGES.NAME.EMPTY });
  }
  if (!voterData.lastName) {
    errors.push({ field: 'lastName', message: VOTER_VALIDATION_MESSAGES.NAME.EMPTY });
  }

  // Email validation
  if (!voterData.email) {
    errors.push({ field: 'email', message: VOTER_VALIDATION_MESSAGES.EMAIL.EMPTY });
  } else if (!validateVoterEmail(voterData.email)) {
    errors.push({ field: 'email', message: VOTER_VALIDATION_MESSAGES.EMAIL.INVALID_FORMAT });
  }

  // Date of birth validation
  if (!voterData.dateOfBirth) {
    errors.push({ field: 'dateOfBirth', message: VOTER_VALIDATION_MESSAGES.DATE_OF_BIRTH.INVALID });
  } else if (!validateVoterAge(voterData.dateOfBirth)) {
    errors.push({ field: 'dateOfBirth', message: 'Voter must be at least 18 years old' });
  }

  // Address validation
  if (!voterData.address) {
    errors.push({ field: 'address', message: VOTER_VALIDATION_MESSAGES.ADDRESS.REQUIRED });
  }

  // VoterId validation
  if (voterData.voterId && !validateVoterId(voterData.voterId)) {
    errors.push({ field: 'voterId', message: 'Invalid voter ID format. Must be V followed by 6 digits' });
  }

  return {
    valid: errors.length === 0,
    errors
  };
} 