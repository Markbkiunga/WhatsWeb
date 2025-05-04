'use client';
import { ListFilter, LogOut, MessageSquareDiff, Search } from 'lucide-react';
import { Input } from '../ui/input';
import ThemeSwitch from './theme-switch';

import Conversation from './conversation';
import { UserButton } from '@clerk/nextjs';
import UserListDialog from './user-list-dialog';
import { useQuery } from 'convex/react';
import { api } from '../../../convex/_generated/api';
import { useEffect } from 'react';
import { useConversationStore } from '@/store/chat-store';
import { useConvexAuth } from 'convex/react';

const LeftPanel = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const conversations = useQuery(api.conversations.getMyConversations);
  const { selectedConversation, setSelectedConversation } =
    useConversationStore();

  useEffect(() => {
    const conversationIds = conversations?.map(
      (conversation) => conversation._id
    );
    if (
      selectedConversation &&
      conversationIds &&
      !conversationIds.includes(selectedConversation._id)
    ) {
      setSelectedConversation(null);
    }
  }, [conversations, selectedConversation, setSelectedConversation]);

  if (isLoading) {
    return (
      <div className="w-1/4 border-gray-600 border-r resize-x overflow-auto animate-pulse">
        <div className="sticky top-0 bg-left-panel z-10">
          <div className="flex justify-between bg-gray-primary p-3 items-center ">
            <div className="w-8 max-[450px]:hidden h-8 rounded-full bg-gray-tertiary" />
            <div className="flex flex-wrap items-center gap-3">
              <div className="w-8 h-8 rounded bg-gray-tertiary" />
              <div className="w-8 h-8 rounded bg-gray-tertiary" />
            </div>
          </div>
        </div>

        <div className="my-3 flex flex-col gap-2 p-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center gap-3 p-2">
              <div className="w-12 h-12 rounded-full bg-gray-tertiary" />
              <div className="max-[450px]:hidden  flex-1">
                <div className="h-4 w-24 bg-gray-tertiary rounded mb-2" />
                <div className="h-3 w-32 bg-gray-tertiary rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="w-1/4 border-gray-600 border-r resize-x overflow-auto max-[450px]:resize-none">
      <div className="sticky top-0 bg-left-panel z-10">
        {/* Header */}
        <div className="flex flex-wrap justify-between bg-gray-primary p-3 items-center max-[450px]:flex-col gap-3">
          <UserButton />

          <div className="flex flex-wrap justify-center items-center gap-3 max-[450px]:flex-col">
            {isAuthenticated && <UserListDialog />}
            <ThemeSwitch />
          </div>
        </div>
        {/* <div className="p-3 flex items-center"> */}
        {/* Search and FIlter to be worked on!!!*/}
        {/* <div className="relative h-10 mx-3 flex-1">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10"
              size={18}
            />
            <Input
              type="text"
              placeholder="Search or start a new chat"
              className="pl-10 py-2 text-sm w-full rounded shadow-sm bg-gray-primary focus-visible:ring-transparent"
            />
          </div>
          <ListFilter className="cursor-pointer" />
        </div> */}
      </div>

      {/* Chat List */}
      <div className="my-3 flex flex-col gap-0 overflow-y-auto max-h-[calc(100vh-120px)] min-h-0 px-1 scroll-smooth scrollbar-thin scrollbar-thumb-gray-500 max-[450px]:max-h-screen">
        {' '}
        {/* Conversations will go here*/}
        {conversations?.map((conversation) => {
          return (
            <Conversation key={conversation._id} conversation={conversation} />
          );
        })}
        {conversations?.length === 0 && (
          <>
            <p className="text-center text-gray-500 text-sm mt-3">
              No conversations yet
            </p>
            <p className="text-center text-gray-500 text-sm mt-3 ">
              Wow, no friends yet?🫢. Go ahead and start a conversation using
              the new chat button above.
            </p>
          </>
        )}
      </div>
    </div>
  );
};
export default LeftPanel;
