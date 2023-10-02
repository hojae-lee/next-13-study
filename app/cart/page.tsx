import style from "./cart.module.css";

export default function Cart() {
  return (
    <div>
      <h4 className="title">Cart</h4>
      <div className={style.cart__item}>
        <p>상품명</p>
        <p>$40</p>
        <p>1개</p>
      </div>
      <div className={style.cart__item}>
        <p>상품명</p>
        <p>$40</p>
        <p>1개</p>
      </div>
    </div>
  )
}