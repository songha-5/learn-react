import { useState } from 'react'
import StaffData from './data/staff.json' // JSON 파일
import type { Staff } from './type/staff' // 타입을 꺼내와서 쓰기
import S from './style.module.css'
import StaffListSearch from './parts/StaffListSearch'
import StaffCardList from './parts/StaffCardList'
import StaffListInfo from './parts/StaffListHeader'


export default function StaffList() {
  const [staffs] = useState<Staff[]>(StaffData)
  const [search, setSearch] = useState('')

  const searchedStaffs = staffs.filter(staff => {
    const hasName =  staff.name.toLowerCase().includes(search.toLowerCase().trim())
    const hasRole =  staff.role.toLowerCase().includes(search.toLowerCase().trim())
    const hasPhone =  staff.phone.toLowerCase().includes(search.toLowerCase().trim())
    return hasName || hasPhone || hasRole
  })

  return (
    <section>
      <StaffListInfo staffs={staffs} searchedStaffs={searchedStaffs} />
      <StaffListSearch search={search} setSearch={setSearch} />

      <ul className={S.grid}>
        <StaffCardList staffs={searchedStaffs}/>
      </ul>
    </section>
  )
}
