import React from "react";

export default function EntryCard({ title, text, imageUrl, date }) {
  return (
    <div className="card bg-base-100 w-full shadow-sm md:rounded-t-[82px] max-w-screen max-h-76">
      <figure>
        <img src={imageUrl} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          "{title}
          <span className="text-xs">{date}</span>
        </h2>
        <p className="truncate">{text}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View entry</button>
        </div>
      </div>
    </div>
  );
}
