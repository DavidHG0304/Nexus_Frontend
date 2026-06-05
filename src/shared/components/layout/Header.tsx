import {
  ArrowRightLeft
} from "lucide-react";

import {
  useLocation,
  useNavigate
} from "react-router-dom";

import {
  avatarStyle,
  glassContainer,
  pageHeader
} from "../../../styles/shared/layout";

import {
  primaryButton
} from "../../../styles/shared/buttons";

const titles: Record<string, string> = {

  "/dashboard": "Dashboard",

  "/transfers": "Transfers",

  "/profile": "Profile",

  "/beneficiaries": "Beneficiaries",

  "/history": "History"

};

function Header() {

  const navigate =
    useNavigate();

  const location =
    useLocation();

  const currentTitle =

    titles[
    location.pathname
    ] ||

    "Dashboard";

  return (

    <header
      className={`
        ${pageHeader}
        ${glassContainer}
      `}
    >

      <div>

        <p
          className="
            text-xs
            uppercase
            tracking-[0.25em]
            text-cyan-300
          "
        >

          Nexus Finance

        </p>

        <h1
          className="
            mt-1
            text-3xl
            font-bold
            text-white
          "
        >

          {currentTitle}

        </h1>

      </div>

      <div className="flex items-center gap-3">

        {

          location.pathname !==
          "/transfers" && (

            <button

              onClick={() =>
                navigate(
                  "/transfers"
                )
              }

              className={`
                ${primaryButton}
                hidden
                h-11
                px-5
                md:flex
                md:items-center
                md:gap-2
              `}
            >

              <ArrowRightLeft
                className="
                  h-4
                  w-4
                "
              />

              Transfer

            </button>

          )

        }

        <div
          className={
            avatarStyle
          }
        >

          N

        </div>

      </div>

    </header>

  );

}

export default Header;