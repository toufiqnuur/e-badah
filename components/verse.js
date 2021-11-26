import { useRecoilState } from 'recoil'
import { transliteration, translation } from '../store'
import { useEffect } from  'react'


export default function Verse({ verse, onClick }) {
  const [translit, setTranslit] = useRecoilState(transliteration)
  const [translat, setTranslat] = useRecoilState(translation)
  
  useEffect(() => {
    if(localStorage.quran) {
      const { translation, transliteration } = JSON.parse(localStorage.quran)
      setTranslat(translation)
      setTranslit(transliteration)
    }
  })
  
  return (
    <div className="relative py-3" id={verse.number.inSurah}>
      <div className="font-bold text-lg text-gray-400 absolute top-0 left-0">
        {verse.number.inSurah}
      </div>
      <p className="text-2xl leading-10 ml-8 cursor-pointer"
        data-audio={verse.audio.primary}
        onClick={onClick}>
        {verse.text.arab}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
        </svg>
      </p>
      <p className={`${translit ? 'block' : 'hidden'} font-serif text-gray-600 mt-2`}>{verse.text.transliteration.en}</p>
      <p dir="ltr" className={`${translat ? 'block' : 'hidden'} text-xs text-gray-500 mt-2`}>{verse.translation.id}</p>
    </div>
  )
}