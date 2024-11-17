import CardSlider from "@/components/card";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section
        className="w-full flex flex-col justify-center items-start px-8 md:px-16 mb-20"
        style={{
          minHeight: '75vh',
          backgroundImage: "url('/img/abajour.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl">
            LightWatts, sua conta de luz agradece.
          </h1>
          <h3 className="text-xl md:text-2xl lg:text-3xl mt-4">
            Controle a Light que te preocupa.
          </h3>
        </div>
      </section>

      {/* Section de Biografia */}
      <article className="text-black mt-8 md:mt-16 px-8 md:px-16 mb-16">
        <h1 className="text-3xl md:text-4xl font-lulo">POR QUE É LIGHTWATTS?</h1>
        <p className="text-base md:text-lg mt-4 max-w-prose text-justify">
          Nosso nome é LightWatts porque acreditamos que a luz é sinônimo de clareza, eficiência e inovação. Queremos iluminar o caminho para um consumo de energia mais inteligente e sustentável, ajudando você a economizar watts de forma leve e eficiente. Com nossas soluções, seu lar fica mais econômico, sem perder o conforto, até porque economizar energia pode ser tão simples quanto acender uma luz.
        </p>
      </article>

      {/* Section de Incentivo */}
      <section className="flex text-black flex-col lg:flex-row items-center justify-between mt-16 lg:mt-28 bg-gray-100 p-8">
        <div className="lg:ml-10 space-y-5">
          <Link href="/auth/signup">
            <h1 className="text-2xl md:text-3xl font-lulo font-bold hover:underline">
              Faça parte de uma vida mais econômica
            </h1>
          </Link>
          <p className="text-base mr-12 md:text-xl text-justify">
            Aqui, ninguém será o vilão da sua história, então relaxe! Economizar energia não exige sacrifícios extremos ou culpa. É uma jornada leve e consciente, onde pequenas mudanças consistentes podem reduzir sua conta de luz e beneficiar o planeta.
          </p>
          <Link href="/auth/signup">
            <p className="loginlink text-lg md:text-xl inline-block mt-4">
              ↪︎ Saiba mais
            </p>
          </Link>
        </div>
        <Image className="w-full lg:w-auto mt-8 lg:mt-0 lg:mr-24" src="/img/tomada.jpg" alt="Tomada" width={400} height={300} priority
        />
      </section>

      {/* Section de Pendência */}
      <section className="flex flex-col lg:flex-row items-center justify-start lg: bg-black opacity-90 p-8 mt-16 space-y-8 lg:space-y-0 lg:space-x-10">
        <Image className="w-full lg:w-auto lg:mr-auto" src="/img/girl_in_phone.jpg" alt="Garota no celular" width={400} height={300} priority
        />
        <div className="lg:max-w-lg lg:ml-10 lg:mr-auto space-y-5">
          <Link href="/fale-conosco">
            <h1 className="text-white text-2xl md:text-3xl font-lulo hover:underline">
              Entre em contato conosco caso haja alguma pendência.
            </h1>
          </Link>
          <p className="text-white text-base md:text-xl text-justify">
            Se houver alguma pendência ou dúvida, não hesite em nos contatar. Estamos à disposição para ajudar e resolver qualquer questão o mais rápido possível.
          </p>
          <Link href="/fale-conosco">
            <p className="sectionlink text-lg mt-4 md:text-xl text-white inline-block">
              ↪︎ Saiba mais
            </p>
          </Link>
        </div>
      </section>

      {/* Card Slider */}
      <CardSlider />

      {/* Footer */}
      <Footer />
    </div>
  );
}
