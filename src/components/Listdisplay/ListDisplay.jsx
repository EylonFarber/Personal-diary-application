import React, { useState } from "react";
import EntryCard from "./EntryCard";

export default function ListDisplay({ array }) {
  return (
    <div className="w-full flex items-center justify-center md:w-[calc(100vw-150px)]">
      {array.length < 1 ? (
        <div className="">
          <div className="badge badge-xl">You have no entries yet</div>
        </div>
      ) : (
        <div className="absolute top-[108px] md:left-[150px]">
          <div className="flex flex-col justify-center md:grid gap-4 md:grid-cols-3 align-center my-2 md:px-4">
            {array.map((entry, index) => (
              <EntryCard
                key={index}
                title={"lerjg,erhg;title"}
                text={"loremfkwoernogihregrth6jje;sogr;eGIAH4RTPG8Y5[YGHIJ'RTHJO]R9TUE[RGHR5'EIHJ]T9UHBJ]GONK]RTUH[5YH]ITH]9U[GRHDAF'BJT[H8U4[8YU]54noasdhnklqsg"}
                imageUrl={
                  "https://hips.hearstapps.com/hmg-prod/images/chow-chow-portrait-royalty-free-image-1652926953.jpg?crop=0.44455xw:1xh;center,top&resize=980:*"
                }
                date={"05.05.2025"}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
