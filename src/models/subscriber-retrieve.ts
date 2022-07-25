export interface SubscriberRetrieve {
  userIdName?: string;
  securityToken?: string;
  subscriberId?: {
    subscriberId: number;
    subscriberExternalIdType: number;
    serviceInternalId: number;
    serviceInternalIdResets: number;
  };
  info?: {
    balances: boolean;
    offers: boolean;
  };
}
