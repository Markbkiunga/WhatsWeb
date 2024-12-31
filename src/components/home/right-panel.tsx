'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Video, X } from 'lucide-react';
import MessageInput from './message-input';
import MessageContainer from './message-container';
import ChatPlaceHolder from '@/components/home/chat-placeholder';
import GroupMembersDialog from './group-members-dialog';
import { useConversationStore } from '@/store/chat-store';
import { useConvexAuth } from 'convex/react';

const RightPanel = () => {
  const { isLoading } = useConvexAuth();
  const { selectedConversation, setSelectedConversation } =
    useConversationStore();

  if (isLoading) {
    return (
      <div className="w-3/4 bg-gray-secondary flex flex-col items-center justify-center py-10">
        <div className="flex flex-col items-center w-full justify-center py-10 gap-4">
          <div className="w-[320px] h-[188px] bg-gray-tertiary rounded animate-pulse" />
          <div className="h-9 w-96 bg-gray-tertiary rounded animate-pulse mt-5 mb-2" />
          <div className="w-1/2 h-12 bg-gray-tertiary rounded animate-pulse" />
        </div>
        <div className="w-1/2 h-4 mt-auto bg-gray-tertiary rounded animate-pulse" />
      </div>
    );
  }

  if (!selectedConversation) return <ChatPlaceHolder />;

  const conversationName =
    selectedConversation.name || selectedConversation.groupName;
  const conversationImage =
    selectedConversation.image || selectedConversation.groupImage;

  return (
    <div className="w-3/4 flex flex-col ">
      <div className="w-full sticky top-0 z-50">
        {/* Header */}
        <div className="flex justify-between bg-gray-primary p-3">
          <div className="flex gap-3 items-center">
            <Avatar>
              <AvatarImage
                src={conversationImage || '/placeholder.png'}
                className="object-cover"
              />
              <AvatarFallback>
                <div className="animate-pulse bg-gray-tertiary w-full h-full rounded-full" />
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p>{conversationName}</p>
              {selectedConversation.isGroup && (
                <GroupMembersDialog
                  selectedConversation={selectedConversation}
                />
              )}
            </div>
          </div>

          <div className="flex items-center gap-7 mr-5">
            <a href="/video-call" target="_blank">
              <Video size={23} />
            </a>
            <X
              size={16}
              className="cursor-pointer"
              onClick={() => setSelectedConversation(null)}
            />
          </div>
        </div>
      </div>
      {/* CHAT MESSAGES */}
      <MessageContainer />

      {/* INPUT */}
      <MessageInput />
    </div>
  );
};
export default RightPanel;
