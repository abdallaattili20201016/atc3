import React, { useState } from 'react';
import { MessageList, Input, ChatList } from 'react-chat-elements';
import 'react-chat-elements/dist/main.css';
import '../../styles/Messages.css';

function Messages() {
  // Sample contact list
  const [contacts] = useState([
    { id: 1, title: 'John Doe', subtitle: 'Hey there!', date: new Date() },
    { id: 2, title: 'Jane Smith', subtitle: 'Hello!', date: new Date() },
    { id: 3, title: 'Bob Johnson', subtitle: 'What’s up?', date: new Date() },
  ]);

  // Message history by contact ID
  const [messages, setMessages] = useState({
    1: [{ position: 'left', type: 'text', text: 'Hello John!', date: new Date() }],
    2: [{ position: 'left', type: 'text', text: 'Hello Jane!', date: new Date() }],
    3: [{ position: 'left', type: 'text', text: 'Hello Bob!', date: new Date() }],
  });

  const [currentContactId, setCurrentContactId] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const handleContactClick = (contactId) => {
    setCurrentContactId(contactId);
  };

  const handleSend = () => {
    if (inputValue.trim() === '' || currentContactId === null) return;

    const newMessage = {
      position: 'right',
      type: 'text',
      text: inputValue,
      date: new Date(),
    };

    // Messagesend the new message to the existing messages of the current contact
    setMessages((prevMessages) => ({
      ...prevMessages,
      [currentContactId]: [...(prevMessages[currentContactId] || []), newMessage],
    }));

    setInputValue('');
  };

  return (
    <div className="Messages-container">
      {/* Contact List Panel */}
      <div className="contact-list-panel">
        <h2>Contacts</h2>
        <ChatList
          className="chat-list"
          dataSource={contacts.map(contact => ({
            ...contact,
            onClick: () => handleContactClick(contact.id),
          }))}
        />
      </div>

      {/* Chat Window */}
      <div className="chat-window">
        {currentContactId ? (
          <>
            <div className="messages-container">
              <MessageList
                className="message-list"
                lockable={true}
                toBottomHeight={'100%'}
                dataSource={messages[currentContactId] || []}
              />
            </div>
            <div className="input-container">
              <Input
                placeholder="Type a message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                rightButtons={
                  <button onClick={handleSend} className="send-button">
                    Send
                  </button>
                }
              />
            </div>
          </>
        ) : (
          <div className="select-contact-message">
            <p>Select a contact to start chatting</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Messages;