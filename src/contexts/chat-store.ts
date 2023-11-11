import { create } from 'zustand';

interface ChatState {
  chat: string;
  setChat: (id: string) => void;
}

const useChatStore = create<ChatState>()((set) => ({
  chat: '',
  setChat: (id) => set((state) => ({ chat: (state.chat = id) })),
}));
