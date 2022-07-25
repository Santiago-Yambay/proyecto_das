export interface AccountFindResponse {
  productVersion: string;
  serverId: number;
  ServerIdLocator: {
    billingServerId: number;
  };
  serverDate: string;
  totalCount: number;
  output: {
    attribs: number;
    accountInternalId: number;
    accountExternalId: number;
    accountExternalIdType: number;
    accountCategory: number;
    accountProcessFlag: number;
    accountRatingStatus: number;
    accountStatus: number;
    accountStatusDt: string;
    accountTemplateId: number;
    accountType: number;
    acctSegId: number;
    applyDayAcrossSubscribers: boolean;
    billAddress1: string;
    billAddress2: string;
    billAddress3: string;
    billCity: string;
    billCountryCode: number;
    billDispMeth: number;
    billFmtOpt: number;
    billFname: string;
    billFranchiseTaxCode: number;
    billGeocode: string;
    billLname: string;
    billPeriod: string;
    billSequenceNum: number;
    billZip: string;
    billedFromDt: string;
    billingFrequency: number;
    billingServiceCenter: number;
    cdrInsertCutoffDt: string;
    cdrTransCutoffDt: string;
    chargeThreshold: {
      longValue: number;
      value: number;
    };
    chgDate: string;
    chgWho: string;
    childCount: number;
    collectionIndicator: number;
    collectionStatus: number;
    collectionsServiceCenter: number;
    contact1Phone: string;
    converted: number;
    creditRating: number;
    currencyCode: string;
    custEmail: string;
    custGeocode: string;
    custPhone1: string;
    cyclicalThreshold: {
      longValue: number;
      value: number;
    };
    dateActive: string;
    dateCreated: string;
    exrateClass: number;
    extendedData: string;
    gender: number;
    globalContractStatus: number;
    hierarchyAccountExternalId: number;
    hierarchyAccountExternalIdType: number;
    hierarchyAccountInternalId: number;
    id2Hash: number;
    inRatingDb: boolean;
    insertGrpId: number;
    is1sa: boolean;
    isActivated: boolean;
    isCssRegistered: boolean;
    isTmlEnabled: boolean;
    languageCode: number;
    liabilityRedirectFlag: boolean;
    mktCode: number;
    msgGrpId: number;
    nextBillDate: string;
    noBill: boolean;
    notificationLanguageId: number;
    owningCostCtr: number;
    paymentProfileId: number;
    preferredContactLanguage: number;
    prevBalanceRefResets: number;
    prevBalanceRefno: number;
    prevBillRefResets: number;
    prevBillRefno: number;
    printServiceCenter: number;
    rateClassDefault: number;
    regulatoryId: number;
    remittanceServiceCenter: number;
    rerateLock: number;
    resellerId: number;
    revRcvCostCtr: number;
    serviceInquiryServiceCenter: number;
    suppressAccountNotification: boolean;
    threshold: {
      longValue: number;
      value: number;
    };
    tmlLimit: {
      longValue: number;
      value: number;
    };
    upsellTemplateId: number;
    vipCode: number;
  };
}
