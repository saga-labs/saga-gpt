import React from "react";
import Image from "next/image";

// Icons
import { Link2Icon } from "@radix-ui/react-icons";

interface MessageProps {
  sender: string;
  content: string;
  isUser?: boolean;
}

export const Message: React.FC<MessageProps> = ({
  sender,
  content,
  isUser,
}) => {
  const [messageId, setMessageId] = React.useState<string>("");

  // TODO: just a placeholder for now
  function generateShortId(length: number): string {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let shortId = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      shortId += characters.charAt(randomIndex);
    }

    return shortId;
  }

  // Example usage:
  React.useEffect(() => {
    setMessageId(generateShortId(6)); // Generates a 6-character short ID
  }, []);

  return (
    <article className="rounded border border-gray-100 bg-white">
      <div className="flex items-start gap-4 p-4">
        <div className="block shrink-0">
          {isUser ? (
            <Image
              alt="Speaker"
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=60"
              className="h-10 w-10 rounded-sm object-cover"
              width={40}
              height={40}
            />
          ) : (
            <Image
              alt="Speaker"
              src="https://images.unsplash.com/photo-1670163426610-69cdc930f4e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=60"
              className="h-10 w-10 rounded-sm object-cover"
              width={40}
              height={40}
            />
          )}
        </div>

        <div>
          <h3 className="font-medium text-md">{sender}</h3>

          <p className="line-clamp-2 text-sm text-gray-700">{content}</p>

          <div className="mt-2 sm:flex sm:items-center sm:gap-2">
            <div className="flex items-center gap-1 text-gray-500">
              <Link2Icon className="h-3 w-3" />
              <p className="text-xs">{messageId}</p>
            </div>

            <span className="hidden sm:block" aria-hidden="true">
              &middot;
            </span>

            <p className="hidden sm:block sm:text-xs sm:text-gray-500">
              02/10/2021
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
