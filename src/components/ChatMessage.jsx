import dayjs from 'dayjs';
import Botimg from '..//assets/robot.png';
import Userimg from '../assets/USER.png';
import './ChatMessage.css';

export function ChatMessage({message,sender, time}){
          // const message = props.message;
          // const sender = props.sender;
          // const { message, sender } = props;

          /*
          if (sender === 'bot'){
            return(
              <div>
                <img src="robot.png" width = "50"/>
                {message}
              </div>

            );

          }
            */

          return (
            <div className={
              sender === 'user' 
                ? 'chat-message-user' 
                : 'chat-message-bot'
            }>
              {sender === 'bot' && (
                <img src={Botimg} className="chat-message-profile"/>
              )}
              <div className="chat-message-text">
                {message}

                {time&& (
                  <div className='chat-message-time'>
                    {dayjs(time).format('h:mma')}

                  </div>
                )}
              </div>
              
              {sender === 'user' && (
                <img src={Userimg} className="chat-message-profile"/>
              )}

            </div>
          );
        }