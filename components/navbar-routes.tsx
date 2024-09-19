'use client'

import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { Layout } from 'lucide-react';
import Link from 'next/link';
import { SearchInput } from './search-input';

export const NavbarRoutes = () => {
    const pathname = usePathname();
    
    const isTeacherPage = pathname?.startsWith("/teacher");
    const isPlayerPage = pathname?.includes("/chapter");
    const isSearchPage = pathname === "/search";
    // const isTeacher = currentProfile?.role === "ADMIN" || currentProfile?.role === "TEACHER";
  
  return (
    <>
    {isSearchPage && (
        <div className="hidden md:block">
            <SearchInput/>
        </div>
    )}
    <div className='flex gap-x-2 ml-auto'>
        {isTeacherPage || isPlayerPage ? (
            <Link href="/">
                <Button size="sm" variant="ghost">
                    <Layout className='h-4 w-4 mr-2'/>
                    Exit
                </Button>
            </Link>
        ) : (
            <Link href="/teacher/courses">
                <Button size="sm" variant="ghost">
                    Teacher Mode
                </Button>
            </Link>
        )}
        <UserButton/>
    </div>
    </>
  )
}
