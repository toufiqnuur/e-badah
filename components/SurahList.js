import Link from 'next/link'

export default function SurahList({ data }) {
  return (
    <div className="divide-y mt-6 md:grid md:gap-x-10 md:grid-flow-col md:grid-rows-[repeat(57,minmax(0,1fr))]">
      {data.map((surah) => (
        <Link key={surah.index} href={`/quran/${surah.index}`}>
          <div passHref className={`${surah.index == 58 && 'md:border-none'} hover:bg-gray-100 p-4 flex items-center justify-between`}>
            <span className="text-black/50 font-extrabold w-[4ch]">{surah.index}.</span>
            <div className="flex-1 pl-1">
              <h5 className="text-lg font-semibold">{surah.latin}</h5>
              <p className="text-xs">{surah.translation} ({surah.ayah_count})</p>
            </div>
            <p className="text-2xl font-arabic" dir="rtl">{surah.arabic}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}