import { isCandidate } from './candidate.interface';

describe('Candidate Interface', () => {
  describe('isCandidate', () => {
    it('should return true for valid candidate object', () => {
      const validCandidate = {
        id: '123',
        name: 'John Doe',
        party: 'Independent',
        biography: 'A great candidate',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      };

      expect(isCandidate(validCandidate)).toBe(true);
    });

    it('should return true for valid candidate with optional imageUrl', () => {
      const validCandidate = {
        id: '123',
        name: 'John Doe',
        party: 'Independent',
        biography: 'A great candidate',
        imageUrl: 'https://example.com/image.jpg',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      };

      expect(isCandidate(validCandidate)).toBe(true);
    });

    it('should return false for invalid objects', () => {
      const testCases = [
        null,
        undefined,
        'string',
        123,
        {},
        {
          id: 123, // wrong type
          name: 'John Doe',
          party: 'Independent',
          biography: 'A great candidate',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: '123',
          name: 'John Doe',
          party: 'Independent',
          biography: 'A great candidate',
          active: true,
          createdAt: 'not-a-date', // wrong type
          updatedAt: new Date()
        }
      ];

      testCases.forEach(testCase => {
        expect(isCandidate(testCase)).toBe(false);
      });
    });
  });
}); 