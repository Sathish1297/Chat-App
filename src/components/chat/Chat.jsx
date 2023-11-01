import './chat.scss';
import cam from '../../image/cam.png';
import more from '../../image/more.png';
import person from '../../image/person.png';
import Messages from '../messages/Messages';
import Input from '../input/Input';
import { useContext } from 'react';
import { ChatContext } from '../../context/ChatContext';

const Chat = () => {

  const {data} = useContext(ChatContext);

  
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={cam} alt="" />
          <img src={person} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat;