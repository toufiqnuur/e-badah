import Link from 'next/link'
import Container from '@/components/Container'
import SurahList from '@/components/SurahList'
import JuzAmmaSurahList from '@/data/juz_amma_surah_list.json'
import { useState } from 'react'

export default function Quran() {
  const surahList = JuzAmmaSurahList
  const [searchData, setSearchData] = useState(null)
  
  function handleSearch(event) {
    const query = event.target.value.trim().toLowerCase()
    const result = surahList.filter(surah => {
      return surah.latin.toLowerCase().includes(query) || surah.index == query
    })
    setSearchData(result)
  }
  
  return (
    <Container>
      <div className="rounded-3xl p-4 bg-gradient-to-b from-blue-500 to-indigo-600">
        <div className="text-center pt-2">
          <h1 className="text-white text-xl font-extrabold">Juz Amma</h1>
          <p className="text-sm text-white/70">Dilengkapi audio, latin dan terjemahan</p>
        </div>
        <form className="mt-6 md:max-w-md mx-auto">
          <input 
            className="w-full text-white bg-white/10 backdrop-blur placeholder:text-white/70 focus:ring-2 focus:ring-white px-3 py-2 border rounded outline-none" 
            type="text" 
            placeholder="Mau baca surah apa? (e.g 'Al Fatihah', '1')"
            onChange={handleSearch}
            required/>
        </form>
      </div>
      
      <SurahList data={searchData || surahList} />
    </Container>
  )
}