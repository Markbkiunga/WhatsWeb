import { Lock } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';

const ChatPlaceHolder = () => {
  return (
    <div className="w-full bg-gray-secondary flex flex-col items-center justify-center py-10 px-5 overflow-auto resize-x'">
      <div className="flex flex-col items-center w-full justify-center py-10 gap-4">
        <Image src={'/desktop-hero.png'} alt="Hero" width={320} height={188} />
        <p className="text-3xl font-extralight mt-5 mb-2 text-center">
          Discover a New Way to Connect with WhatsWeb
        </p>
        <p className="w-1/2 text-center text-gray-primary text-sm text-muted-foreground">
          Designed to bring seamless connections to your fingertips, WhatsWeb
          offers everything you need to chat, call, and share like never before.
        </p>
      </div>
      <p className="w-1/2 mt-auto text-center text-base text-muted-foreground flex items-center justify-center gap-1">
        Crafted by
        <a
          href="https://linktr.ee/markbkiunga"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 font-semibold hover:underline transition-colors duration-200"
        >
          Mark Brian
        </a>
      </p>
    </div>
  );
};
export default ChatPlaceHolder;
