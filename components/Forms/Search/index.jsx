import { useEffect, useState } from 'react'
import { fetcher } from '@services/fetcher'
import { MicrophoneIcon, SearchIcon } from '@components/Icons'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

export const Search = ({ onSearch }) => {
  const { transcript, listening } = useSpeechRecognition()
  const [keyword, setKeyword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const searchRecipes = (keyword_params) => {
    setIsLoading(true)
    fetcher(process.env.API_URL + '/recipes?populate[thumbnail]=true&search=' + keyword_params)
      .then((data) => onSearch(data?.data))
      .then(() => setIsLoading(false))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    searchRecipes(keyword)
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
          {isLoading ? (
            <div className="animate-spin">
              <div className="w-6 h-6 border-t-2 border-b-2 border-l-2 border-gray-500 rounded-full" />
            </div>
          ) : (
            <SearchIcon />
          )}
        </button>
        <form action="" onSubmit={(e) => handleSubmit(e)} className="w-full">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            // onKeyPress={(e) => handleSubmit(e)}
            className="w-full px-12 py-3 border border-gray-400 rounded-md focus:border-blue-200"
          />
        </form>
        <button className="absolute right-2" onClick={() => SpeechRecognition.startListening({ language: 'id' })}>
          <MicrophoneIcon color={listening ? 'red' : 'black'} />
        </button>
      </div>
    </>
  )
}
