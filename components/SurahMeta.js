export default function SurahMeta({ data }) {
  return (
    <div className="flex justify-between p-4 border bg-yellow-50">
      <div>
        <h1 className="font-semibold text-lg">
          {data.name_latin} 
          <span className="text-zinc-500"> ({data.number_of_ayah} ayat)</span>
        </h1>
        <p className="text-sm">{data.translations}</p>
      </div>
      <p className="text-sm">Surah ke - {data.number}</p>
    </div>
  )
}