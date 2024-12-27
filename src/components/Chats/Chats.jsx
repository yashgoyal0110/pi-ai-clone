import './Chats.css'
function Chats({messages}) {
  return (
    <div className="chat-container">
    {messages.map((message, index) => (
      <div key={index} className={`message ${message.type}`}>
        <div className="message-content">{message.content}</div>
      </div>
    ))}
  </div>
  )
}

export default Chats;