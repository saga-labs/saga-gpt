import React from 'react';

// Components
import { Button } from './components/Button';

export const ModelSelect = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-between flex-shrink-0 w-16 border-r border-gray-300 bg-gray-200 py-3">
      <div className="flex flex-col space-y-3 items-center flex-shrink-0">
        <Button link="/chat" image="/openai.png" alt="OpenAI" />
        <Button link="/chat" image="/meta.png" alt="LLaMa2" />
        <Button link="/chat" image="/openai.png" alt="OpenAI" />
        <Button link="/chat" image="/meta.png" alt="LLaMa2" />

        <a
          className="flex items-center justify-center w-10 h-10 rounded-lg bg-transparent hover:bg-gray-400"
          href="#"
        >
          <svg
            className="w-6 h-6 fill-current"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
        </a>
      </div>

      <div className="mt-auto">
        <Button link="/chat" image="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="LLaMa2" />
      </div>
    </div>
  );
};

export default ModelSelect;
