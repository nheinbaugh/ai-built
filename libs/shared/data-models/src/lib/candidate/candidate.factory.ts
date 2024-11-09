import { Candidate } from './candidate.interface';
import { validateCandidate } from './validation';

/**
 * Creates a candidate object with validation
 */
export function createCandidate(data: Omit<Candidate, 'createdAt' | 'updatedAt'>): Candidate {
  const now = new Date();
  
  const candidate: Candidate = {
    ...data,
    createdAt: now,
    updatedAt: now
  };

  const validationResult = validateCandidate(candidate);
  if (!validationResult.valid) {
    throw new Error(`Invalid candidate data: ${JSON.stringify(validationResult.errors)}`);
  }

  return candidate;
} 