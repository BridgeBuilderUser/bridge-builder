import { useState } from 'react'
import { Dialog, Switch } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/20/solid'
import {
    BellIcon,
    CreditCardIcon,
    CubeIcon,
    FingerPrintIcon,
    UserCircleIcon,
    UsersIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Invoices', href: '#' },
    { name: 'Clients', href: '#' },
    { name: 'Expenses', href: '#' },
]
const secondaryNavigation = [
    { name: 'General', href: '#', icon: UserCircleIcon, current: true },
    { name: 'Security', href: '#', icon: FingerPrintIcon, current: false },
    { name: 'Notifications', href: '#', icon: BellIcon, current: false },
    { name: 'Plan', href: '#', icon: CubeIcon, current: false },
    { name: 'Billing', href: '#', icon: CreditCardIcon, current: false },
    { name: 'Team members', href: '#', icon: UsersIcon, current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function About() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [state, setState] = useState('General')

    return (
        <>
            <div className="mx-auto max-w-7xl pt-16 lg:flex lg:gap-x-16 lg:px-8">
                <aside className="flex overflow-x-auto border-b border-gray-900/5 py-4 lg:block lg:w-64 lg:flex-none lg:border-0 lg:py-20">
                    <nav className="flex-none px-4 sm:px-6 lg:px-0">
                        <ul role="list" className="flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col">
                            {secondaryNavigation.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className={classNames(
                                            item.current
                                                ? 'bg-gray-50 text-indigo-600'
                                                : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                            'group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm leading-6 font-semibold'
                                        )}
                                        onClick={() => setState(item.name)}
                                    >
                                        <item.icon
                                            className={classNames(
                                                item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                                                'h-6 w-6 shrink-0'
                                            )}
                                            aria-hidden="true"
                                        />
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>
                {state === 'General' && (
                    <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">
                        <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
                            <div>
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-500">
                                    This information will be displayed publicly so be careful what you share.
                                </p>
                            </div>
                        </div>
                    </main>
                )}

                {state !== 'General' && (
                    <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">
                        <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
                            <div>
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Coming soon</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-500">
                                    Information will be about <span className='font-semibold'>{state}</span>
                                </p>
                            </div>
                        </div>
                    </main>
                )}

            </div>
        </>
    )
}
