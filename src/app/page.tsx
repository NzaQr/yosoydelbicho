import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="text-center">
        <h1>Yo soy del bicho</h1>
        <Image
          src="/argentinos-juniors-logo.png"
          alt="Escudo Argentinos Juniors"
          width={500}
          height={500}
          priority
        />
      </div>
    </main>
  );
}
