/* global TrellisConnect */

let instance: TrellisHandler | null = null;

export const getHandler = () => {
  if (instance) return instance;

  instance = TrellisConnect.configure({
    // Your trellis API Client-Id
    client_id: '<API_CLIENT_ID>',
  });

  return instance;
};
