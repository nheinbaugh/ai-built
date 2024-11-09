import { ValidationError } from '../../types/validation.types';
import { CANDIDATE_VALIDATION_MESSAGES } from './candidate-validation-messages.const';
import { CANDIDATE_CONSTRAINTS } from './shared.validation';

export function validateParty(party: unknown): ValidationError[] {
  const errors: ValidationError[] = [];
  
  if (!party || typeof party !== 'string') {
    errors.push({ field: 'party', message: CANDIDATE_VALIDATION_MESSAGES.PARTY.EMPTY });
    return errors;
  }

  const trimmedParty = party.trim();
  if (trimmedParty.length === 0) {
    errors.push({ field: 'party', message: CANDIDATE_VALIDATION_MESSAGES.PARTY.EMPTY });
  }

  if (trimmedParty.length > 0 && trimmedParty.length < CANDIDATE_CONSTRAINTS.PARTY_MIN_LENGTH) {
    errors.push({ field: 'party', message: CANDIDATE_VALIDATION_MESSAGES.PARTY.TOO_SHORT });
  }
  
  if (trimmedParty.length > CANDIDATE_CONSTRAINTS.PARTY_MAX_LENGTH) {
    errors.push({ field: 'party', message: CANDIDATE_VALIDATION_MESSAGES.PARTY.TOO_LONG });
  }

  return errors;
} 