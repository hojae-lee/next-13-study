// 페이지 이동시 사용
import Link from "next/link";

interface NavLink {
  link: string;
  val: string;
}

const Header = () => {
  const linkList: NavLink[] = [
    {
      link: "/",
      val: "Home",
    },
    {
      link: "/list",
      val: "List",
    },
  ];

  return (
    <nav>
      {linkList.map((item, idx) => (
        <Link href={item.link} key={idx}>
          {item.val}
        </Link>
      ))}
    </nav>
  );
};

export default Header;
