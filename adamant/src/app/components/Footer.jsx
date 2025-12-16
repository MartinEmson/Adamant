import LocationIcon from "../assets/location-dot.svg";
import PhoneIcon from "../assets/phone.svg";
import MailIcon from "../assets/mail-svgrepo-com.svg";

export function Footer() {
  return (
    <footer className="bg-gray-200 text-center py-4 mt-8">
      <div className="h-[30vh] flex flex-col">
        <div className="w-1/2 ">
          <p>
            {" "}
            Adamant tillhandahåller service och säkerhet med trygghet, för dig.
          </p>
        </div>

        <div className="w-1/2 space-y-3">
          <div className="flex items-center gap-3">
            <LocationIcon className="w-5 h-5 text-gray-600" />
            <span>Solna</span>
          </div>

          <div className="flex items-center gap-3">
            <PhoneIcon className="w-5 h-5 text-gray-600" />
            <a href="tel:0707136087">070-713 60 87</a>
          </div>

          <div className="flex items-center gap-3">
            <MailIcon className="w-5 h-5 text-gray-600" />
            <a href="mailto:info@adamantbevakning.se">
              info@adamantbevakning.se
            </a>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-600">
        © {new Date().getFullYear()} Adamant Bevakning.
      </p>
    </footer>
  );
}
