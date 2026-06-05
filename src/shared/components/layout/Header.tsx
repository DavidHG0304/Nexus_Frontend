import {
  ArrowRightLeft,
  Menu
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
import { useDashboard } from "../../../features/dashboard/hook/useDashboard";

type HeaderProps = {
  onMenuClick: () => void;
};

const titles: Record<string, string> = {

  "/dashboard": "Dashboard",

  "/transfers": "Transfers",

  "/profile": "Profile",

  "/beneficiaries": "Beneficiaries",

  "/history": "History"

};

function Header({
  onMenuClick
}: HeaderProps) {

  const navigate = useNavigate();

  const location = useLocation();

  const { data } = useDashboard();

  const client = data?.client;

  const currentTitle =
    titles[location.pathname] ||
    "Dashboard";

  return (

    <header
      className={`
        ${pageHeader}
        ${glassContainer}
        flex
        flex-wrap
        items-center
        justify-between
        gap-4
      `}
    >

      <div className="flex min-w-0 flex-1 items-center gap-3">

        <button
          onClick={onMenuClick}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-white/10
            bg-white/5
            text-slate-300
            lg:hidden
          "
        >

          <Menu
            className="
              h-5
              w-5
            "
          />

        </button>

        <div className="min-w-0">

          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-cyan-300
              sm:text-xs
              sm:tracking-[0.25em]
            "
          >

            Nexus Finance

          </p>

          <h1
            className="
              mt-1
              truncate
              text-xl
              font-bold
              text-white
              sm:text-2xl
              md:text-3xl
            "
          >

            {currentTitle}

          </h1>

        </div>

      </div>

      <div
        className="
          flex
          shrink-0
          items-center
          gap-2
          sm:gap-3
        "
      >

        {

          location.pathname !== "/transfers" && (

            <>
              <button

                onClick={() =>
                  navigate("/transfers")
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

              <button
                onClick={() =>
                  navigate("/transfers")
                }
                className="
        h-10
        w-10
        rounded-full
        bg-cyan-400
        flex
        items-center
        justify-center
        md:hidden
    "
              >

                <ArrowRightLeft
                  size={18}
                  color="black"
                />

              </button>
            </>

          )

        }

        <div
          className={`
            ${avatarStyle}
            h-10
            w-10
            shrink-0
            text-sm
            sm:h-11
            sm:w-11
          `}
        >

          {client?.name[0]}

        </div>

      </div>

    </header>

  );

}

export default Header;