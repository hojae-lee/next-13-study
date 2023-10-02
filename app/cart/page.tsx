import style from "./cart.module.css";
import itemInfo from './data'

export default function Cart() {
  return (
    <div>
      <h4 className={style.title}>Cart</h4>
      {itemInfo.map((item, idx) => (
        <CartItem name={item.name} price={item.price} qt={item.qt} key={idx}></CartItem>
      ))}
      <Banner content={'우리카드'} />
      <Banner content={'현대카드'} />
      <Btn color="blue" />
    </div>
  )
}

function CartItem({name, price, qt}: {name:string, price: number, qt: number}) {
  return (
    <div className={style.cart__item}>
      <p>{name}</p>
      <p>{price}</p>
      <p>{qt}</p>
    </div>
  )
}

function Banner({content}: {content: string}) {
  return(
    <h4>{content} 결제 행사중</h4>
  )
}

function Btn({color = 'red'}: {color: string}){
  return <button style={{ background : color }}>버튼임</button>
}

