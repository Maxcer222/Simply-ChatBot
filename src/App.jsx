import { useState } from 'react'
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css'



function App(){
      const [theme, setTheme] = useState('light');
      const [chatMessages, setChatMessages] = useState([{
          message: 'hello chatbot',
          sender: 'user',
          id: 'id1',
          time: 1736127288920
        }, {
          message: 'Hello how can I help you?',
          sender: 'bot',
          id: 'id2',
          time: 1736127288920
        },{
          message: 'todays date?',
          sender: 'user',
          id: 'id3',
          time: 1736127288920

        },{
          message: 'todays is September 27',
          sender: 'bot',
          id: 'id4',
          time: 1736127288920

        },{
          message: 'Flip a coin',
          sender: 'user',
          id: 'id5',
          time: 1736127288920
        },{
          message: 'Sure! You got tails',
          sender: 'bot',
          id: 'id6',
          time: 1736127288920
        }]);
        //const [chatMessages, setChatMessages] = array;//the long versions of code above
        //const chatMessages = array[0];
        //const setChatMessages = array[1];

        function toggleTheme() {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

      return(

          <div className={`app-container ${theme}-theme`}> 
          <button onClick={toggleTheme} className="send-button">
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
            <ChatMessages 
             chatMessages={chatMessages}
            
            />
            <ChatInput 
             chatMessages={chatMessages}
             setChatMessages={setChatMessages}     
            />
           
            
        </div>

      );
     }
     


export default App
