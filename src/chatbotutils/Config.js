import { createChatBotMessage } from "react-chatbot-kit"


const config = { 
  botName: "LearningBot",
  initialMessages: [createChatBotMessage("Hi,Welcome to RentForGo, the ultimate destination for all your rental needs! Whether you're looking for a comfortable place to stay or have a property to rent out, RentEase is here to make the process smooth and hassle-free. if you have any query TYPE:-➡ 𝐈 𝐡𝐚𝐯𝐞 𝐚 𝐐𝐮𝐞𝐫𝐲")],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
    userMessageBox: {
      backgroundColor: "black", // Set the user input background color to black
      color: "#376B7E", // Set the user input text color to white
      fontWeight: "bold" // Make the user input text bold
    }
  },
}

export default config