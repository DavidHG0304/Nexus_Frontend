import {
  ArrowRightLeft
} from "lucide-react";

import {
  avatarStyle,
  glassContainer,
  pageHeader
} from "../../../styles/shared/layout";

import {
  primaryButton
} from "../../../styles/shared/buttons";

type HeaderProps = {

  tab: string;

  setTab: React.Dispatch<
    React.SetStateAction<string>
  >;

};

const titles: Record<string, string> = {

  dashboard: "Dashboard",

  transfers: "Transfers",

  profile: "Profile",

  beneficiaries: "Beneficiaries",

  history: "History"

};

function Header({

  tab,

  setTab

}: HeaderProps) {

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

          {
            titles[tab] ||
            "Dashboard"
          }

        </h1>

      </div>

      <div className="flex items-center gap-3">

        {

          tab !== "transfers" && (

            <button
              onClick={() =>
                setTab(
                  "transfers"
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