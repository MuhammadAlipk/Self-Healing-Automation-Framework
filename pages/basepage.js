import { expect } from "@playwright/test";
export class BasePage {
  /**
   * @param {import(playwright/test).Page} page
   */
  constructor(page) {
    this.page = page;
    this.url = "https://opensource-demo.orangehrmlive.com/";
  }

  async findElement(Selectors, elementName, elementPosition) {
    for (const selector of Selectors) {
      const element = await this.page.locator(selector);
      if ((await element.count()) > 0) {
        return element;
      }
    }
    throw new Error(elementName + " not found on on " + elementPosition);
  }
}
