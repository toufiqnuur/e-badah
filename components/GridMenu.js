export default function GeidMenu({ children }) {
  return (
    <div className="grid gap-4 mt-6 grid-cols-3 md:grid-cols-4">
      {children}
    </div>
  )
}