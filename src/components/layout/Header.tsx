import Link from 'next/link';
import { UserDropdown } from './UserDropdown';

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-xl font-bold">
            Employee Performance
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/employee/dashboard" className="text-gray-600 hover:text-gray-900">
              Dashboard
            </Link>
            <Link href="/employee/goals" className="text-gray-600 hover:text-gray-900">
              Goals
            </Link>
            <Link href="/employee/self-rating" className="text-gray-600 hover:text-gray-900">
              Self Rating
            </Link>
          </nav>
        </div>
        <UserDropdown />
      </div>
    </header>
  );
} 