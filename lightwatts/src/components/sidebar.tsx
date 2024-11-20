import Image from 'next/image';
import Link from 'next/link';

const Sidebar = ({ setView }: { setView: (view: string) => void }) => {
  return (
    <div className="w-1/3 flex justify-center border-r border-black min-h-screen p-4 bg-white">
      <div className="h-full flex flex-col justify-start items-center space-y-6">
        
        {/* Logo */}
        <div className="flex justify-center">
          <Link href="/">
            <Image
              className="inline hover:scale-125 duration-500"
              src="/img/logo.png"
              alt="Logo da Empresa"
              width={50}
              height={50}
            />
          </Link>
        </div>
        
        {/* Página Inicial */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-black">Página Inicial</h3>
          <p className="text-gray-600">Bem-vindo à área de trabalho da LightWatts! Gerencie seus dispositivos e visualize relatórios sobre o consumo de energia.</p>
        </div>

        {/* Opções de navegação */}
        <ul className="space-y-4 w-full text-center">
          <li>
            <button
              onClick={() => setView("adicionar")}
              className="w-full text-left p-2 border-b border-black text-black hover:bg-gray-100"
            >
              Adicionar
            </button>
          </li>
          <li>
            <button
              onClick={() => setView("atualizar")}
              className="w-full text-left p-2 border-b border-black text-black hover:bg-gray-100"
            >
              Atualizar
            </button>
          </li>
          <li>
            <button
              onClick={() => setView("deletar")}
              className="w-full text-left p-2 border-b border-black text-black hover:bg-gray-100"
            >
              Deletar
            </button>
          </li>
          <li>
            <button
              onClick={() => setView("checar")}
              className="w-full text-left p-2 border-b border-black text-black hover:bg-gray-100"
            >
              Checar Eletrodomésticos
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
