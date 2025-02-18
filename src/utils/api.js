import axios from "axios";

const MOONDREAM_API_KEY = "" // Place your API key here
const MOONDREAM_API_ENDPOINT = "https://api.moondream.ai/v1/query"; // Use the /query endpoint

export const askMoonDream = async (imageBase64, question) => {
  try {
    const response = await axios.post(
      MOONDREAM_API_ENDPOINT,
      {
        image_url: `data:image/jpeg;base64,${imageBase64}`,
        question: question,
        stream: false, // Disable streaming for simplicity
      },
      {
        headers: {
          "X-Moondream-Auth": MOONDREAM_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.answer; // Assuming the API returns the answer in `data.answer`
  } catch (error) {
    console.error("Error calling Moon Dream API:", error);
    return "Sorry, I couldn't process your request.";
  }
};