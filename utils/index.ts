export const checkParams = (limit: number, offset: number): boolean => {
  return limit >= 0 && offset >= 0;
};

export const insertQueryParamsInURL = ({
  url,
  limit,
  offset,
}: {
  url: string;
  limit: number;
  offset: number;
}): string => {
  return `${url}?limit=${limit}&offset=${offset}`;
};
