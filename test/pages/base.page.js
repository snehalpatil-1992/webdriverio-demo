class BasePage {
  async open(path) {
    await browser.url(path);
  }

  get browser() {
    return browser;
  }

  debug() {
    this.browser.debug();
  }

  select(selector) {
    return this.$(selector);
  }
}

module.exports = BasePage;
