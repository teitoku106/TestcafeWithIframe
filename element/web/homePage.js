import { Selector } from "testcafe";

class homePage {
  constructor() {
    this.iframe = Selector("#prospaFormFrame", { visibilityCheck: true });
    this.yourName = Selector('[name="fullName"]', { visibilityCheck: true });
    this.phoneNumber = Selector('[name="phonenumber"]', {
      visibilityCheck: true,
    });
    this.emailAddress = Selector('[name="emailaddress"]', {
      visibilityCheck: true,
    });
    this.companyName = Selector('[name="tradingName"]', {
      visibilityCheck: true,
    });
    this.industry = Selector('[name="industry"]', { visibilityCheck: true });
    this.termAndConditionsCheckBox = Selector('[name="termsandconditions"]', {
      visibilityCheck: true,
    });
  }
}

export default new homePage();
