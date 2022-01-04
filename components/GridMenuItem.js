import Link from 'next/link'
import Image from 'next/image'

export default function GridMenuItem({ href, icon, children }) {
  return (
    <Link href={href}>
      <a className="h-20 hover:bg-gray-100 focus:ring-2 hover:shadow-none border rounded-3xl shadow-lg flex items-center justify-center">
        <div className="text-center px-4">
          <Image src={`/icons/${icon}`} alt={children} width={24} height={24} />
          <h2 className="text-xs font-bold">{children}</h2>
        </div>
      </a>
    </Link>
  )
}