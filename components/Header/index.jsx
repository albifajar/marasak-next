import Image from 'next/image'
import { UserIcon } from '@components/Icons'
import { useToggle } from 'react-use'
import { Transition } from '@headlessui/react'

export const Header = () => {
  const [menuState, toggleMenu] = useToggle(false)
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="relative w-[9rem] h-[2.25rem]">
          {/* to do make default image when image is null */}
          <Image src="/static/images/main-logo.png" layout="fill" alt="image" objectFit="contain" />
        </div>
        <div onClick={() => toggleMenu()}>
          <UserIcon width="30" height="30" />
        </div>
      </div>
      <Transition
        show={menuState}
        enter="transition-all transform duration-100"
        enterFrom="max-h-0"
        enterTo="max-h-screen"
        leave="transition-all transform duration-100"
        leaveFrom="max-h-screen"
        leaveTo="max-h-0"
        className="absolute right-0 z-20 w-full origin-top bg-white shadow-lg top-[79px] lg:hidden h-[calc(100vh - 48px)] overflow-y-hidden">
        <div className="flex flex-col justify-between pt-4 pb-8 mx-5">
          <ul>
            <li className="py-3 border-b">Akun</li>
            <li className="py-3 border-b">Resep Saya</li>
          </ul>
        </div>
      </Transition>
    </>
  )
}
