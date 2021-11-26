import { transliteration, translation } from '../store'
import { useRecoilState, useRecoilTransactionObserver_UNSTABLE } from 'recoil'

export default function SettingModal() {
  const [translit, setTranslit] = useRecoilState(transliteration)
  const [translat, setTranslat] = useRecoilState(translation)
  
  useRecoilTransactionObserver_UNSTABLE(({snapshot}) => {
    const config = {
      translation: snapshot.getLoadable(translation).contents,
      transliteration: snapshot.getLoadable(transliteration).contents
    }
    localStorage.quran = JSON.stringify(config)
  })
  
  return (
    <div className="bg-gray-100 fixed w-full h-screen z-10">
      <div className="max-w-md mx-auto flex flex-col space-y-3 px-4 py-6">
        <h1 className="text-2xl font-semibold mb-3">Pengaturan</h1>
        <div className="flex flex-row justify-between">
          <label For="translation">Translation</label>
          <input 
            id="translation" 
            checked={translat}
            onChange={(e) => setTranslat(e.target.checked)}
            type="checkbox" />
        </div>
        <div className="flex flex-row justify-between">
          <label For="transliteration">Transliteration</label>
          <input 
            id="transliteration" 
            checked={translit}
            onChange={(e) => setTranslit(e.target.checked)}
            type="checkbox" />
        </div>
      </div>
    </div>
  )
}