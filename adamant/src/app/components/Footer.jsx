import Image from "next/image";
import LocationIcon from "../assets/location.svg";
import PhoneIcon from "../assets/phone.svg";
import MailIcon from "../assets/mail.svg";

export function Footer() {
  return (
    <footer className="py-12">
          <hr className="w-4/5 mx-auto border-t border-gray-300 mb-6" />

      <div className="h-[30vh] flex flex-col w-5/6 mx-auto">
      <div className="flex flex-row">
        <div className="w-1/2 flex py-6">
          <p>
            {" "}
            Adamant tillhandahåller service och säkerhet med trygghet, för dig.
          </p>
        </div>

        <div className="w-1/2 space-y-3 p-6">
          <div className="flex items-center gap-3">
            <Image
              src={LocationIcon}
              alt="Adamant Logo"
              className="w-6 h-auto"
            />

            <span>Solna</span>
          </div>

          <div className="flex items-center gap-3">
            <Image
              src={PhoneIcon}
              alt="Adamant Logo"
              className="w-6 h-auto"
            />{" "}
            <a href="tel:0707136087">070-713 60 87</a>
          </div>

          <div className="flex items-center gap-3">
            <Image
              src={MailIcon}
              alt="Adamant Logo"
              className="w-6 h-auto"
            />{" "}
            <a href="mailto:info@adamantbevakning.se">
              info@adamantbevakning.se
            </a>
          </div>
        </div>
        </div>
          <p className="text-sm text-gray-600">
        © {new Date().getFullYear()} Adamant Bevakning.
      </p>
      </div>

    
    </footer>
  );
}
