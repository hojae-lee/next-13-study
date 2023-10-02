`use clinet`;
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

const ListItem = () => {
  const goods = [{name:"상품1", img: food0}, {name:"상품2", img: food1}, {name: "상품3", img:food2}];

  return (
    <ul className={style.item__container}>
      {goods.map((item, idx) => (
        <li className={style.item__li} key={idx}>
          <Image src={item.img} alt={`상품${idx}`} />
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ListItem;
