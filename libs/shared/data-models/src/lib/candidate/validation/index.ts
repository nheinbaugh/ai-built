export * from './biography.validation';
export * from './candidate-validation-messages.const';
export * from './image-url.validation';
export * from './name.validation';
export * from './party.validation';
export * from './shared.validation';

import { ValidationError, ValidationResult } from '../../types/validation.types';
import { validateBiography } from './biography.validation';
import { CANDIDATE_VALIDATION_MESSAGES } from './candidate-validation-messages.const';
import { validateImageUrl } from './image-url.validation';
import { validateName } from './name.validation';
import { validateParty } from './party.validation';

export function validateCandidate(candidate: unknown): ValidationResult {
  const errors: ValidationError[] = [];
  
  if (!candidate || typeof candidate !== 'object') {
    return {
      valid: false,
      errors: [{ field: 'candidate', message: CANDIDATE_VALIDATION_MESSAGES.CANDIDATE.INVALID }]
    };
  }

  const candidateData = candidate as Record<string, unknown>;

  errors.push(
    ...validateName(candidateData['name']),
    ...validateParty(candidateData['party']),
    ...validateBiography(candidateData['biography']),
    ...validateImageUrl(candidateData['imageUrl'])
  );

  return {
    valid: errors.length === 0,
    errors
  };
} 