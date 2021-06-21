import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <p>
        <Link href="/"><a>홈</a></Link>
      </p>
      <p>
        <Link href="/about"><a>소개</a></Link>
      </p>
      <p>
        <Link href="/ssr-test"><a>SSR 테스트</a></Link>
      </p>
    </div>
  )
}

export default Header;