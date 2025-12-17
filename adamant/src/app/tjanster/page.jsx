import Image from "next/image";
import { Footer } from "../components/Footer";
import ordningsvakt from "../assets/ordningsvakt.png";
import handshake from "../assets/handshake.png";
import service from "../assets/service.png";

export default function TjansterPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
      
        <section className="w-5/6 mx-auto pb-16 pt-4">
          <h1 className="text-3xl text-center font-medium mb-6">Våra tjänster</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col">
              <Image
                src={ordningsvakt}
                alt="Tjänst 1"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg object-cover"
                priority
              />
              <span className="py-4 text-2xl font-medium">
                Personell Bevakning
              </span>
              <p className="text-xl">
                Behöver du ordningsvakter för uppdrag inom bevakning, krog,
                event? Hör av dig till oss!
              </p>
            </div>
            <div className="flex flex-col">
              <Image
                src={service}
                alt="Tjänst 2"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg object-cover"
              />
              <span className="py-4 text-2xl font-medium">Servicevärdar</span>
              <p className="text-xl">
                Bemötandet när gäster är viktigt, men med en högre tanke på
                säkerhet kan du säkerställa att du har både service och trygghet
                på plats.
              </p>
            </div>
            <div className="flex flex-col">
              <Image
                src={handshake}
                alt="Tjänst 3"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg object-cover"
              />
              <span className="py-4 text-2xl font-medium">
                Säkerhetsrådgivning
              </span>
              <p className="text-xl">
                Behöver du en genomgång av dina lokaler, eller hjälp med att
                planera ett event, men känner dig osäker på säkerhet. Ta kontakt
                med oss!
              </p>
            </div>
          </div>
        </section>

      <hr className="w-4/5 mx-auto border-t border-gray-300 mb-6" />

        <section className="w-5/6 mx-auto py-16">
        
        <div className="flex flex-col gap-8">
          <p className="text-xl">
            Inom bolagen som ingår i Adamants företagsgrupp. Adamant Bevakning
            samt Adamant Konsult kan vi bistå er med flera tjänster.{" "}
          </p>

          {/* <h2 className="text-center text-2xl font-semibold">Vad vi erbjuder</h2> */}
          {/* <p className="text-xl">
            Adamant tillhandahåller service och säkerhet med trygghet, för dig.
            Vi levererar pålitliga tjänster anpassade efter dina behov.
          </p> */}
          </div>
        </section>
      </main>
    </div>
  );
}
