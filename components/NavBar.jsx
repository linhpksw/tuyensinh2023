import Link from 'next/link';
import Image from 'next/image';
import { Disclosure, Transition } from '@headlessui/react';

const Navbar = () => {
    const navigation = ['Về chúng tôi', 'Lịch học', 'Giáo viên', 'Trợ giảng', 'Phản hồi'];

    return (
        <div className='w-full'>
            <nav className='container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0'>
                {/* Logo  */}
                <Disclosure>
                    {({ open }) => (
                        <>
                            <div className='flex flex-wrap items-center justify-between w-full lg:w-auto'>
                                <Link href='/'>
                                    <div className='flex items-center gap-2'>

                                        <Image src='/img/logo.svg' alt='logo' width='48' height='48' />

                                        <span className='text-lg text-gray-700'>Toán Ánh Sáng</span>
                                    </div>
                                </Link>

                                <Disclosure.Button
                                    aria-label='Toggle Menu'
                                    className='px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none'>
                                    <svg
                                        className='w-6 h-6 fill-current'
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'>
                                        {open && (
                                            <path
                                                fillRule='evenodd'
                                                clipRule='evenodd'
                                                d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'
                                            />
                                        )}
                                        {!open && (
                                            <path
                                                fillRule='evenodd'
                                                d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                                            />
                                        )}
                                    </svg>
                                </Disclosure.Button>

                                <Transition
                                    enter='transition duration-100 ease-out'
                                    enterFrom='transform scale-95 opacity-0'
                                    enterTo='transform scale-100 opacity-100'
                                    leave='transition duration-75 ease-out'
                                    leaveFrom='transform scale-100 opacity-100'
                                    leaveTo='transform scale-95 opacity-0'>
                                    <Disclosure.Panel className='flex flex-wrap w-full mt-5 lg:hidden'>
                                        <>
                                            {navigation.map((item, index) => (
                                                <Link
                                                    key={index}
                                                    href='/'
                                                    className='w-full px-4 py-2 -ml-4 text-gray-500 rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none'>
                                                    {item}
                                                </Link>
                                            ))}
                                        </>
                                    </Disclosure.Panel>
                                </Transition>
                            </div>
                        </>
                    )}
                </Disclosure>

                {/* menu  */}
                <div className='hidden text-center lg:flex lg:items-center'>
                    <ul className='items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex'>
                        {navigation.map((menu, index) => (
                            <li className='mr-3 nav__item' key={index}>
                                <Link
                                    href='/'
                                    className='inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800'>
                                    {menu}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>


            </nav>
        </div>
    );
};

export default Navbar;