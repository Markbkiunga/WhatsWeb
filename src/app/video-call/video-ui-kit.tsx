import { randomID } from '@/lib/utils';
import { useClerk } from '@clerk/nextjs';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

export function getUrlParams(url = window.location.href) {
  let urlStr = url.split('?')[1];
  return new URLSearchParams(urlStr);
}

export default function VideoUIKit() {
  const roomID = getUrlParams().get('roomID') || randomID(5);
  const { user } = useClerk();

  let myMeeting = (element: HTMLDivElement) => {
    const initMeeting = async () => {
      try {
        const res = await fetch(`/api/zegocloud?userID=${user?.id}`);
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status}`);
        }
        const { token, appID } = await res.json();

        const username =
          user?.fullName || user?.emailAddresses[0].emailAddress.split('@')[0];

        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForProduction(
          appID,
          token,
          roomID,
          user?.id!,
          username
        );

        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
          container: element,
          sharedLinks: [
            {
              name: 'Personal link',
              url:
                window.location.protocol +
                '//' +
                window.location.host +
                window.location.pathname +
                '?roomID=' +
                roomID,
            },
          ],
          scenario: {
            mode: ZegoUIKitPrebuilt.GroupCall,
          },
        });
      } catch (error) {
        console.error('Error initializing meeting:', error);
      }
    };
    initMeeting();
  };

  return (
    <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  );
}
