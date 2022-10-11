const superTest = require("supertest");
const reqresUrl = "https://gorest.co.in/public";
const request = superTest(reqresUrl);
const token = "89e206b2507d42ca3dd8f3ccefa5f01aaddb293c3cad083ee423700217504f09"

class UserApiService{

    async getAllUsers(){
       const response = await request.get(`/v2/users`).then((response) => {
            return response;
        });
        return response
    }

    async addNewUser(randomUser){
         const response = await request
      .post(`/v2/users`)
      .send(randomUser)
      .set('Authorization', 'Bearer '+token) // Works.
      .then((response) => {
        return response;
      });

      return response;
    }

    async deleteUser(id){
           const response = await request
      .delete('/v2/users/' + id)
      .set('Authorization', 'Bearer '+token) // Works.
      .then((response) => {
        return response;
      });
      return response;
    }
}

module.exports = new UserApiService();

