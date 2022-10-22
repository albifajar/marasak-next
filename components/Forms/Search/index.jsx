import { useEffect, useState } from 'react'
import { fetcher } from '@services/fetcher'
import { MicrophoneIcon, SearchIcon } from '@components/Icons'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

export const Search = ({ onSearch }) => {
  const { transcript, listening } = useSpeechRecognition()
  const [keyword, setKeyword] = useState('')

  const searchRecipes = (keyword_params) => {
    fetcher(process.env.API_URL + '/recipes?populate[thumbnail]=true&search=' + keyword_params).then((data) =>
      onSearch(data?.data)
    )
  }
  const handleSubmit = (e) => {
    if (e.code === 'Enter') {
      searchRecipes(keyword)
    }
  }

  useEffect(() => {
    if (listening === false && transcript != '') {
      setKeyword(transcript)
      searchRecipes(transcript)
    }
    return
  }, [listening])

  return (
    <>
      <div className="relative flex items-center text-black">
        <button className="absolute left-4">
          <SearchIcon />
        </button>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyPress={(e) => handleSubmit(e)}
          className="w-full px-12 py-3 border border-gray-400 rounded-md focus:border-blue-200"
        />
        <button className="absolute right-2" onClick={() => SpeechRecognition.startListening({ language: 'id' })}>
          <MicrophoneIcon color={listening ? 'red' : 'black'} />
        </button>
      </div>
    </>
  )
}
