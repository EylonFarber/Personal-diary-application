import React from "react";
import NewEntryButton from "./NewEntryButton";

export default function Header({newEntryFormModalOpener}) {
  const date = new Date();

  return (
    <div className="navbar flex-1 gap-2 bg-base-100 shadow-sm h-[66px] fixed top-0 left-0 z-2">
      <img
        alt="Tailwind CSS Navbar component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        className="btn btn-ghost btn-circle avatar"
      />

      <input
        type="text"
        placeholder="Search"
        className="input input-bordered w-24 md:w-auto"
      />
      <div className="w-full flex gap-2 justify-end items-center">
        <p>{date.toLocaleDateString()}</p>
        <div className="md:hidden">
          <NewEntryButton newEntryFormModalOpener={newEntryFormModalOpener} />
        </div>
      </div>
    </div>
  );
}
