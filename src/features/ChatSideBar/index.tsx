import Image from 'next/image';

// Local Components
import { LinkItem } from './components/LinkItem';

// Icons
import { ViewVerticalIcon } from '@radix-ui/react-icons';

type Props = {
  path?: string;
  active: boolean;
  setShowHistory: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ChatSideBar = ({ path, active, setShowHistory }: Props) => {
  return (
    <div className="flex h-screen w-[250px] flex-col min-w-content justify-between border-e bg-white">
      <div className="px-4 py-6">
        <span className="flex h-10 place-content-center rounded-lg text-xs text-gray-600 w-full">
          <Image
            src="/logo2.svg"
            alt="Logo"
            className="mx-auto"
            width={128}
            height={40}
          />

          <button
            className="p-2 z-50 rounded bg-white border aspect-square"
            onClick={() => setShowHistory(!active)}
          >
            <ViewVerticalIcon className="w-4 h-4 mx-auto" />
          </button>
        </span>

        <ul className="mt-6 space-y-1">
          <li>
            <LinkItem route="/" path={path} desc="Chat" />
          </li>

          <li>
            <LinkItem route="/settings" path={path} desc="Settings" />
          </li>

          <li>
            <LinkItem route="/templates" path={path} desc="Templates" />
          </li>

          <li>
            <LinkItem route="/agents" path={path} desc="Agents" />
          </li>

          {/*         
          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <span className="text-sm font-medium"> Account </span>

                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <ul className="mt-2 space-y-1 px-4">
                <li>
                  <a
                    href=""
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Details
                  </a>
                </li>

                <li>
                  <a
                    href=""
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Security
                  </a>
                </li>

                <li>
                  <form action="/logout">
                    <button
                      type="submit"
                      className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                    >
                      Logout
                    </button>
                  </form>
                </li>
              </ul>
            </details>
          </li> 
          */}
        </ul>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <a
          href="#"
          className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
        >
          <Image
            alt="Man"
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="aspect-square rounded-sm object-cover"
            width={40}
            height={40}
          />

          <div>
            <p className="text-xs">
              <strong className="block font-medium">Frederik Bode</strong>
              <span>thorbensen@gmail.com</span>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};
