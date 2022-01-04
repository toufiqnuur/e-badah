import Link from 'next/link'
import Image from 'next/image'
import Container from '@/components/Container'
import { MenuAlt3Icon } from '@heroicons/react/outline'

export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-10">
      <Container className="h-16 flex items-center justify-between">
        <Link href="/">
          <a className="ml-3 inline-flex space-x-1 text-lg font-extrabold uppercase">
            <Image src="/icons/lantern.png" width={24} height={24} alt="lantern icon"/>
            <span>E-badah</span>
          </a>
        </Link>
        <button className="p-3" type="button" aria-label="menu">
          <MenuAlt3Icon className="h-6 w-6" />
        </button>
      </Container>
    </header>
  )
}