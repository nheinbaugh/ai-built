export * from './email.validation';
export * from './name.validation';
export * from './password.validation';
export * from './shared.validation';
export * from './voter-validation-messages.const';

import { ValidationError, ValidationResult } from '../../types/validation.types';
import { validateEmail } from './email.validation';
import { validateName } from './name.validation';
import { VOTER_VALIDATION_MESSAGES } from './voter-validation-messages.const';

export function validateVoter(voter: unknown): ValidationResult {
  const errors: ValidationError[] = [];
  
  if (!voter || typeof voter !== 'object') {
    return {
      valid: false,
      errors: [{ field: 'voter', message: VOTER_VALIDATION_MESSAGES.VOTER.INVALID }]
    };
  }

  const voterData = voter as Record<string, unknown>;

  errors.push(
    ...validateName(voterData['firstName']),
    ...validateName(voterData['lastName']),
    ...validateEmail(voterData['email'])
  );

  if (!(voterData['dateOfBirth'] instanceof Date)) {
    errors.push({ field: 'dateOfBirth', message: VOTER_VALIDATION_MESSAGES.DATE_OF_BIRTH.INVALID });
  }

  if (typeof voterData['address'] !== 'string' || !voterData['address']) {
    errors.push({ field: 'address', message: VOTER_VALIDATION_MESSAGES.ADDRESS.REQUIRED });
  }

  return {
    valid: errors.length === 0,
    errors
  };
} 