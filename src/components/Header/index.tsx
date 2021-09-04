import Link from 'next/link';
import { useRouter } from 'next/router';

import { SignInButton } from '../SignInButton';
import { Container, Content } from './styles';

export const Header = () => {
  const router = useRouter();

  return (
    <Container>
      <Content>
        <Link href="/">
          <img src="/images/logo-horizontal.svg" alt="Devnine Logo" />
        </Link>
        <nav>
          <ul>
            <Link href="/">
              <li className={router.pathname === '/' ? 'active' : ''}>Home</li>
            </Link>
            <Link href="/posts">
              <li className={router.pathname === '/posts' ? 'active' : ''}>
                Posts
              </li>
            </Link>
            <Link href="/videos">
              <li className={router.pathname === '/videos' ? 'active' : ''}>
                Vídeos
              </li>
            </Link>
            <Link href="/starter">
              <li className={router.pathname === '/starter' ? 'active' : ''}>
                Starter
              </li>
            </Link>
            <Link href="/booster">
              <li
                className={
                  router.pathname === '/booster' ? 'active-booster' : ''
                }
              >
                Booster
              </li>
            </Link>
          </ul>
        </nav>

        <SignInButton />
      </Content>
    </Container>
  );
};
