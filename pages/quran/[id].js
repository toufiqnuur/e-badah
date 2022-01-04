import fs from 'fs'
import Container from '@/components/Container'
import AyahList from '@/components/AyahList'
import SurahMeta from '@/components/SurahMeta'

export async function getStaticPaths() {
  const paths = Array.from({length: 114}, (_, i) => {
    return { 
      params: {
        id: `${i + 1}`
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { id } }) {
  const contents = JSON.parse(fs.readFileSync(`data/quran-surah/${id}.json`))

  return {
    props: {
      id,
      contents
    }
  }
}

export default function SurahBaca({ id, contents }) {

  const { 
    number,
    number_of_ayah,
    name_latin,
    text,
    translations
  } = contents[id]
  
  const ayah_list = Object.entries(text)
  const translations_list = translations.id.text
  
  return (
    <Container>
      <SurahMeta 
        data={{
          name_latin,
          number_of_ayah,
          translations: translations.id.name,
          number
        }}
      />
      <AyahList 
        id={id}
        ayah={ayah_list}
        translations={translations_list}
      />
    </Container>
  )
}