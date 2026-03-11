import { useState } from 'react'
import S from './style.module.css'


// 카트(장바구니) 배열 안에 상품 객체를 추가할 건데
// 그 모양이 다음과 같음 (interface선언)
// - id (식별자)
// - name (사과이름)
// - count (사과 갯수)

interface Product {
  id: number
  name: string
  count: number
}

export default function ImmutabilityCRUD() {
  const [appleCart, setAppleCart] = useState<Product[]>([])

  // 추가
  const handleAddApple = () => {
    const newAppleProdcut: Product = {
      id: Date.now(),
      name: '애플',
      count: 1
    }

    const nextCart = [...appleCart, newAppleProdcut]

    setAppleCart(nextCart) // 상태 업데이트 트리거
  }

  // 증가
  const handleUpdateApple = (id:number, amount: number) => {
    const nextAppleCart = appleCart.map(apple => {
      if(apple.id === id) {
          return {
            ...apple,
            count: Math.max(1, apple.count + amount),
          }
        }
        return apple
    })

    setAppleCart(nextAppleCart)
  }

  // 삭제
  const handleDelete = (delectId: number) => {
    const delectApple = appleCart.filter((apple) => {
      if(apple.id !== delectId) return true
      return false
    })

    setAppleCart(delectApple)
  }


  return (
    <section className={S.container}>
      <h2 className={S.title}>사과 바구니 (Apple Cart)</h2>
      <button type='button' className={S.addButton} onClick={handleAddApple}>사과 추가하기</button>

      <ul className={S.itemList}>
        {appleCart.map((apple, index) => {
          return (
           <li key={index} data-id={apple.id} className={S.item}>
            <span className={S.info}>
              {apple.name} (수량 {apple.count})
            </span>
            <div role='group' className={S.controls}>
              <button
                type='button'
                aria-label='수량증가'
                className={S.countButton}
                onClick={()=>handleUpdateApple(apple.id, 1)}
              >
                +
              </button>
              <button
                type='button'
                aria-label='수량감소'
                className={S.countButton}
                onClick={()=>handleUpdateApple(apple.id, -1)}
              >
                -
              </button>
              <button
                type='button'
                aria-label='애플 삭제'
                className={S.deleteButton}
                onClick={()=>handleDelete(apple.id)}
              >
                삭제
              </button>
            </div>
          </li> 
          )
        })}
      </ul>
    </section>
  )
}
