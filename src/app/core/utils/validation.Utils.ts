export const validateResponseData = <T>(
  data: T,
  validate: (item: T) => boolean
): { validData: T; hasInvalidData: boolean } => {
   if (Array.isArray(data)) {
     const validData = data.filter(validate); 
     return {
       validData: validData as T,
       hasInvalidData: validData.length !== (data as T[]).length,
     };
   }

  return {
    validData: validate(data) ? data : ({} as T),
    hasInvalidData: !validate(data),
  };
};
