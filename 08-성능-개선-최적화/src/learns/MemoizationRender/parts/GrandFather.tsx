import grandFatherImage from '@/assets/icons/grand-father.png'
import Father from './Father'
import S from './style.module.css'
import { memo } from 'react'
import GrandFather from '@/learns/DeepRender/parts/GrandFather'

// 렌더링 지연 시간(ms)
export const blockThreadTime = 0.2

const iconSize = 22

interface Props {
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
}

function GrandFather({ count, setCount }: Props) {

  console.log('%cGrandFather 렌더링', 'color: #349bf0')

  return (
    <section className={S.container}>
      <div className={S.grandFather}>
        <h2 className={S.title}>
          <img src={grandFatherImage} alt="" width={iconSize} height={iconSize} />
          그랜 파더 카운트: {count}
        </h2>
        <button type="button" aria-label='카운트 1증가' onClick={() => setCount(count + 1)}>
          카운트 ↑
        </button>
        <Father />
      </div>
    </section>
  )
}

// memo propsAreEqual
// 잘못하면 버그가 되니 신중하게 사용하기
export default memo(GrandFather, (prevProps, nextProps) => {
  // return true -> re-rander X
  // return false -> re-rander O 
  // 특정 속성만 비교해서, 리턴되게
  return prevProps.count === nextProps.count
})