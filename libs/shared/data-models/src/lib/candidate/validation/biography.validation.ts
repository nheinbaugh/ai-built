import { ValidationError } from '../../types/validation.types';
import { CANDIDATE_VALIDATION_MESSAGES } from './candidate-validation-messages.const';
import { CANDIDATE_CONSTRAINTS } from './shared.validation';

export function validateBiography(biography: unknown): ValidationError[] {
  const errors: ValidationError[] = [];
  
  if (!biography || typeof biography !== 'string') {
    errors.push({ field: 'biography', message: CANDIDATE_VALIDATION_MESSAGES.BIOGRAPHY.EMPTY });
    return errors;
  }

  const trimmedBio = biography.trim();
  if (trimmedBio.length === 0) {
    errors.push({ field: 'biography', message: CANDIDATE_VALIDATION_MESSAGES.BIOGRAPHY.EMPTY });
  }

  if (trimmedBio.length > 0 && trimmedBio.length < CANDIDATE_CONSTRAINTS.BIOGRAPHY_MIN_LENGTH) {
    errors.push({ field: 'biography', message: CANDIDATE_VALIDATION_MESSAGES.BIOGRAPHY.TOO_SHORT });
  }
  
  if (trimmedBio.length > CANDIDATE_CONSTRAINTS.BIOGRAPHY_MAX_LENGTH) {
    errors.push({ field: 'biography', message: CANDIDATE_VALIDATION_MESSAGES.BIOGRAPHY.TOO_LONG });
  }

  return errors;
} 