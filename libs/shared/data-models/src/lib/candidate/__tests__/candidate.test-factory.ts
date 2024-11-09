import { createCandidate } from '../candidate.factory';
import { Candidate } from '../candidate.interface';

/**
 * Options for creating a test candidate
 */
export interface CreateTestCandidateOptions {
  id?: string;
  name?: string;
  party?: string;
  biography?: string;
  imageUrl?: string;
  active?: boolean;
}

/**
 * Creates a valid candidate object for testing with default values
 */
export function createTestCandidate(options: CreateTestCandidateOptions = {}): Candidate {
  return createCandidate({
    id: options.id ?? '123e4567-e89b-12d3-a456-426614174000',
    name: options.name ?? 'John Doe',
    party: options.party ?? 'Independent',
    biography: options.biography ?? 'A dedicated public servant with over 20 years of experience.',
    active: options.active ?? true,
    ...(options.imageUrl ? { imageUrl: options.imageUrl } : {})
  });
}

/**
 * Creates an array of valid test candidates
 */
export function createTestCandidates(count: number): Candidate[] {
  return Array.from({ length: count }, (_, index) => {
    const number = index + 1;
    return createTestCandidate({
      id: `candidate-${number}`,
      name: `Candidate ${number}`,
      party: `Party ${number}`,
      biography: `Biography for candidate ${number}`,
      active: true
    });
  });
} 