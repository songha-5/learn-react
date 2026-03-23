import { useImmer } from 'use-immer'
import S from './ShoppingCart.module.css'
import { useId, useState } from 'react'

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  option: {
    amount: number
    checked: boolean
  }
}

const INITIAL_CART: CartItem[] = [
  {
    id: 'item-1',
    name: '기계식 키보드',
    price: 28100,
    quantity: 1,
    option: { 
      amount: 10,
      checked: false
    },
  },
  {
    id: 'item-2',
    name: '게이밍 마우스',
    price: 25300,
    quantity: 1,
    option: { 
      amount: 4,
      checked: false
    },
  },
]

export default function ShoppingCart() {
  // 상태(리액트를 작동하게 하는 데이터)
  const [cart, setCart] = useImmer(INITIAL_CART)

  // 파생된 상태 (상태에 의존해 ㄹ헨더링 마다 다시 계산된 값)
  const cartItemCount = cart.length
  const hasCartItem = cartItemCount > 0
  // 체크된 상품 항목을 필터링
  const checkedItems = cart.filter(({ option }) => option.checked)
  // every로도 가능함
  // cart.every(({ option }) => option.checked)
  const checkedItemsCount = checkedItems.length
  const isAllChecked = checkedItemsCount === cartItemCount
  // 전체 상품이 1개 이상 있으면서, '모든(every)' 상품의 checked가 true인지 확인
  // const isAllChecked = cartItemCount > 0 && cart.every(({ option }) => option.checked);

  // 체크된 상품 항목을 필터링

  // 누산된값
  const totalPrice = cart.reduce((total, { price, quantity }) => total + price * quantity, 0)//체크된 모든 상품의 가격 * 수량의 계산된 총 금액 (number)

  const updateQuantity = (itemId: CartItem['id'], delta: number) => {
    setCart((draft) => {
      // 전달된 아이템 ID와 일치하는 카트 아이템을 찾기
      const item = draft.find((item) => item.id === itemId)

      if (item) {
        const nextQuantity = item.quantity + delta

        // if (delta < 0) {
        //   item.quantity = Math.max(1, nextQuantity)
        // } else {
        //   item.quantity = Math.min(item.options.amount, nextQuantity)
        // }

        item.quantity =
          delta < 0
            ? Math.max(1, nextQuantity)
            : Math.min(item.option.amount, nextQuantity)
      }
    })
  }

  const deleteItem = (itemId: CartItem['id']) => {
    if(confirm('정말로 지우시겠습니까?')) {
      setCart((draft) => {
        const delectIndex = draft.findIndex((item) => item.id === itemId)
        if (delectIndex > -1) draft.splice(delectIndex, 1)
      })
    }
  }

  const handleClearCart = () => {
    setCart([])
  }
  const handleRestoreCart = () => {
    setCart(INITIAL_CART)
  }

  const toggleItem = (itemId: CartItem['id']) => {
    setCart((draft) => {
      const item = draft.find(item => item.id === itemId)
      if (item) item.option.checked = !item.option.checked;
    })
  }

  const handleAllToggle = () => {
    setCart(draft => {
      draft.forEach((item) => {
        item.option.checked = !isAllChecked
      })
    })
  }

  return (
    <section className={S.container}>
      <h2 className={S.title}>장바구니 실습 (수량 조절)</h2>

      {hasCartItem ? (
        <>
          <header className={S.header}>
            <input 
              type="checkbox" 
              id="all-checked" 
              className={S.checkbox} 
              checked={isAllChecked}
              onChange={handleAllToggle}
            />
            <label htmlFor="all-checked">전체 선택 (상품 {cartItemCount}개)</label>
          </header>
          <ul className={S.itemList}>
          {cart.map(({ id, name, price, quantity, option: { amount, checked } }) => {
              const isMinDisabled = quantity === 1
              const isMaxDisabled = quantity >= amount

              return (
                <li key={id} className={S.item}>
                  <input 
                    type="checkbox" 
                    className={S.checkbox} 
                    id={id}
                    checked={checked}
                    onChange={() => toggleItem(id)}
                  />
                  <label htmlFor={id}>
                    <div className={S.info}>
                      <p className={S.name}>{name}</p>
                      <p className={S.price}>{price.toLocaleString()}원</p>
                    </div>
                  </label>
                  <div className={S.controls}>
                    <button
                      type="button"
                      className={S.button}
                      aria-label={`${name} 수량 감소`}
                      aria-disabled={isMinDisabled}
                      onClick={() => {
                        if (isMinDisabled) return
                        updateQuantity(id, -1)
                      }}
                    >
                      -
                    </button>
                    <output className={S.quantity}>{quantity}</output>
                    <button
                      type="button"
                      className={S.button}
                      aria-label={`${name} 수량 증가`}
                      aria-disabled={isMaxDisabled}
                      onClick={() => {
                        if (isMaxDisabled) return
                        updateQuantity(id, 1)
                      }}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className={S.deleteButton}
                      aria-label={`장바구니에서 ${name} 상품 제거`}
                      onClick={() => deleteItem(id)}
                    >
                      삭제
                    </button>
                  </div>
                </li>
              )
            })}
          </ul>
          <footer className={S.footer} aria-live="polite">
            <span className={S.totalLabel}>결제 예정 금액</span>
            <output className={S.totalPrice}>{totalPrice.toLocaleString()}원</output>
          </footer>
        </>
      ) : (
        <p className={S.emptyMessage}>장바구니가 비어 있습니다.</p>
      )}

      {/* 조건부 UI 렌더링: '장바구니 비우기' / '장바구니 복구하기' */}
      {hasCartItem ? (
        <button type='button'
          className={S.transitionButton}
          onClick={handleClearCart}
        >
          장바구니 비우기
        </button>
      ) : (
        <button 
          type='button'
          onClick={handleRestoreCart}
        >
          장바구니 복구하기
        </button>
      )}
    </section>
  )
}
