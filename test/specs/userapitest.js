const UserApiService = require("../../services/apiservice");

randomUser = {
  name: "test user123",
  gender: "female",
  email: "testassignment123@yolo.com",
  status: "inactive",
};

describe("hub88", () => {
  it("Get users", async () => {
    const response = await UserApiService.getAllUsers();
    console.log("Status Code is: " + JSON.stringify(response.status));
    expect(response.status).toEqual(200);
  });

  it("POST - Create user response", async () => {
    const response = await UserApiService.addNewUser(randomUser);
    console.log("Status Code is: " + response.status);
    expect(response.status).toEqual(201);
    console.log("Name is: " + response.body.name);
    expect(response.body.name).toHaveTextContaining(randomUser.name);
    console.log("User id: " + response.body.id);
    createdUserId = response.body.id;
  });

  it("Delete - Delete created user", async () => {
    const response = await UserApiService.deleteUser(createdUserId);
    console.log("Status Code is: " + response.status);
    expect(response.status).toEqual(204);
  });
});
