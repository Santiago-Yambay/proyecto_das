export interface AccountFind {
  productVersion: string;
  serverId: number;
  securityToken: string; // Security token need to pass
  userIdName: string; // user name
  AccountInternalIdLocator: {
    accountExternalId: number; // parent_account_id
    accountExternalIdType: number;
  };
  ServerIdLocator: {
    billingServerId: number;
    ratingServerId: number;
  };
  requestLanguageCode: number;
  responseLogEnabled: boolean;
  account: {
    accountExternalId: {
      caseInsensitive: boolean;
      fetch: boolean;
      filters: {
        Equals: number; // parent_account_id
      };
    };
    mktCode: {
      caseInsensitive: boolean;
      fetch: boolean;
    };
  };
}
