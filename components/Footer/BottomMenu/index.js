import { Container } from '@components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export const BottomMenu = () => {
  return (
    <div className="fixed bottom-0 w-full pt-4 pb-2 border-t border-l border-r border-black rounded rounded-t-3xl">
      <Container className="flex items-center justify-between w-10/12 py-2 mx-auto">
        <div>
          <Link href="/" passHref>
            <a>
              <Image src="/static/icons/home-icon.svg" layout="fixed" height={30} width={30} alt="" />
            </a>
          </Link>
        </div>
        <div>
          <Link href="/recipes" passHref>
            <a>
              <Image src="/static/icons/book-icon.svg" layout="fixed" height={30} width={30} alt="" />
            </a>
          </Link>
        </div>
        <div>
          <Link href="/profile" passHref>
            <a>
              <Image src="/static/icons/user-icon.svg" layout="fixed" height={30} width={30} alt="" />
            </a>
          </Link>
        </div>
      </Container>
    </div>
  )
}
