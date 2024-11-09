import { CANDIDATE_VALIDATION_MESSAGES } from './candidate-validation-messages.const';
import { validateParty } from './party.validation';
import { CANDIDATE_CONSTRAINTS } from './shared.validation';

describe('Party Validation', () => {
  it('should pass for valid party names', () => {
    const validParties = [
      'Democratic',
      'Republican',
      'Independent',
      'A'.repeat(CANDIDATE_CONSTRAINTS.PARTY_MIN_LENGTH),
      'A'.repeat(CANDIDATE_CONSTRAINTS.PARTY_MAX_LENGTH)
    ];

    validParties.forEach(party => {
      expect(validateParty(party)).toHaveLength(0);
    });
  });

  it('should fail for invalid party names', () => {
    const testCases = [
      { value: null, error: CANDIDATE_VALIDATION_MESSAGES.PARTY.EMPTY },
      { value: undefined, error: CANDIDATE_VALIDATION_MESSAGES.PARTY.EMPTY },
      { value: '', error: CANDIDATE_VALIDATION_MESSAGES.PARTY.EMPTY },
      { value: 'A', error: CANDIDATE_VALIDATION_MESSAGES.PARTY.TOO_SHORT },
      { value: 'A'.repeat(CANDIDATE_CONSTRAINTS.PARTY_MAX_LENGTH + 1), 
        error: CANDIDATE_VALIDATION_MESSAGES.PARTY.TOO_LONG }
    ];

    testCases.forEach(({ value, error }) => {
      const errors = validateParty(value);
      expect(errors).toContainEqual({ 
        field: 'party',
        message: error 
      });
    });
  });
}); 