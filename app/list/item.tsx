'use client';

import { useState } from "react";
import style from "./item.module.css";
import Image from 'next/image'
import food0 from '/public/food0.png'
import food1 from '/public/food1.png'
import food2 from '/public/food2.png'

/**
 * 이미지 최적화 방법
  성능과 속도가 중요하다면 이미지 넣을 때 <Image /> 태그를 씁시다.
  그럼 자동으로 이미지 lazy loading & 사이즈 최적화 & layout shift 방지합니다.
 */
interface Goods {
  name: string,
  img: any,
  price: number
}

const ListItem = () => {
  const goods:Goods[] = [
    {name: "상품1", img: food0, price: 40},
    {name: "상품2", img: food1, price: 30},
    {name: "상품3", img: food2, price: 50}
  ];

  const stateArray = goods.map(() => 0)
  const [cnt, setCnt] = useState(stateArray);

  const clickHandler = (count: number, idx: number) => {
    // state 변경함수 사용시 새 state 와 기존 state 가 같으면 변경하지 않음. 그러니 카피 후, 해야함.
    /**
     * cnt[idx] += count
     * setCnt(copyCnt)
     */
    const copyCnt = [...cnt]
    copyCnt[idx] += count
    setCnt(copyCnt)
  }

  return (
    <ul className={style.item__container}>
      {goods.map((item, idx) => (
        <li className={style.item__li} key={idx}>
          <Image src={item.img} alt={`상품${idx}`} />
          <h3>{item.name}: ${item.price}</h3>
          <span>{cnt[idx]}</span>
          <button type="button" onClick={() => clickHandler(1, idx)}>+</button>
          <button type="button" onClick={() => clickHandler(-1, idx)}>-</button>
        </li>
      ))}
    </ul>
  );
};

export default ListItem;
