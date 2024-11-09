import { createVoter } from './voter.factory';

describe('Voter Factory', () => {
  describe('createVoter', () => {
    it('should create a voter with provided values', () => {
      const voter = createVoter({
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@example.com',
        dateOfBirth: new Date('1990-01-01'),
        address: '123 Test St, City, ST'
      });

      expect(voter.firstName).toBe('Jane');
      expect(voter.lastName).toBe('Smith');
      expect(voter.email).toBe('jane.smith@example.com');
      expect(voter.dateOfBirth).toEqual(new Date('1990-01-01'));
      expect(voter.address).toBe('123 Test St, City, ST');
      expect(voter.id).toBe('');
      expect(voter.voterId).toBe('');
      expect(voter.isVerified).toBe(false);
      expect(voter.registrationDate).toBeInstanceOf(Date);
    });

    it('should throw error when required fields are missing', () => {
      expect(() => createVoter({
        firstName: 'Jane',
        // missing lastName and other required fields
      } as any)).toThrow('Missing required voter fields');
    });

    it('should throw error when input is invalid', () => {
      expect(() => createVoter({
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'invalid-email',  // Invalid email format
        dateOfBirth: new Date('1990-01-01'),
        address: '123 Test St'
      })).toThrow('Invalid voter data');
    });
  });
}); 