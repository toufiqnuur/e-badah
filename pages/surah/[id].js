import useSWR from 'swr'
import { useRef, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Verse from '../../components/verse'

const fetcher = (url) => fetch(url).then(res => res.json())

export default function Surah() {
  const router = useRouter()
  const { id } = router.query
  
  const baseUrl = 'https://api.quran.sutanlab.id/surah/'
  const { data, error } = useSWR((baseUrl + id), fetcher)
  
  const audioRef = useRef()
 
  const playAudio = (event) => {
    const source = event.target.dataset.audio
    audioRef.current.src = source
    audioRef.current.play()
    audioRef.current.addEventListener('suspend', (e) => {
      console.log(e)
    })
  }
  
  if(error) return <p>Error</p>
  
  if(!data) return <p>Loading</p>
  
  if(data) {
    const { name, verses } = data.data
    return (
      <div className="max-w-screen-md mx-auto p-4" dir="rtl">
        <h1 className="text-3xl text-center">{name?.long}</h1>
        <p className="font-serif text-lg text-center mt-3">{name?.transliteration.id}</p>
        <div className="flex flex-col divide-y mt-10">
          <audio src="" ref={audioRef}>
          </audio>
          {verses && verses.map((verse, index) => (
            <Verse
              key={index}
              verse={verse} 
              onClick={playAudio}
            />
          ))}
        </div>
      </div>
    )
  }
}