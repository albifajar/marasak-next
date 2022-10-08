import { MicrophoneIcon, SearchIcon } from '@components/Icons'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

export const Search = () => {
  const { transcript, listening } = useSpeechRecognition()

  return (
    <>
      <div className="relative flex items-center text-black">
        <button className="absolute left-4">
          <SearchIcon />
        </button>
        <input
          type="text"
          defaultValue={transcript}
          className="w-full px-12 py-3 border border-gray-400 rounded-md focus:border-blue-200"
        />
        <button className="absolute right-2" onClick={SpeechRecognition.startListening}>
          <MicrophoneIcon color={listening ? 'red' : 'black'} />
        </button>
      </div>
    </>
  )
}
