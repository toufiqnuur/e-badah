export default function Container({ className, children }) {
  return <div className={`${className} container px-4 md:px-0 mx-auto`}>{children}</div>
}