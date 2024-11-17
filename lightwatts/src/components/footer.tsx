import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="flex justify-center items-center bg-black opacity-90 h-72 w-full">
        <ul className="flex flex-col items-center w-11/12 max-w-6xl gap-y-4">
          <div className="text-white font-lulo text-xl">
            Empresa apoiada por colaboradores
          </div>
          <div className='flex space-x-3 items-center'>
            <li>
              <Image src="/img/fiap.png" alt="FIAP" width={128} height={64} className="object-contain" />
            </li>
            <li>
              <Image src="/img/logo_completa.png" alt="Logo" width={128} height={64} className="object-contain" />
            </li>
          </div>
          <div className='flex space-x-8 items-center'>
            <li>
              <Image src="/img/fia.png" alt="FIA" width={90} height={64} className="object-contain" />
            </li>
            <li>
              <Image src="/img/mahindra.png" alt="Mahindra" width={90} height={64} className="object-contain" />
            </li>
            <li>
              <Image src="/img/ultragaz.png" alt="Ultragaz" width={90} height={64} className="object-contain" />
            </li>
            <li>
              <Image src="/img/ultracarga.png" alt="Ultracarga" width={90} height={64} className="object-contain" />
            </li>
          </div>
        </ul>
      </footer>
    </div>
  )
}
