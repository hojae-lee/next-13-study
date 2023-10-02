export default function Home() {
  const title = "재리 후래시";
  const subTitle = "by dev lee";
  const link = "https://white-blank.tistory.com/";

  return (
    <main>
      <div className="flex flex-col justify-self-center align-middle items-center text-center text-white">
        <div>
          <h4 className="text-lg">{title}</h4>
        </div>
        <div>
          <p className="text-sm">{subTitle}</p>
          <a href={link}>들우왕</a>
        </div>
      </div>
    </main>
  );
}
