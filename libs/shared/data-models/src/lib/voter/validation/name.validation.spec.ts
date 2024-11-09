import { validateName } from './name.validation';
import { VOTER_CONSTRAINTS } from './shared.validation';
import { VOTER_VALIDATION_MESSAGES } from './voter-validation-messages.const';

describe('Name Validation', () => {
  it('should pass for valid names', () => {
    const validNames = [
      'John',
      'Jane Smith',
      'A'.repeat(VOTER_CONSTRAINTS.NAME_MIN_LENGTH),
      'A'.repeat(VOTER_CONSTRAINTS.NAME_MAX_LENGTH)
    ];

    validNames.forEach(name => {
      expect(validateName(name)).toHaveLength(0);
    });
  });

  it('should fail for invalid names', () => {
    const testCases = [
      { value: null, error: VOTER_VALIDATION_MESSAGES.NAME.EMPTY },
      { value: undefined, error: VOTER_VALIDATION_MESSAGES.NAME.EMPTY },
      { value: '', error: VOTER_VALIDATION_MESSAGES.NAME.EMPTY },
      { value: 'A', error: VOTER_VALIDATION_MESSAGES.NAME.TOO_SHORT },
      { value: 'A'.repeat(VOTER_CONSTRAINTS.NAME_MAX_LENGTH + 1), 
        error: VOTER_VALIDATION_MESSAGES.NAME.TOO_LONG }
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