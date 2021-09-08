import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { CgMenu } from 'react-icons/cg';

import SignInButton from '../SignInButton';
import { Section, Nav, Mobile, Navlink } from './styles';

export default function Header() {
  const router = useRouter();
  const [expanded, setExpanded] = useState('');

  return (
    <Section>
      <Nav>
        <Mobile>
          <Image
            src="/images/logo-horizontal.svg"
            alt="Devnine"
            width={300}
            height={82}
          />

          <div>
            <CgMenu
              style={{ height: '2rem', width: '2rem' }}
              onClick={() =>
                expanded === 'expanded'
                  ? setExpanded('')
                  : setExpanded('expanded')
              }
            />
          </div>
        </Mobile>

        <Navlink>
          <div className={expanded}>
            <ul>
              <Link href="/">
                <li className={router.pathname === '/' ? 'active' : ''}>
                  Home
                </li>
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
            <SignInButton />
          </div>
        </Navlink>
      </Nav>
    </Section>
  );
}
