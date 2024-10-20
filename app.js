const inputPrompt = document.querySelector("#prompt");
const sendBtn = document.getElementById("send-btn");
const chatList = document.querySelector(".chat-list");
const header = document.querySelector("header");
const suggestions = document.querySelector(".suggestions");
const aiTextElement = document.querySelector(".incoming .text");
const userTextElement = document.querySelector(".outgoing .text");
const copyBtn = document.querySelector(".copy");
const cards = document.querySelectorAll(".card");

let userMessage = null;
let geminiMessage = null;

const API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCO0R5N0p_FklEypIy00bnD7Evi00m9Ctw";

<<<<<<< HEAD
cards.forEach((card) => {
  card.addEventListener("click", () => {
    const cardPrompt = document.querySelector(
      ".card .content .title"
    ).innerHTML;
    userMessage = cardPrompt;
=======
const formatText = (text) => {
  return text
    .replace(/\*\*\*(.*?)\*\*\*/g, "<strong>$1</strong>") // Bold for triple asterisks
    .replace(/\*(.*?)\*/g, "<em>$1</em>") // Italics for single asterisks (optional, if you need it)
    .replace(/\n/g, "<br>"); // Line breaks (optional)
};

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const cardPrompt = card.querySelector(".content .title").innerHTML;
    inputPrompt.value = cardPrompt; // Set the prompt input with selected card text
>>>>>>> afe2d8b (Initial commit from VS-Code)
    generateAPIResponse();
  });
});

copyBtn.addEventListener("click", () => {});

document.addEventListener("keydown", (key) => {
  if (key.key === "Enter") {
    if (inputPrompt.value != "") {
      userMessage = inputPrompt.value;
      if (
        chatList.style.display !== "block" &&
        header.style.display !== "none" &&
        suggestions.style.display !== "none"
      ) {
        setTimeout(() => {
          chatList.style.display = "block";
          header.style.display = "none";
          suggestions.style.display = "none";
        }, 2000);
        generateAPIResponse();
      } else {
        generateAPIResponse();
      }
    }
  }
});

sendBtn.addEventListener("click", () => {
  userMessage = inputPrompt.value;
  if (
    chatList.style.display !== "block" &&
    header.style.display !== "none" &&
    suggestions.style.display !== "none"
  ) {
    setTimeout(() => {
      chatList.style.display = "block";
      header.style.display = "none";
      suggestions.style.display = "none";
    }, 2000);
    generateAPIResponse();
  } else {
    generateAPIResponse();
  }
});

const generateAPIResponse = async () => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: userMessage }],
          },
        ],
      }),
    });
    const data = await response.json();
<<<<<<< HEAD

    const apiResonse = data?.candidates[0].content.parts[0].text;
    userTextElement.innerHTML = userMessage;
    aiTextElement.innerHTML = apiResonse;
=======
    const apiResonse = formatText(data?.candidates[0].content.parts[0].text);
    userTextElement.innerHTML = formatText(userMessage);
    aiTextElement.innerHTML = apiResonse;
    inputPrompt.value = "";
>>>>>>> afe2d8b (Initial commit from VS-Code)
  } catch (error) {
    console.log(error);
  }
};
