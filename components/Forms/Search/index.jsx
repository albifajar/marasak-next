import { MicrophoneIcon, SearchIcon } from '@components/Icons'

export const Search = () => {
  return (
    <div className="relative flex items-center text-black">
      <button className="absolute left-4">
        <SearchIcon />
      </button>
      <input type="text" className="w-full px-12 py-3 border border-gray-400 rounded-md focus:border-blue-200" />
      <button className="absolute right-2">
        <MicrophoneIcon />
      </button>
    </div>
  )
}
