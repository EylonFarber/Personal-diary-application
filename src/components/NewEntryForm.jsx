import React from "react";

export default function NewEntryForm() {
  return (
    <dialog id="my_modal_1" className="modal">
      <form className="card p-2 md:card-side bg-base-100 shadow-sm md:w-224 md:h-92 flex flex-col gap-2 items-center">
        <label className="input">
          <input
            name="title"
            type="text"
            className="grow"
            placeholder="Title"
          />
        </label>
        <label className="input">
          <input
            name="image"
            type="url"
            className="grow"
            placeholder="image url"
          />
        </label>
        <label className="input">
          <input name="text" type="text" className="grow" placeholder="text" />
        </label>
        <div className="w-full flex justify-end pr-1">
          <button type="submit" className="btn btn-primary">
            submit
          </button>
        </div>
      </form>
    </dialog>
  );
}
