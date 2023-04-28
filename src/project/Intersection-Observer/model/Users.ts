export interface PaginationResponse<T> {
  contents: T[];
}

export interface User {
  id: number;
  name: string;
}

export const users: User[] = Array.from(Array(1000).keys()).map((id) => {
  return {
    id,
    name: `myId_${id}`,
  };
});
