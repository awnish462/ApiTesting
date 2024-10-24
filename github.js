import { Octokit } from "octokit";

// Initialize Octokit with authentication token
const octokit = new Octokit({
  auth: 'write_your_own_token'
});

var endpoint="/users/awnish462/followers";
// Define an async function to make the API request
async function fetchUserRepos() {
  try {
    const response = await octokit.request("GET /repos/awnish462/LibraryManagement", {
    //   const response = await octokit.request("GET"+ endpoint, {

      username: "awnish462",  // Correct the username parameter
    });

    console.log(response.data); // Handle the response data (list of repositories)
  } catch (error) {
    console.error('Error fetching repositories:', error);
  }
}

// Call the function
fetchUserRepos();


 