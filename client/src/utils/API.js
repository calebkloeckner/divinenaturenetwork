import axios from "axios";

export default {
  // Gets all sermons
  getSermons: function() {
    return axios.get("/video");
  },
  // Gets the sermon with the given id
  getSermon: function(id) {
    return axios.get("/api/sermons/" + id);
  },
  // Deletes the sermon with the given id
  deleteSermon: function(id) {
    return axios.delete("/api/sermons/" + id);
  },
//   Saves a sermon to the database
  saveSermon: function(sermonData) {
    return axios.post("/video", sermonData);
  }
};
