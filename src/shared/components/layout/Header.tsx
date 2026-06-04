import {
  Bell,
  Settings
} from "lucide-react";

import {
  avatarStyle,
  glassContainer,
  iconButton,
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

        <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">

          Nexus Finance

        </p>

        <h1 className="mt-1 text-3xl font-bold text-white capitalize">

          {tab}

        </h1>

      </div>

      <div className="flex items-center gap-3">

        <button
          onClick={() => setTab("transactions")}
          className={`
            ${primaryButton}
            hidden
            h-11
            px-5
            md:block
          `}
        >

          New Transaction

        </button>

        <button className={iconButton}>

          <Bell className="h-5 w-5" />

        </button>

        <button className={iconButton}>

          <Settings className="h-5 w-5" />

        </button>

        <div className={avatarStyle}>

          U

        </div>

      </div>

    </header>

  );

}

export default Header;