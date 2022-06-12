import Image from "next/image"
import { BellIcon, SearchIcon } from "@heroicons/react/outline"
import Link from "next/link"
import { useEffect, useState } from "react"

function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header className={`${isScrolled && 'bg-[#141414]'}`}>
            <div className="flex items-center space-x-2 md:space-x-10">
                <Image
                    src="https://ik.imagekit.io/ec3987k0v/Playground_Files/Netflix_clone_app/Netflix_logo_p-_VyWjAg.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1654978115730"
                    width={100}
                    height={27}
                    className="cursor-pointer object-contain"
                />
                <ul className="hidden space-x-4 md:flex">
                    <li className="headerLink">Movies</li>
                    <li className="headerLink">New & Popular</li>
                    <li className="headerLink">TV Shows</li>
                    <li className="headerLink">My List</li>
                    <li className="headerLink">Home</li>
                </ul>
            </div>
            <div className="flex items-center space-x-4 text-sm font-light">
                <SearchIcon className="hidden h-6 w-6 sm:inline" />
                <p className="hidden lg:inline">Kids</p>
                <BellIcon className="h6 w-6" />
                <Link href="/account">
                    <a>
                        <Image
                            src="https://ik.imagekit.io/ec3987k0v/Playground_Files/Netflix_clone_app/profile_pic_OWyKGOR61.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654981134158"
                            width={32}
                            height={32}
                            className="cursor-pointer rounded"
                        />
                    </a>
                </Link >
            </div>
        </header>
    )
}

export default Header