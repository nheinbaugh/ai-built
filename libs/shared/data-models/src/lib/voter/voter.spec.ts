import { createVoter } from './voter.factory';

describe('Voter Factory', () => {
  describe('createVoter', () => {
    it('should create a voter with provided values', () => {
      const firstName = 'Jane';
      const lastName = 'Smith';
      const email = 'jane.smith@example.com';
      const dateOfBirth = new Date('1990-01-01');
      const address = '123 Test St, City, ST';

      const voter = createVoter(
        firstName,
        lastName,
        email,
        dateOfBirth,
        address
      );

      expect(voter.firstName).toBe(firstName);
      expect(voter.lastName).toBe(lastName);
      expect(voter.email).toBe(email);
      expect(voter.dateOfBirth).toBe(dateOfBirth);
      expect(voter.address).toBe(address);
      expect(voter.id).toBe('');
      expect(voter.voterId).toBe('');
      expect(voter.isVerified).toBe(false);
      expect(voter.registrationDate).toBeInstanceOf(Date);
    });
  });
}); 