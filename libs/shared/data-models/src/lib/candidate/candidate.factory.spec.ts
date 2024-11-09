import { createCandidate } from './candidate.factory';

describe('Candidate Factory', () => {
  describe('createCandidate', () => {
    it('should create a valid candidate with required values', () => {
      const validData = {
        id: '123e4567-e89b-12d3-a456-426614174000',
        name: 'John Doe',
        party: 'Independent',
        biography: 'A dedicated public servant with over 20 years of experience in local government.',
        imageUrl: 'https://example.com/image.jpg',
        active: true
      };
      
      const candidate = createCandidate(validData);
      
      expect(candidate).toBeDefined();
      expect(candidate.id).toBe(validData.id);
      expect(candidate.name).toBe(validData.name);
      expect(candidate.party).toBe(validData.party);
      expect(candidate.biography).toBe(validData.biography);
      expect(candidate.imageUrl).toBe(validData.imageUrl);
      expect(candidate.active).toBe(validData.active);
      expect(candidate.createdAt).toBeInstanceOf(Date);
      expect(candidate.updatedAt).toBeInstanceOf(Date);
    });

    it('should create a candidate with custom values', () => {
      const customData = {
        id: 'custom-id',
        name: 'Jane Doe',
        party: 'Custom Party',
        biography: 'A passionate advocate for environmental protection with extensive experience.',
        imageUrl: 'https://example.com/image.jpg',
        active: false
      };

      const candidate = createCandidate(customData);

      expect(candidate).toMatchObject(customData);
      expect(candidate.createdAt).toBeInstanceOf(Date);
      expect(candidate.updatedAt).toBeInstanceOf(Date);
    });

    it('should throw error for invalid data', () => {
      const invalidData = {
        id: 'invalid-id',
        name: 'A', // too short
        party: 'Independent',
        biography: 'Valid bio',
        imageUrl: 'https://example.com/image.jpg',
        active: true
      };

      expect(() => createCandidate(invalidData)).toThrow();
    });

    it('should throw error when imageUrl is missing', () => {
      const missingImageUrl = {
        id: 'test-id',
        name: 'Test Name',
        party: 'Test Party',
        biography: 'A detailed biography that meets the minimum length requirement.',
        active: true
      };

      expect(() => createCandidate(missingImageUrl)).toThrow('Invalid candidate data: [{"field":"imageUrl","message":"Image URL is required"}]');
    });

    it('should throw error when biography is too short', () => {
      const shortBio = {
        id: 'test-id',
        name: 'Test Name',
        party: 'Test Party',
        biography: 'Too short',
        imageUrl: 'https://example.com/image.jpg',
        active: true
      };

      expect(() => createCandidate(shortBio)).toThrow('Invalid candidate data: [{"field":"biography","message":"Biography is too short"}]');
    });
  });
}); 