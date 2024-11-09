import { CANDIDATE_VALIDATION_MESSAGES } from './candidate-validation-messages.const';
import { validateName } from './name.validation';
import { CANDIDATE_CONSTRAINTS } from './shared.validation';

describe('Name Validation', () => {
  it('should pass for valid names', () => {
    const validNames = [
      'John Smith',
      'Jane Doe',
      'A'.repeat(CANDIDATE_CONSTRAINTS.NAME_MIN_LENGTH),
      'A'.repeat(CANDIDATE_CONSTRAINTS.NAME_MAX_LENGTH)
    ];

    validNames.forEach(name => {
      expect(validateName(name)).toHaveLength(0);
    });
  });

  it('should fail for invalid names', () => {
    const testCases = [
      { value: null, error: CANDIDATE_VALIDATION_MESSAGES.NAME.EMPTY },
      { value: undefined, error: CANDIDATE_VALIDATION_MESSAGES.NAME.EMPTY },
      { value: ' ', error: CANDIDATE_VALIDATION_MESSAGES.NAME.EMPTY },
      { value: '', error: CANDIDATE_VALIDATION_MESSAGES.NAME.EMPTY },
      { value: 'A', error: CANDIDATE_VALIDATION_MESSAGES.NAME.TOO_SHORT },
      { value: 'A'.repeat(CANDIDATE_CONSTRAINTS.NAME_MAX_LENGTH + 1), 
        error: CANDIDATE_VALIDATION_MESSAGES.NAME.TOO_LONG }
    ];

    testCases.forEach(({ value, error }) => {
      const errors = validateName(value);
      expect(errors).toContainEqual({ 
        field: 'name',
        message: error 
      });
    });
  });
}); 