// export const errorCatch = (error: any): string => {
//   const message = error?.response?.data?.message;

//   return message
//     ? typeof error.response.data.message === 'object'
//       ? message[0]
//       : message
//     : error.message;
// };

//safer error catch
type AxiosError = {
  response?: { data?: { message?: string | string[] } };
  message?: string;
};

export const errorCatch = (err: unknown): string => {
  const e = err as AxiosError;
  const msg = e?.response?.data?.message;

  if (Array.isArray(msg) && msg.length) return String(msg[0]);
  if (typeof msg === 'string') return msg;
  if (typeof e?.message === 'string') return e.message;
  return 'Unexpected error';
};
