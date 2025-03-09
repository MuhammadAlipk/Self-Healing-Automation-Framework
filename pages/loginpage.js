import { expect } from "@playwright/test";
import { BasePage } from "./basepage";

export class LoginPage extends BasePage {
  /**
   * @param {import(playwright/test).Page} page;
   */
  constructor(page) {
    super(page);
    this.page = page;
    this.locators = {
      txtUserName: ["", "", ""],
      txtPassword: ["", "", ""],
      btnLogin: ["", "", ""],
    };
  }
}
