import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";

export default function Sobre() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Seção de Introdução */}
      <section className="flex flex-col items-center justify-center flex-grow mt-32 border-b border-black">
        <h1 className="text-black text-3xl font-lulo pb-16">Sobre a LightWatts</h1>
      </section>

      <main className="text-black flex-grow p-4 sm:p-8 mb-24 mt-8">

        {/* Seção de Origem */}
        <section>
          <h2 className="font-lulo text-3xl mb-6 underline">Como nós surgimos</h2>
          <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-14">
            <p className="text-justify indent-2 lg:w-2/3">
              A LightWatts nasceu como resultado de um projeto universitário inovador, desenvolvido por alunos da FIAP em parceria com diversas empresas focadas em soluções sustentáveis. A ideia surgiu a partir de um desafio acadêmico que incentivava a criação de tecnologias voltadas para a eficiência energética e a redução do desperdício de recursos. Com o objetivo de contribuir para um futuro mais sustentável, a equipe utilizou seus conhecimentos em tecnologia para desenvolver um sistema de gestão de energia residencial, permitindo aos usuários monitorar e otimizar o consumo de eletricidade de seus dispositivos eletrônicos. Esse projeto acadêmico cresceu e evoluiu, transformando-se na LightWatts, uma empresa comprometida com a inovação e a sustentabilidade no setor de energia.
            </p>
            <div className="flex justify-center lg:justify-end">
              <Image src="/img/fiap-room.png" alt="Sala da FIAP" width={500} height={500}
                className="rounded-lg w-full max-w-xs lg:max-w-md"
              />
            </div>
          </div>
        </section>

        {/* Seção da Equipe */}
        <section className="mt-16">
          <h2 className="font-lulo text-3xl underline">Nossa equipe</h2>
          <div className="flex flex-wrap justify-center gap-12 mt-12">

            {/* Cartão - Lavínia */}
            <div className="bg-white border border-black rounded-lg shadow-lg p-6 w-full max-w-xs transform hover:scale-105 transition duration-500">
              <Image src="/img/lavinia.jpg" width={200} height={200} alt="Lavínia"
                className="mx-auto rounded-full"
              />
              <h3 className="text-2xl font-bold mt-6 text-center">Lavínia Park</h3>
              <p className="text-center underline">Desenvolvedora Front-End</p>
              <div className="flex justify-center gap-6 mt-6">
                <a
                  href="https://github.com/laviniapark"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-700"
                >
                  Github
                </a>
                <a
                  href="https://www.linkedin.com/in/lavinia-park-l01122003/"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-700"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Cartão - João Broggine */}
            <div className="bg-white border border-black rounded-lg shadow-lg p-6 w-full max-w-xs transform hover:scale-105 transition duration-500">
              <Image
                src="/img/broggine.jpg"
                width={200}
                height={200}
                alt="João Broggine"
                className="mx-auto rounded-full"
              />
              <h3 className="text-2xl font-bold mt-6 text-center">João Broggine</h3>
              <p className="text-center underline">Desenvolvedor Front-End e Java</p>
              <div className="flex justify-center gap-6 mt-6">
                <a
                  href="https://github.com/joaobroggine"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-700"
                >
                  Github
                </a>
                <a
                  href="https://www.linkedin.com/in/jo%C3%A3o-broggine-5b92a02b2/"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-700"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Cartão - João Cândido */}
            <div className="bg-white border border-black rounded-lg shadow-lg p-6 w-full max-w-xs transform hover:scale-105 transition duration-500">
              <Image src="/img/joaocandido.webp" width={200} height={200} alt="João Cândido"
                className="mx-auto rounded-full h-[200px] w-[200px] object-cover"
              />
              <h3 className="text-2xl font-bold mt-6 text-center">João Cândido</h3>
              <p className="text-center underline">Desenvolvedor Python</p>
              <div className="flex justify-center gap-6 mt-6">
                <a
                  href="https://github.com/JvrCandido"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-700"
                >
                  Github
                </a>
                <a
                  href="https://www.linkedin.com/in/jvictor0507/"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-700"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
