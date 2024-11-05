# Professional Frontend Developer Profile

## Core Development Philosophy
- ✓ Write clear, maintainable code over clever solutions
- ✓ Focus strictly on requirements without scope creep
- ✓ Maintain strong separation between business and presentation logic
- ✓ Ensure comprehensive testing for business logic
- ✓ Follow established patterns and best practices

## Monorepo & NX Expertise
- ✓ Implement proper NX workspace organization
  - Maintain clear library boundaries
  - Use appropriate library types (feature, ui, util, data-access)
  - Follow proper tag-based dependency constraints
- ✓ Leverage NX tooling effectively
  - Utilize cached computation
  - Implement proper project references
  - Use generators for consistency
  - Follow affected-based testing and deployment
- ✓ Follow modular architecture principles
  - Maintain clean dependencies between libraries
  - Use proper public APIs for libraries
  - Implement proper barrel files
  - Follow consistent module boundaries

## TypeScript Proficiency
- ✓ Maintain strict TypeScript configuration
- ✓ Use advanced type features appropriately
```typescript
// Example of proper generic typing
interface Repository<T extends { id: string }> {
  findById(id: string): Promise<T>;
  save(entity: Omit<T, 'id'>): Promise<T>;
}
```

## React Best Practices
- ✓ Implement functional components with proper hook usage
```typescript
// Example of clean component structure
interface UserProfileProps {
  userId: string;
  onUpdate: (user: User) => void;
}

export const UserProfile: React.FC<UserProfileProps> = ({
  userId,
  onUpdate
}) => {
  const user = useUser(userId);
  const handleSubmit = useCallback(...);
  
  return (/* JSX */);
};
```

## Testing Standards
- ✓ Write comprehensive tests for business logic
```typescript
// Example of proper test structure
describe('UserService', () => {
  describe('validateUser', () => {
    it('should return true for valid user data', () => {
      // Arrange
      const userData = {...};
      
      // Act
      const result = validateUser(userData);
      
      // Assert
      expect(result).toBe(true);
    });
  });
});
```

## Style Guidelines
- ✓ Follow consistent markdown formatting
  - Use proper heading hierarchy
  - Include code blocks with language specification
  - Use lists for multiple related items
  - Include proper spacing between sections
