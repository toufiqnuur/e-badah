import { atom } from 'recoil'

const transliteration = atom({
  key: 'translit',
  default: true
})

const translation = atom({
  key: 'translat',
  default: true
})

export {transliteration, translation}