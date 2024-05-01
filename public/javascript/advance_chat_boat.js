const chatInput = document.querySelector(".chat-input div");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");


let userMessage;
const API_KEY = "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";

const createChatLi =(message, className) => {
    //Create a chat <li> element passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
}
const generateResponse = (incomingChatLI) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = incomingChatLI.querySelector("p")

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user",
            content: userMessage}]
        })
    }

    //send post req to API, get response
    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        messageElement.textContent = data.choices[0].message.content;
    }).catch((error) => {
        messageElement.textContent = "Oops! Soomething went wrong. Please try again.";
    }).finally( () => chatbox.scrollTo(0, chatbox.scrollHeight));
}

const handleChat = () => {
    //  userMessage = chatInput.value.trim();
    userMessage =chatInput.innerText;
     if(!userMessage) return;
     chatInput.innerText = "";

     //append the user's message to chatbot
     chatbox.appendChild(createChatLi(userMessage, "outgoing"));
     chatbox.scrollTo(0, chatbox.scrollHeight);
     setTimeout(() => {
        //display thinking while waiting for message
        const incomingChatLI = createChatLi("Thinking...", "incoming")
        chatbox.appendChild(incomingChatLI);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLI);
        
     }, 600); 
}

sendChatBtn.addEventListener("click", handleChat);



