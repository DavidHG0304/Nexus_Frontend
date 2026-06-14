import {
  ArrowRightLeft,
  Menu,
  Sun,
  Moon
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
import { useAuth } from "../../../features/auth/context/AuthContext";
import { useTheme } from "../../../shared/context/ThemeContext";
import { motion } from "framer-motion";

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

  const { user } = useAuth();

  const { theme, toggleTheme } = useTheme();

  const client = user;

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

        <button
          onClick={toggleTheme}
          className="
            relative
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-white/5
            bg-white/5
            text-cyan-300
            transition-all
            duration-300
            hover:bg-white/10
            sm:h-11
            sm:w-11
          "
          aria-label="Toggle theme"
          title="Toggle theme"
        >

          <motion.div
            key={theme}
            initial={{ scale: 0.6, rotate: -90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.6, rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >

            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}

          </motion.div>

        </button>

        <button
          onClick={() =>
            navigate("/profile")
          }
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

          {client?.name?.[0] || ""}

        </button>

      </div>

    </header>

  );

}

export default Header;