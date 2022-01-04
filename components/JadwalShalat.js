const months = [
  'Januari', 'Februari',
  'Maret', 'April',
  'Mei', 'Juni',
  'Juli', 'Agustus',
  'September', 'Oktober',
  'Novemver', 'Desember'
]

export default function JadwalShalat({ date, data, wilayah, onChange }) {
  return (
    <div className="schedule__card">
      <div className="text-center md:px-4 md:flex md:justify-between">
        <h1 className="text-lg font-extrabold">Jadwal Shalat, {date.DATE} {months[date.MONTH]} {date.YEAR}</h1>
        <select onChange={onChange} className="text-center focus:ring-2 focus:ring-white/50 bg-transparent border-none outline-none">
          {wilayah.map((kota) => (
            <option value={kota.id} key={kota.id} selected={kota.id==1505}>{kota.name}</option>
          ))}
        </select>
      </div>
      <hr className="mt-4 mx-4" />
      <div className="text-center mt-6 grid grid-cols-4 md:grid-cols-8 gap-4">
        {data.map((item, index) => (
          <div key={index}>
            <h2 className="text-sm uppercase font-bold text-white/70">{item[0]}</h2>
            <p>{item[1]}</p>
          </div>
        ))}
      </div>
    </div>
  )
}