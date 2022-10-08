import Image from "next/image";

export const Search = () => {
  return (
    <div className="relative flex items-center text-black">
      <div className="absolute left-4">
        <Image
          src="/static/icons/search-icon.svg"
          layout="fixed"
          height={30}
          width={30}
          alt=""
        />
      </div>
      <input
        type="text"
        className="w-full px-12 py-3 border-2 border-black rounded-md focus:border-black"
      />
      <div className="absolute right-2">
        <Image
          src="/static/icons/mic-icon.svg"
          layout="fixed"
          height={30}
          width={30}
          alt=""
        />
      </div>
    </div>
  );
};
