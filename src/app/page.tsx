import LeftPanel from '@/components/home/left-panel';
import NotReadyForMobile from '@/components/home/not-ready-for-mobile';
import RightPanel from '@/components/home/right-panel';

export default function Home() {
  return (
    <main className="m-5">
      <div className="flex overflow-y-hidden h-[calc(100vh-50px)] max-w-[1700px] mx-auto bg-left-panel max-[425px]:hidden">
        {/* Green background decorator for Light Mode */}
        <div className="fixed top-0 left-0 w-full h-36 bg-green-primary dark:bg-transparent -z-30" />
        <LeftPanel />
        <RightPanel />
      </div>
      <div className="min-[425px]:hidden">
        <NotReadyForMobile />
      </div>
    </main>
  );
}
