import { validateEmail } from './email.validation';
import { VOTER_CONSTRAINTS } from './shared.validation';
import { VOTER_VALIDATION_MESSAGES } from './voter-validation-messages.const';

describe('Email Validation', () => {
  it('should pass for valid email addresses', () => {
    const validEmails = [
      'test@example.com',
      'user.name@domain.com',
      'user+label@domain.co.uk',
      'a@b.com'
    ];

    validEmails.forEach(email => {
      expect(validateEmail(email)).toHaveLength(0);
    });
  });

  it('should fail for invalid email addresses', () => {
    const testCases = [
      { value: null, error: VOTER_VALIDATION_MESSAGES.EMAIL.EMPTY },
      { value: undefined, error: VOTER_VALIDATION_MESSAGES.EMAIL.EMPTY },
      { value: '', error: VOTER_VALIDATION_MESSAGES.EMAIL.EMPTY },
      { value: 'notanemail', error: VOTER_VALIDATION_MESSAGES.EMAIL.INVALID_FORMAT },
      { value: '@nodomain.com', error: VOTER_VALIDATION_MESSAGES.EMAIL.INVALID_FORMAT },
      { value: 'noat.com', error: VOTER_VALIDATION_MESSAGES.EMAIL.INVALID_FORMAT },
      { value: 'test@', error: VOTER_VALIDATION_MESSAGES.EMAIL.INVALID_FORMAT },
      { value: 'a'.repeat(VOTER_CONSTRAINTS.EMAIL_MAX_LENGTH + 1) + '@example.com', 
        error: VOTER_VALIDATION_MESSAGES.EMAIL.TOO_LONG }
    ];

    testCases.forEach(({ value, error }) => {
      const errors = validateEmail(value);
      expect(errors).toContainEqual({ 
        field: 'email',
        message: error 
      });
    });
  });
}); 