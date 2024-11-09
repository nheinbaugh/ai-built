import { validatePassword } from './password.validation';
import { VOTER_CONSTRAINTS } from './shared.validation';
import { VOTER_VALIDATION_MESSAGES } from './voter-validation-messages.const';

describe('Password Validation', () => {
  it('should pass for valid passwords', () => {
    const validPasswords = [
      'Password123!',
      'SecureP@ssw0rd',
      'Abcd123!@#',
      'A'.repeat(VOTER_CONSTRAINTS.PASSWORD_MIN_LENGTH - 3) + 'b1!'
    ];

    validPasswords.forEach(password => {
      expect(validatePassword(password)).toHaveLength(0);
    });
  });

  it('should fail for invalid passwords', () => {
    const testCases = [
      { value: null, error: VOTER_VALIDATION_MESSAGES.PASSWORD.EMPTY },
      { value: undefined, error: VOTER_VALIDATION_MESSAGES.PASSWORD.EMPTY },
      { value: '', error: VOTER_VALIDATION_MESSAGES.PASSWORD.EMPTY },
      { value: 'short1!', error: VOTER_VALIDATION_MESSAGES.PASSWORD.TOO_SHORT },
      { value: 'A'.repeat(VOTER_CONSTRAINTS.PASSWORD_MAX_LENGTH + 1), 
        error: VOTER_VALIDATION_MESSAGES.PASSWORD.TOO_LONG },
      { value: 'password123!', error: VOTER_VALIDATION_MESSAGES.PASSWORD.UPPERCASE },
      { value: 'PASSWORD123!', error: VOTER_VALIDATION_MESSAGES.PASSWORD.LOWERCASE },
      { value: 'PasswordABC!', error: VOTER_VALIDATION_MESSAGES.PASSWORD.NUMBER },
      { value: 'Password123', error: VOTER_VALIDATION_MESSAGES.PASSWORD.SPECIAL }
    ];

    testCases.forEach(({ value, error }) => {
      const errors = validatePassword(value);
      expect(errors).toContainEqual({ 
        field: 'password',
        message: error 
      });
    });
  });
}); 