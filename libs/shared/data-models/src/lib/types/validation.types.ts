/**
 * Type representing validation errors
 */
export type ValidationError = {
    field: string;
    message: string;
  };
  
  /**
   * Type representing the validation result
   */
  export type ValidationResult = {
    valid: boolean;
    errors: ValidationError[];
  }; 