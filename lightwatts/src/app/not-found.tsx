import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center">
      <h1 className="text-white font-gabarito text-9xl">404</h1>
      <h2 className="font-gabarito text-3xl mb-5">Saia de fininho... Não acenda as luzes.</h2>
      <button className="hover:scale-110 duration-500 shadow-md shadow-white
      bg-white border-2 border-white rounded-md text-black w-1/6 h-12">
        <Link className="text-3xl font-gabarito uppercase"
        href="/">
            Voltar
        </Link>
      </button>
    </div>
  )
}
