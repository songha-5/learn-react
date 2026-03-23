import { useImmer } from 'use-immer'
import S from './ShoppingCart.module.css'

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  option: {
    amount: number
  }
}

const carts: CartItem[] = [
  { id: 'cart-1', name: '기계식 키보드', price: 28100, quantity: 1, option: { amount: 10 }},
  { id: 'cart-2', name: '게이밍 마우스', price: 25300, quantity: 1, option: { amount: 4 }},
]

export default function ShoppingCart() {
  // 상태(시간의 흐름에 따라 업데이트)
  const [cart, setCart] = useImmer(carts)

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

  return (
    <section className={S.container}>
      <h2 className={S.title}>장바구니 실습 (수량 조절)</h2>

      <ul className={S.itemList}>
        {cart.map(({id, name, price, quantity, option: { amount }}) => {
          const isMinDisabled = quantity === 1
          const isMaxDisabled = quantity >= amount

          return (
            <li className={S.item} key={id}>
              <div className={S.info}>
                <p className={S.name}>{name}</p>
                <p className={S.price}>{price.toLocaleString()}원</p>
              </div>

              <div className={S.controls}>
                <button
                  type="button" 
                  className={S.button} 
                  aria-label={`${name} 수량 감소`}
                  onClick={() => {
                    if (isMinDisabled) return
                    updateQuantity(id, -1)}
                  }
                  aria-disabled={isMinDisabled}
                >
                  -
                </button>
                <span className={S.quantity}>{quantity}</span>
                <button 
                  type="button" 
                  className={S.button} 
                  aria-label={`${name} 수량 증가`}
                  aria-disabled={isMaxDisabled}
                  onClick={() => updateQuantity(id, 1)}
                >
                  +
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
