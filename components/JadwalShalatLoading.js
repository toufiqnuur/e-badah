export default function JadwalShalat() {
  return (
    <div className="schedule__card">
      <div className="md:px-4 md:flex md:justify-between">
        <div className="w-[24ch] h-6 md:h-7 bg-white/50 mx-auto rounded md:m-0"></div>
        <div className="w-[16ch] h-5 mt-2 bg-white/50 mx-auto rounded md:m-0"></div>
      </div>
      <hr className="mt-4 mx-4" />
      <div className="mt-6 grid grid-cols-4 md:grid-cols-8 gap-4">
        {[1,2,3,4,5,6,7,8].map((item) => (
          <div key={item} className="flex flex-col items-center">
            <div className="w-[6ch] h-4 bg-white/50 rounded"></div>
            <div className="w-[4ch] h-5 mt-2 bg-white/50 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  )
}