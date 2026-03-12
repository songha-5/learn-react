import { useState } from 'react'
import StaffData from './data/staff.json' // JSON 파일
import type { Staff } from './type/staff' // 타입을 꺼내와서 쓰기
import S from './style.module.css'

 // 원본 손 터치X(불변성) // 타입지정
const INITTAL_STAFE: Staff[] = StaffData


export default function StaffList() {
  const [staffs] = useState(INITTAL_STAFE)
  const [firstStaff] = staffs
  return (
    <section className={S.container}>
      <header className={S.header}>
        <h2>알바생 관리 명부</h2>
        <span className={S.count}>총원 {staffs.length} 명</span>
      </header>


      <ul className={S.grid}>
        {staffs.map((person) => {
          const {id, name, phone, role, status, wage} = person
          const isActiveStatus = status === 'active'
          const staffClassname = `${S.statusBadge} ${isActiveStatus ? S.active : ''}`
          return (
            <li key={id} className={S.card}>
              <span
                role='status'
                aria-label='출근 중'
                title='출근 중'
                className={staffClassname.trim()}
              />
              <strong className={S.name}>{name}</strong>
              <span className={S.role}>{role}</span>

              <div className={S.infoGroup}>
                <div className={S.infoRow}>
                  <span className={S.label}>시급</span>
                  <span className={S.value}>{wage.toLocaleString()}원</span>
                </div>
                <div className={S.infoRow}>
                  <span className={S.label}>연락처</span>
                  <span className={S.value}>{phone}</span>
                </div>
              </div>
            </li>
          )
        })}
      </ul>

      {/* <search className={S.searchSection}>
        <div className={S.searchField}>
          <label htmlFor="staff-search" className="sr-only">
            스태프 검색 (이름, 역할, 연락처)
          </label>
          <input
            id="staff-search"
            type="search"
            className={S.searchInput}
            placeholder="이름, 역할 또는 연락처로 검색하세요"
          />
          <span className={S.searchIcon} aria-hidden="true">
            🔍
          </span>
        </div>

        <p className={S.searchHelp}>
          * 이름, 담당 업무(예: 주방, 홀), 전화번호 뒷자리로 빠르게 찾을 수
          있습니다.
        </p>
      </search>

      {staffs.length > 0 ? (
        <ul className={S.grid}>
          {staffs.map((staff, index) => {
            const isActive = staff.status === 'active'
            const statusLabel = isActive ? '출근 중' : '대기 중'

            return (
              <li key={index} className={S.card}>
                <span
                  className={`${S.statusBadge} ${isActive ? S.active : ''}`}
                  role="status"
                  aria-label={statusLabel}
                  title={statusLabel}
                >
                  <span className="sr-only">{statusLabel}</span>
                </span>

                <strong className={S.name}>{staff.name}</strong>
                <span className={S.role}>{staff.role}</span>

                <div className={S.infoGroup}>
                  <div className={S.infoRow}>
                    <span className={S.label}>시급</span>
                    <span className={S.value}>
                      {staff.wage.toLocaleString()}원
                    </span>
                  </div>
                  <div className={S.infoRow}>
                    <span className={S.label}>연락처</span>
                    <span className={S.value}>{staff.phone}</span>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      ) : (
        <div className={S.noResult}>
          <p className={S.noResultText}>
            <strong>"{'검색어'}"</strong>에 대한 검색 결과가 없습니다.
          </p>
          <button className={S.resetBtn}>검색 초기화</button>
        </div>
      )} */}
    </section>
  )
}
