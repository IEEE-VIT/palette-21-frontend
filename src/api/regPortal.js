const axios = require("axios");

class regPortalApi {
  constructor(jwtToken, baseUrl) {
    this.header = {
      Authorization: "Bearer " + jwtToken,
      "Content-Type": "application/json",
    };
    this.configs = {
      headers: this.header,
      baseURL: baseUrl,
    };
  }
  async userForm(data) {
    const result = await axios.post("/user/round0", data, this.configs);
    return result;
  }
  async createTeam(data) {
    const result = await axios.post("/team/create", data, this.configs);
    return result;
  }
  async joinTeam(data) {
    const result = await axios.post("/invites/joinByCode", data, this.configs);
    return result;
  }
  async didFillForm() {
    const result = await axios.get("user/filledRound0", this.configs);
    return result;
  }
}

export default regPortalApi;
