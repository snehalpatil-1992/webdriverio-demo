const SupplierGamesPage = require("../pages/supplier-games.page");

describe("hub88", () => {
  it("should have the right title", async () => {
    await SupplierGamesPage.open("/");
    await expect(SupplierGamesPage.browser).toHaveTitle(
      "Hub88 - Seamless Wallet Integration | single API for casino operations"
    );
  });

  it("should search the suppliers with search text", async () => {
    await SupplierGamesPage.open("/suppliers");
    await SupplierGamesPage.searchList("Play");
    const searchArray = await SupplierGamesPage.searchListData();
    const searchInclude = await SupplierGamesPage.validateSearchList(
      searchArray
    );
    expect(searchInclude).toStrictEqual(true);
    console.log("All the suppliers matches with seach text - Play");
  });

  it("should click the supplier and navigate to games page", async () => {
    await SupplierGamesPage.open(SupplierGamesPage.firstSupplier);
    await expect(browser).toHaveTitle(
      "Hub88 - Seamless Wallet Integration | single API for casino operations"
    );
    console.log("Navigated to games page");
  });

  it("should open the game", async () => {
    await SupplierGamesPage.open(SupplierGamesPage.firstSupplier);
    await SupplierGamesPage.searchList("wild");
    await $("[href='/game/1457?provider=Play%27n+Go']").click();
    const isGameTextTitleDisplayed =
      await SupplierGamesPage.pageGameTitle.isDisplayed();
    expect(isGameTextTitleDisplayed).toStrictEqual(true);
    console.log("Game opened successfully");
  });
});
