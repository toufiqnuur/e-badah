function toArabicNum(str) {
  return Number(str).toLocaleString('ar-EG')
}

export default function AyahList({ id, ayah, translations }) {
  return (
    <div className="divide-y mt-6">
      { id != 1 && (
        <p dir="rtl" className="text-center font-arabic text-2xl leading-[2.5] p-4 mb-6">﷽</p>
      )}
      
      {ayah.map((ayah, index) => (
        <div key={index} className="relative p-4">
          <span className="font-bold text-zinc-500 absolute top-0 left-0">{ayah[0]}</span>
          <p dir="rtl" className="font-arabic text-2xl leading-[2.5] mb-3">
            {ayah[1]} &nbsp;
            {toArabicNum(ayah[0])}
          </p>
          <p className="text-sm">{translations[index+1]}</p>
        </div>
      ))}
    </div>
  )
}