import AsmaulHusnaList from '@/data/asmaul_husna.json'
import Container from '@/components/Container'

export default function AsmaulHusna() {
  return (
    <Container>
      <div className="divide-y">
        {AsmaulHusnaList.map(name => (
            <div key={name.index} className="hover:bg-gray-100 p-4 flex items-center justify-between">
              <span className="text-black/50 font-extrabold w-[4ch]">{name.index}.</span>
              <div className="flex-1 pl-1">
                <h5 className="text-lg font-semibold">{name.latin}</h5>
                <p className="text-xs">{name.translation}</p>
              </div>
              <p className="text-2xl font-arabic" dir="rtl">{name.arabic}</p>
            </div>
        ))}
      </div>
    </Container>
  )
}