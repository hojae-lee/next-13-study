// Next13 은 폴더 방식 라우팅 방법을 사용. list/page.tsx 로 만들면, /list 로 만들어짐
import Link from "next/link";
import ListItem from "./item";

const List = () => {
  return (
    <div className="p-16 text-white">
      <h4>
        상품 목록 페이지
        <sub className="text text-slate-100">
          <Link href="/list/def">(def 페이지 가기)</Link>
        </sub>
      </h4>
      <ListItem />
    </div>
  );
};

export default List;
