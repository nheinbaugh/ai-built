import { ValidationError } from '../../types/validation.types';
import { CANDIDATE_VALIDATION_MESSAGES } from './candidate-validation-messages.const';
import { CANDIDATE_CONSTRAINTS } from './shared.validation';

export function validateName(name: unknown): ValidationError[] {
  const errors: ValidationError[] = [];
  
  if (!name || typeof name !== 'string') {
    errors.push({ field: 'name', message: CANDIDATE_VALIDATION_MESSAGES.NAME.EMPTY });
    return errors;
  }

  const trimmedName = name.trim();
  if (trimmedName.length === 0) {
    errors.push({ field: 'name', message: CANDIDATE_VALIDATION_MESSAGES.NAME.EMPTY });
  }

  if (trimmedName.length > 0 && trimmedName.length < CANDIDATE_CONSTRAINTS.NAME_MIN_LENGTH) {
    errors.push({ field: 'name', message: CANDIDATE_VALIDATION_MESSAGES.NAME.TOO_SHORT });
  }
  
  if (trimmedName.length > CANDIDATE_CONSTRAINTS.NAME_MAX_LENGTH) {
    errors.push({ field: 'name', message: CANDIDATE_VALIDATION_MESSAGES.NAME.TOO_LONG });
  }

  return errors;
} 