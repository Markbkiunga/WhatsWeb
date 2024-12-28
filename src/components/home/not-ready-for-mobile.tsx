import Image from 'next/image';

const NotReadyForMobile = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center p-6 bg-panel-header-background overflow-y-hidden">
      <div className="max-w-md text-center">
        <Image
          src="/under-construction.jpg"
          alt="WhatsApp"
          height={300}
          width={300}
          className="mx-auto mb-8"
        />
        <h1 className="text-2xl font-bold text-white mb-4">
          Mobile Version Coming Soon!
        </h1>
        <p className="text-gray-300 mb-6">
          I&apos;m working hard to bring you a great mobile experience. For now,
          please use the web version on your laptop or tablet.
        </p>
        <div className="text-sm text-gray-400">
          💻 Available on desktop and tablet browsers
        </div>
        <div className="text-xs text-gray-500 mt-8">
          Crafted with ♡ by Mark Brian
        </div>
      </div>
    </div>
  );
};

export default NotReadyForMobile;
