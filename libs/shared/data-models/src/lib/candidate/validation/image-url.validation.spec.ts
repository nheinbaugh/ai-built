import { CANDIDATE_VALIDATION_MESSAGES } from './candidate-validation-messages.const';
import { validateImageUrl } from './image-url.validation';

describe('Image URL Validation', () => {
  it('should pass for valid URLs', () => {
    const validUrls = [
      'https://example.com/image.jpg',
      'http://test.com/photo.png',
      'https://subdomain.example.com/path/to/image.jpeg'
    ];

    validUrls.forEach(url => {
      const errors = validateImageUrl(url);
      expect(errors).toHaveLength(0);
    });
  });

  it('should fail for invalid URLs', () => {
    const testCases = [
      { value: 'not-a-url', error: CANDIDATE_VALIDATION_MESSAGES.IMAGE_URL_INVALID },
      { value: 'ftp://invalid.com', error: CANDIDATE_VALIDATION_MESSAGES.IMAGE_URL_INVALID },
      { value: 'http:/missing-domain', error: CANDIDATE_VALIDATION_MESSAGES.IMAGE_URL_INVALID },
      { value: 3, error: CANDIDATE_VALIDATION_MESSAGES.IMAGE_URL_INVALID }
    ];

    testCases.forEach(({ value, error }) => {
      const errors = validateImageUrl(value);
      expect(errors).toContainEqual({ 
        field: 'imageUrl',
        message: error 
      });
    });
  });

  it('should fail when URL is missing', () => {
    const errors = validateImageUrl(undefined);
    expect(errors).toContainEqual({
      field: 'imageUrl',
      message: CANDIDATE_VALIDATION_MESSAGES.IMAGE_URL_REQUIRED
    });
  });
}); 