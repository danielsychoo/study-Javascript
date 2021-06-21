import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <Link href="/"><a>홈</a></Link>
      <Link href="/about"><a>소개</a></Link>
      <Link href="/ssr-test"><a>SSR 테스트</a></Link>
    </div>
  )
}

export default Header;
