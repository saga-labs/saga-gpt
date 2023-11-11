import React from 'react';

// interfaces & types
import { MessageType } from '../interfaces/chat';

export const Message = ({ message }: { message: MessageType }) => {
  return (
    <div className="flex px-4 py-3">
      <div className="h-10 w-10 rounded flex-shrink-0 bg-gray-300"></div>
      <div className="ml-2">
        <div className="-mt-1">
          <span className="text-sm font-semibold">{message.sender}</span>
          <span className="ml-1 text-xs text-gray-500">
            {message.timestamp}
          </span>
        </div>
        <p className="text-sm">{message.message}</p>
        {/* <div className="flex space-x-2 mt-1">
          <button className="flex items-center pl-1 pr-2 h-5 bg-gray-300 hover:bg-gray-400 rounded-full text-xs">
            <span>❤️</span>
            <span className="ml-1 font-medium">5</span>
          </button>
        </div> */}
        {message.sender === 'ai' && (
          <div className="flex items-center mt-2">
            <div className="h-6 w-6 rounded flex-shrink-0 bg-gray-300"></div>
            <div className="h-6 w-6 rounded flex-shrink-0 bg-gray-300 ml-1"></div>
            <div className="h-6 w-6 rounded flex-shrink-0 bg-gray-300 ml-1"></div>
            <a className="text-blue-600 text-xs font-medium ml-1" href="#">
              3 versions
            </a>
            <span className="text-xs text-gray-600 ml-1"></span>
          </div>
        )}
      </div>
    </div>
  );
};
