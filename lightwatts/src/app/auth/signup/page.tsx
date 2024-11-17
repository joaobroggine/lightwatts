import SignupTemplate from '@/components/signup';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Login() {
  return (
    <div 
      style={{ 
        backgroundImage: `url('/img/background.jpg')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat'
      }}
      className="h-screen w-screen overflow-hidden flex items-center justify-center relative"
    >
      <div className="absolute top-4 left-6">
        <Link href="/">
          <Image
            className="hover:scale-110 duration-500"
            src="/img/logo.png"
            alt="Logo"
            width={60}
            height={60}
          />
        </Link>
      </div>
      <SignupTemplate/>
    </div>
  );
}
