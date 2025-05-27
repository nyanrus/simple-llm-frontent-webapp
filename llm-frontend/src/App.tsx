/// <reference types="solid-js" />

import type { Component } from 'solid-js';
import { createSignal } from "solid-js";
import ChatBox from "./components/ChatBox";

const App: Component = () => {
  const [messages, setMessages] = createSignal<string[]>([]);

  const addMessage = (message: string) => {
    setMessages([...messages(), message]);
  };

  return (
    <div class="flex flex-col h-screen p-2 sm:p-4 bg-[var(--md-sys-color-surface)] max-w-full w-full mx-auto">
      <h1 class="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-center" style="color:var(--md-sys-color-primary)">LLM Frontend</h1>
      <ChatBox onSendMessage={addMessage} />
    </div>
  );
};

export default App;