import './App.css'

import React, { useState } from 'react'

function App() {
  const [nilai, setNilai] = useState({
    aspek_penilaian_1: {},
    aspek_penilaian_2: {},
    aspek_penilaian_3: {},
    aspek_penilaian_4: {},
  })

  const handleChangeNilai = (aspekPenilaian, mahasiswa, nilai) => {
    setNilai((prevNilai) => ({
      ...prevNilai,
      [aspekPenilaian]: {
        ...prevNilai[aspekPenilaian],
        [mahasiswa]: nilai,
      },
    }))
  }

  const handleSimpan = () => {
    const jsonString = JSON.stringify(nilai)
    console.log(jsonString)
  }

  const renderRows = () => {
    const rows = []
    for (let i = 0; i < 10; i++) {
      const mahasiswa = `mahasiswa_${i + 1}`
      const inputFields = []
      for (let j = 0; j < 4; j++) {
        const aspekPenilaian = `aspek_penilaian_${j + 1}`
        inputFields.push(
          <td key={`${mahasiswa}_${aspekPenilaian}`}>
            <select
              value={nilai[aspekPenilaian][mahasiswa] || ''}
              onChange={(e) => handleChangeNilai(aspekPenilaian, mahasiswa, e.target.value)}
            >
              <option value="">Pilih Nilai</option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((nilaiValue) => (
                <option value={nilaiValue} key={nilaiValue}>
                  {nilaiValue}
                </option>
              ))}
            </select>
          </td>
        )
      }
      rows.push(
        <tr key={mahasiswa}>
          <td>Mahasiswa {i + 1}</td>
          {inputFields}
        </tr>
      )
    }
    return rows
  }

  return (
    <div>
      <h2>Aplikasi Penilaian Mahasiswa</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Aspek Penilaian 1</th>
            <th>Aspek Penilaian 2</th>
            <th>Aspek Penilaian 3</th>
            <th>Aspek Penilaian 4</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
      <button onClick={handleSimpan}>Simpan</button>
    </div>
  )
}

export default App
