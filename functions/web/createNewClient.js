import { t } from "testcafe";
import { Selector } from "testcafe";
import homePage from "../../element/web/homePage";
import userData from "../../data/userData.json";

export async function createNewUser() {
  await t
    .switchToIframe(homePage.iframe)
    .typeText(homePage.yourName, userData["new_account"][0]["yourName"])
    .typeText(homePage.phoneNumber, userData["new_account"][0]["phoneNumber"])
    .typeText(homePage.emailAddress, userData["new_account"][0]["emailAddress"])
    .typeText(homePage.companyName, userData["new_account"][0]["companyName"]);
}

export async function selectIndustry(type) {
  await t
    .click(Selector(homePage.industry))
    .click(Selector("option").withText(type));
}

export async function termsAndConditionsCheckBox() {
  await t.click(homePage.termAndConditionsCheckBox);
}
