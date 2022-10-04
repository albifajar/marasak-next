import Image from "next/image";

export const Search = () => {
  return (
    <div className="flex space-x-2 text-black">
      <Image
        src="/static/icons/search-icon.svg"
        layout="fixed"
        height={40}
        width={40}
        alt=""
      />
      <input type="text" className="w-full border-2" />
      <Image
        src="/static/icons/mic-icon.svg"
        layout="fixed"
        height={40}
        width={40}
        alt=""
      />
    </div>
  );
};
