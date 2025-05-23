import axios, { ResponseType } from "axios";

const githubClient = axios.create({
  baseURL: "https://proxy.openpin.org/",
});

export const fetchGithubAsset = async (
  assetUrl: string,
  type: ResponseType = "text"
) => {
  // Remove protocol and domain from the GitHub URL
  const githubPath = assetUrl.replace(/^https:\/\/github\.com\//, "");

  const response = await githubClient.get(githubPath, {
    responseType: type,
  });

  return response.data;
};
