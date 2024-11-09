import { ValidationError } from '../../types/validation.types';
import { CANDIDATE_VALIDATION_MESSAGES } from './candidate-validation-messages.const';

export function validateImageUrl(value: unknown): ValidationError[] {
  const errors: ValidationError[] = [];

  if (value === undefined || value === null) {
    errors.push({
      field: 'imageUrl',
      message: CANDIDATE_VALIDATION_MESSAGES.IMAGE_URL_REQUIRED
    });
    return errors;
  }

  if (typeof value !== 'string') {
    errors.push({
      field: 'imageUrl',
      message: CANDIDATE_VALIDATION_MESSAGES.IMAGE_URL_INVALID
    });
    return errors;
  }

  if (!value.trim()) {
    errors.push({
      field: 'imageUrl',
      message: CANDIDATE_VALIDATION_MESSAGES.IMAGE_URL_REQUIRED
    });
    return errors;
  }

  const urlPattern = /^https?:\/\/.+\..+/;
  if (!urlPattern.test(value)) {
    errors.push({
      field: 'imageUrl',
      message: CANDIDATE_VALIDATION_MESSAGES.IMAGE_URL_INVALID
    });
  }

  return errors;
} 