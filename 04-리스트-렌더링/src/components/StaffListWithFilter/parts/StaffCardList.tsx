import type { Staff } from '../type/staff'
import StaffListCard from './StaffListCard'
import StaffListNpResult from './StaffListNoResult'

interface StaffListProps {
  staffs: Staff[]
}

export default function StaffList({ staffs }: StaffListProps) {

  // staffs 배열이 빈 경우, 조건부 렌더링
  if (staffs.length === 0) {
    return (
      <StaffListNpResult />
    )
  }

  // staffs 배열에 여러 아이템이 포함된 경우, 조건부 렌더링
  return (
    <>
      {staffs.map((staff, index) => {
        const isActive = staff.status === 'active'

        return (
          <StaffListCard key={index} isActive={isActive} staff={staff} />
        )
      })}
    </>
  )
}