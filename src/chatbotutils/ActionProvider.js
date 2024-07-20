class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
    
    greet() {
        const greetingMessage = this.createChatBotMessage("if you have a query related to the website mail to-podder.srabantika111@gmail.com else TYPE:➡ OTHER PROBLEM ");
        this.updateChatbotState(greetingMessage);
      }
    
      // New actions
    
      // Action to handle questions about the weather
      handleWeather() {
        const message = this.createChatBotMessage("I want to know about the webpage>>TYPE>> about ||| I want to add an account to the webpage>>TYPE>>acc ||| I want to to know about the website developers>>TYPE>>jod" );

        this.updateChatbotState(message);
      }
    
      // Action to provide help or assistance
      handleHelp() {
        const message = this.createChatBotMessage("Welcome to RentForGo, the ultimate destination for all your rental needs! Whether you're looking for a comfortable place to stay or have a property to rent out, RentEase is here to make the process smooth and hassle-free.");
        this.updateChatbotState(message);
      }
    
      // Action to handle user feedback
      handleFeedback() {
        const message = this.createChatBotMessage("The developer of this website is  srabantika podder");
        this.updateChatbotState(message);
      }
    
      // Action to handle unknown commands
      handleUnknown() {
        const message = this.createChatBotMessage("I'm sorry, I didn't understand that. Can you please rephrase?");
        this.updateChatbotState(message);
      }

      handleAccount(){
        const message = this.createChatBotMessage("Create your account on RentForGo.");
        this.updateChatbotState(message);
      }

    
    updateChatbotState(message) {
   
  // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
   
      
     this.setState(prevState => ({
          ...prevState, messages: [...prevState.messages, message]
      }))
    }
  }
  
  export default ActionProvider