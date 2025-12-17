import Image from "next/image";
import Link from "next/link";
import AdamantLogo from "./assets/Adamant.svg";

export default function Home() {
  return (
    <section className="w-full flex flex-col">
      <div className="min-h-[calc(100vh-101px)] flex flex-row p-12">
        <div className="w-1/2 flex justify-center items-center">
          <Image src={AdamantLogo} alt="Adamant Logo" className="w-72 h-auto" />
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center p-12 gap-y-4">
            <p className="text-xl md:text-3xl w-full text-center">
              Adamant Bevakning och Adamant Konsult kan hjälpa dig med dina
              säkerhetsfrågor!
            </p>
            <h2 className="text-xl md:text-3xl text-center">
              Läs mer om våra{" "}
              <Link href="/tjanster" className="text-blue-600 hover:underline">
                tjänster
              </Link>
            </h2>
          </div>
        </div>
      </div>

            <hr className="w-4/5 mx-auto border-t border-gray-300 mb-6" />


      <div id="kontakt" className=" p-32">
        <div className="flex flex-col justify-center items-center gap-y-8">
          <h2 className="text-3xl">Hör av dig för ett första samtal!</h2>
          <h3 className="text-3xl">Kontakta Oss!</h3>
          <a
            href="mailto:someone@example.com"
            className="px-16 py-4 border border-black text-lg rounded-2xl"
          >
            Mail
          </a>{" "}
        </div>
      </div>
    </section>
  );
}
