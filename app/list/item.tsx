`use clinet`;
import style from "./item.module.css";

const ListItem = () => {
  const goods = ["상품1", "상품2", "상품3"];

  return (
    <ul>
      {goods.map((item, idx) => (
        <li className={style.item__li} key={idx}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ListItem;
