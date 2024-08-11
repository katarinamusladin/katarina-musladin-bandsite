class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
  }

  async getComments() {
    const endPoint = "comments";
    const apiURL = `${this.baseUrl}/${endPoint}?api_key=${this.apiKey}`;

    try {
      const response = await axios.get(apiURL);
      const comments = response.data;
      return comments.sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
      );
    } catch (error) {
      console.log("Problem with getting comments!", error);
    }
  }

  async postComment(newComment) {
    const endPoint = "comments";
    const apiURL = `${this.baseUrl}/${endPoint}?api_key=${this.apiKey}`;

    try {
      const response = await axios.post(apiURL, newComment);
      return response.data;
    } catch (error) {
      console.log("Problem in posting comments!", error);
    }
  }
  async getShows() {
    const endPoint = "showdates";
    const apiURL = `${this.baseUrl}/${endPoint}?api_key=${this.apiKey}`;

    try {
      const response = await axios.get(apiURL);
      return response.data;
    } catch (error) {
      console.log("Problem with getting shows!", error);
    }
  }
}

export default BandSiteApi;
