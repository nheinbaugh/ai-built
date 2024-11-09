/**
 * Represents a candidate in the voting system
 */
export interface Candidate {
  id: string;
  name: string;
  party: string;
  biography: string;
  imageUrl?: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Type guard to check if an object is a Candidate
 */
export function isCandidate(obj: unknown): obj is Candidate {
  if (!obj || typeof obj !== 'object') return false;
  
  const candidate = obj as Candidate;
  return (
    typeof candidate.id === 'string' &&
    typeof candidate.name === 'string' &&
    typeof candidate.party === 'string' &&
    typeof candidate.biography === 'string' &&
    typeof candidate.active === 'boolean' &&
    (candidate.imageUrl === undefined || typeof candidate.imageUrl === 'string') &&
    candidate.createdAt instanceof Date &&
    candidate.updatedAt instanceof Date
  );
} 