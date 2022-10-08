import { useRouter } from 'next/router'
import Link from 'next/link'

import { BookIcon, HomeIcon, UserIcon } from '@components/Icons'
import { Container } from '@components/Layout'

export const BottomMenu = () => {
  const { asPath } = useRouter()

  return (
    <div className="fixed bottom-0 w-full pt-4 pb-2 bg-white border-t border-l border-r border-gray-400 rounded rounded-t-3xl">
      <Container className="flex items-center justify-between w-9/12 py-1 mx-auto">
        <button>
          <Link href="/" passHref>
            <a>
              <HomeIcon width="26" height="26" color={asPath === '/' ? 'blue' : 'black'} />
            </a>
          </Link>
        </button>
        <button>
          <Link href="/recipes" passHref>
            <a>
              <BookIcon width="26" height="26" color={asPath === '/recipes' ? 'blue' : 'black'} />
            </a>
          </Link>
        </button>
        <button>
          <Link href="/profile" passHref>
            <a>
              <UserIcon width="26" height="26" color={asPath === '/profile' ? 'blue' : 'black'} />
            </a>
          </Link>
        </button>
      </Container>
    </div>
  )
}
