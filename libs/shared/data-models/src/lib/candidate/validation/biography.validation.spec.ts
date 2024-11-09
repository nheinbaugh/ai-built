import { validateBiography } from './biography.validation';
import { CANDIDATE_VALIDATION_MESSAGES } from './candidate-validation-messages.const';
import { CANDIDATE_CONSTRAINTS } from './shared.validation';

describe('Biography Validation', () => {
  it('should pass for valid biographies', () => {
    const validBios = [
      'A'.repeat(CANDIDATE_CONSTRAINTS.BIOGRAPHY_MIN_LENGTH),
      'A'.repeat(CANDIDATE_CONSTRAINTS.BIOGRAPHY_MAX_LENGTH),
      'This is a valid biography with sufficient length to meet the minimum requirements.'
    ];

    validBios.forEach(bio => {
      expect(validateBiography(bio)).toHaveLength(0);
    });
  });

  it('should fail for invalid biographies', () => {
    const testCases = [
      { value: null, error: CANDIDATE_VALIDATION_MESSAGES.BIOGRAPHY.EMPTY },
      { value: undefined, error: CANDIDATE_VALIDATION_MESSAGES.BIOGRAPHY.EMPTY },
      { value: '', error: CANDIDATE_VALIDATION_MESSAGES.BIOGRAPHY.EMPTY },
      { value: '  ', error: CANDIDATE_VALIDATION_MESSAGES.BIOGRAPHY.EMPTY },
      { value: 'Too short', error: CANDIDATE_VALIDATION_MESSAGES.BIOGRAPHY.TOO_SHORT },
      { value: 'A'.repeat(CANDIDATE_CONSTRAINTS.BIOGRAPHY_MAX_LENGTH + 1), 
        error: CANDIDATE_VALIDATION_MESSAGES.BIOGRAPHY.TOO_LONG }
    ];

    testCases.forEach(({ value, error }) => {
      const errors = validateBiography(value);
      expect(errors).toContainEqual({ 
        field: 'biography',
        message: error 
      });
    });
  });
}); 