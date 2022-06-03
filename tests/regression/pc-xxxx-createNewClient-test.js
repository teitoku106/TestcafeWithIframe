import * as createNewClient from "../../functions/web/createNewClient";
require("dotenv").config();

fixture.meta({
  epic: "pc-xxx",
  story: "pc-xxx",
})`Demo`;

test
  .meta("testID", "PC-xxxx")
  .meta("critial", "true")
  .meta("function_enable", "no")
  .meta("Author", "Kyle")
  .page(`${process.env.WEB_URL}`)(
  "PC-xxxx: Test create a new user",
  async () => {
    //input [Your name] - [Phone Number] - [Email address] - [Company name] 
    await createNewClient.createNewUser();
    //input [Select type of Industry, in this example I select "Health"]
    await createNewClient.selectIndustry("Health");
    //Click checkbox for Terms And Conditions
    await createNewClient.termsAndConditionsCheckBox();
  }
);
