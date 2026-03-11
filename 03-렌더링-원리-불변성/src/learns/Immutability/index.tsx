import { useState } from 'react'
import S from './style.module.css'

export default function ImmutabilityTest() {
  const [items, setItems] = useState(['하나, 둘, 셋'])

  // JS 방식
  // const listItemsMarkup = []

  // for (const item of items) {
  //   // data -> JSX (React Element)
  //   listItemsMarkup.push(<li>{item}</li>)
  // }


  // const itemsMartup = items.map((item) => <li>{item}</li>)

  // 직접 수정 방식 (push)
  const handleMutation = () => {
    console.log('뮤테이션(변이)')

    items.push('넷, 다섯, 여섯')
    console.log(`원본 배열 데이터에 새로운 항목이 추가되었습니다. ${items}`)



    // ====================================== 
    // 배열을 복제하는 방법 1 slice (잘 안씀 이해만 하기)
    // 배열을 복제하는 메서드? array.slice()
    // const nextItems = items.slice() // 배열 복제 (메모리 상 다른 힙 주소)
    // nextItems.push('넷', '다섯', '여섯')
    // console.log({ items })
    // console.log({ nextItems })
    // ======================================

    // ====================================== 
    // 배열을 복제하는 구문
    const nextItems = [...items, '넷', '다섯', '아홉']
    // ====================================== 


    // 리액트에게 상태 업데이트와 렌더요청
    // 상태업데이트 함수인 setItems가 실행되면 상태가 변경되고 이름감지해 브라우저 화면을갱신한다
    setItems(nextItems)
  }

  // 새로운 배열 생성 방색 (spread)
  const handleKeepImmutable = () => {
    console.log('불변셩(Immutability) 유지')
  }

  return (
    <section className={S.container}>
      <h2 className={S.title}>불변성(Immutability) 관리 실습</h2>

      <div className={S.buttonGroup}>
        <button type='button' className={S.button} onClick={handleMutation}>
          직접 수정(push)
        </button>
        <button type='button' className={`${S.button} ${S.primary}`} onClick={handleKeepImmutable}>
          새 배열 생성 (spread)
        </button>
      </div>

      <div className={S.listWrapper}>
        <ul className={S.itemList}>
          {items.map((item) => 
            <li>{item}</li>
          )}
        </ul>
      </div>
    </section>
  )
}
