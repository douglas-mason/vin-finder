declare type TrellisHandler = {
  open: (e: React.SyntheticEvent) => void;
};

declare type TrellisConfigOptions = {
  client_id: string;

  onSuccess?: (accountId: string) => void;

  onFailure?: () => void;

  onClose?: () => void;

  track?: () => void;

  page?: () => void;

  webhook?: string;
};

declare const TrellisConnect: {
  configure: (options: TrellisConfigOptions) => TrellisHandler;
};
