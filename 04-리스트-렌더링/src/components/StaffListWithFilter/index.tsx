import { useState } from 'react'
import StaffData from './data/staff.json' // JSON 파일
import type { Staff } from './type/staff' // 타입을 꺼내와서 쓰기
import S from './style.module.css'
import StaffListSearch from './parts/StaffListSearch'
import StaffCardList from './parts/StaffCardList'
import StaffListInfo from './parts/StaffListHeader'

 // 원본 손 터치X(불변성) // 타입지정
const INITTAL_STAFE: Staff[] = StaffData


export default function StaffList() {
  const [staffs] = useState(INITTAL_STAFE)
  return (
    <section>
      <StaffListInfo staffs={staffs} />
      <StaffListSearch />

      <ul className={S.grid}>
        <StaffCardList staffs={staffs}/>
      </ul>
    </section>
  )
}
