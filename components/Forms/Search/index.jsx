import { useEffect, useState } from 'react'
import { fetcher } from '@services/fetcher'
import { NewMicrophoneIcon, NewSearchIcon } from '@components/Icons'
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
        <button className="absolute left-6">
          {isLoading ? (
            <div className="animate-spin">
              <div className="w-6 h-6 border-t-2 border-b-2 border-l-2 border-gray-500 rounded-full" />
            </div>
          ) : (
            <NewSearchIcon />
          )}
        </button>
        <form action="" onSubmit={(e) => handleSubmit(e)} className="w-full">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            // onKeyPress={(e) => handleSubmit(e)}
            className="w-full py-3 bg-gray-100 border border-white rounded-full px-14 focus:border-blue-200"
            placeholder="Search"
          />
        </form>
        <button className="absolute right-6" onClick={() => SpeechRecognition.startListening({ language: 'id' })}>
          <NewMicrophoneIcon color={listening ? 'red' : '#9496A1'} />
        </button>
      </div>
    </>
  )
}
