import { ValidationError } from '../../types/validation.types';
import { VOTER_CONSTRAINTS } from './shared.validation';
import { VOTER_VALIDATION_MESSAGES } from './voter-validation-messages.const';

export function validateEmail(email: unknown): ValidationError[] {
  const errors: ValidationError[] = [];
  
  if (!email || typeof email !== 'string') {
    errors.push({ field: 'email', message: VOTER_VALIDATION_MESSAGES.EMAIL.EMPTY });
    return errors;
  }

  const trimmedEmail = email.trim();
  if (trimmedEmail.length === 0) {
    errors.push({ field: 'email', message: VOTER_VALIDATION_MESSAGES.EMAIL.EMPTY });
  }

  if (trimmedEmail.length > VOTER_CONSTRAINTS.EMAIL_MAX_LENGTH) {
    errors.push({ field: 'email', message: VOTER_VALIDATION_MESSAGES.EMAIL.TOO_LONG });
  }

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (trimmedEmail.length > 0 && !emailRegex.test(trimmedEmail)) {
    errors.push({ field: 'email', message: VOTER_VALIDATION_MESSAGES.EMAIL.INVALID_FORMAT });
  }

  return errors;
} 