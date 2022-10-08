import Image from 'next/image'

export const Search = () => {
  return (
    <div className="relative flex items-center text-black">
      <button className="absolute left-4">
        <Image src="/static/icons/search-icon.svg" layout="fixed" height={30} width={30} alt="" />
      </button>
      <input type="text" className="w-full px-12 py-3 border border-gray-900 rounded-md focus:border-blue-200" />
      <button className="absolute right-2">
        <Image src="/static/icons/mic-icon.svg" layout="fixed" height={30} width={30} alt="" />
      </button>
    </div>
  )
}
