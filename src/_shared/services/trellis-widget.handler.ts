/* global TrellisConnect */

let instance: TrellisHandler | null = null;

export const getHandler = (
  //tslint:disable-next-line
  onSuccessCallback: (param: any) => void,
  onFailCallback: () => void
) => {
  if (instance) return instance;

  instance = TrellisConnect.configure({
    // Your trellis API Client-Id
    client_id: 'CHALLENGE',
    onSuccess: onSuccessCallback,
    onFailure: onFailCallback,
  });

  return instance;
};
