export type AuthorModel = {
  id: string;
  lastName: string;
  firstName: string;
};

export type CreateAuthorModel = Omit<AuthorModel, 'id'>;