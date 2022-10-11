const BasePage = require("./base.page");
const supplierSelectors = require("../selectors/supplier-selectors");
class SupplierGamesPage extends BasePage {
  firstSupplier = "";
  get baseUrl() {
    return "https://hub88.io";
  }

  async open(path) {
    await super.open(this.baseUrl + path);
  }

  get pageGameTitle() {
    return $(".title");
  }

  get selectedGame() {
    return supplierSelectors.selectedGameUrl;
  }

  async validateSearchList(searchArray) {
    let searchInclude = true;
    for (let index = 0; index < (await searchArray.length); index++) {
      const element = await searchArray[index].getAttribute("href");
      if (!this.firstSupplier) this.firstSupplier = element;
      if (!element.includes("Play")) {
        searchInclude = false;
        break;
      }
    }
    return searchInclude;
  }

  async searchList(text) {
    await $(supplierSelectors.searchInput).clearValue();
    await $(supplierSelectors.searchInput).setValue(text);
  }

  async searchListData() {
    return await $$(supplierSelectors.searchList);
  }
}

module.exports = new SupplierGamesPage();
