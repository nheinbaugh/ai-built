import { ValidationError } from '../../types/validation.types';
import { VOTER_CONSTRAINTS } from './shared.validation';
import { VOTER_VALIDATION_MESSAGES } from './voter-validation-messages.const';

export function validatePassword(password: unknown): ValidationError[] {
  const errors: ValidationError[] = [];
  
  if (!password || typeof password !== 'string') {
    errors.push({ field: 'password', message: VOTER_VALIDATION_MESSAGES.PASSWORD.EMPTY });
    return errors;
  }

  if (password.length === 0) {
    errors.push({ field: 'password', message: VOTER_VALIDATION_MESSAGES.PASSWORD.EMPTY });
  }

  if (password.length > 0 && password.length < VOTER_CONSTRAINTS.PASSWORD_MIN_LENGTH) {
    errors.push({ field: 'password', message: VOTER_VALIDATION_MESSAGES.PASSWORD.TOO_SHORT });
  }

  if (password.length > VOTER_CONSTRAINTS.PASSWORD_MAX_LENGTH) {
    errors.push({ field: 'password', message: VOTER_VALIDATION_MESSAGES.PASSWORD.TOO_LONG });
  }

  // Only check complexity if password is not empty
  if (password.length > 0) {
    if (!/[A-Z]/.test(password)) {
      errors.push({ field: 'password', message: VOTER_VALIDATION_MESSAGES.PASSWORD.UPPERCASE });
    }
    if (!/[a-z]/.test(password)) {
      errors.push({ field: 'password', message: VOTER_VALIDATION_MESSAGES.PASSWORD.LOWERCASE });
    }
    if (!/[0-9]/.test(password)) {
      errors.push({ field: 'password', message: VOTER_VALIDATION_MESSAGES.PASSWORD.NUMBER });
    }
    if (!/[!@#$%^&*]/.test(password)) {
      errors.push({ field: 'password', message: VOTER_VALIDATION_MESSAGES.PASSWORD.SPECIAL });
    }
  }

  return errors;
} 