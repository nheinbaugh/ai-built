import { ValidationError } from '../../types/validation.types';
import { VOTER_CONSTRAINTS } from './shared.validation';
import { VOTER_VALIDATION_MESSAGES } from './voter-validation-messages.const';

export function validateName(name: unknown): ValidationError[] {
  const errors: ValidationError[] = [];
  
  if (!name || typeof name !== 'string') {
    errors.push({ field: 'name', message: VOTER_VALIDATION_MESSAGES.NAME.EMPTY });
    return errors;
  }

  const trimmedName = name.trim();
  if (trimmedName.length === 0) {
    errors.push({ field: 'name', message: VOTER_VALIDATION_MESSAGES.NAME.EMPTY });
  }

  if (trimmedName.length > 0 && trimmedName.length < VOTER_CONSTRAINTS.NAME_MIN_LENGTH) {
    errors.push({ field: 'name', message: VOTER_VALIDATION_MESSAGES.NAME.TOO_SHORT });
  }
  
  if (trimmedName.length > VOTER_CONSTRAINTS.NAME_MAX_LENGTH) {
    errors.push({ field: 'name', message: VOTER_VALIDATION_MESSAGES.NAME.TOO_LONG });
  }

  return errors;
} 