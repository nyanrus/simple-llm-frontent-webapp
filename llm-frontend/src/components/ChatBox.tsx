import { createSignal, type Component } from 'solid-js';
import { fetchResponse } from '../api/gemini';

type Chat = { sender: 'user' | 'bot'; text: string };

const ChatBox: Component<{ onSendMessage?: (msg: string) => void }> = (props) => {
  const [message, setMessage] = createSignal('');
  const [chatHistory, setChatHistory] = createSignal<Chat[]>([]);

  const sendMessage = async () => {
    if (message().trim() === '') return;

    const userMessage = message();
    setChatHistory([...chatHistory(), { sender: 'user', text: userMessage }]);
    setMessage('');
    props.onSendMessage?.(userMessage);

    try {
      const response = await fetchResponse(userMessage);
      setChatHistory([...chatHistory(), { sender: 'bot', text: response }]);
    } catch (error) {
      console.error('Error fetching response:', error);
      setChatHistory([...chatHistory(), { sender: 'bot', text: 'Error fetching response' }]);
    }
  };

  return (
    <div class="w-full max-w-2xl mx-auto p-2 sm:p-4 flex flex-col min-h-0 flex-1" style="height:100dvh; min-height:0; overscroll-behavior:contain; overflow:hidden;">
      <div class="chat-history flex-1 mb-2 max-h-[60vh] overflow-y-auto" style="min-height:0;">
        {chatHistory().map((chat, index) => (
          <div class={`chat-message ${chat.sender} mb-1 sm:mb-2 text-sm sm:text-base break-words`} style={{
            'background': chat.sender === 'user' ? 'var(--md-sys-color-primary)' : 'var(--md-sys-color-surface-container)',
            'color': chat.sender === 'user' ? 'var(--md-sys-color-on-primary)' : 'var(--md-sys-color-on-surface)',
            'border-radius': '20px',
            'padding': '0.5rem 1rem',
            'margin-left': chat.sender === 'user' ? 'auto' : undefined,
            'margin-right': chat.sender === 'bot' ? 'auto' : undefined,
            'max-width': '80%',
            'box-shadow': 'var(--md-sys-elevation-1)',
            'border': '1px solid var(--md-sys-color-outline)'
          }}>
            {chat.text}
          </div>
        ))}
      </div>
      <div class="flex gap-2 pt-2 pb-safe bg-[var(--md-sys-color-surface)] w-full" style="position:fixed; left:0; right:0; bottom:calc(env(safe-area-inset-bottom,0) + 8px); z-index:50; max-width:100vw; padding-left:8px; padding-right:8px;">
        <div class="flex-1 flex max-w-2xl mx-auto gap-2">
          <input
            type="text"
            value={message()}
            onInput={(e) => setMessage(e.target.value)}
            class="flex-1 material-input"
            placeholder="Type your message..."
          />
          <button onClick={sendMessage} class="material-btn">Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;