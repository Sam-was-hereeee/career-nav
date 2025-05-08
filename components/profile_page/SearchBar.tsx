"use client";

import Link from "next/link";
import React, { useState } from "react";
import TagSelect from "../shared_components/TagSelect";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex items-center w-full h-16 border-b border-black/20 bg-[#728594]">
      <Link
        className="flex items-center justify-center w-5 h-5 ml-4"
        href="/careerProfile"
      >
        <img src="/backBtn.svg" alt="back" />
      </Link>
      <form className="flex-1 flex justify-between items-center gap-3 p-3">
        <div className="relative w-full">
          <Command className="h-10">
            <CommandInput
              placeholder="搜尋職稱或領域關鍵字"
              value={search}
              onValueChange={setSearch}
            />
            {search.trim() !== "" && (
              <CommandList className="absolute top-full left-0 mt-0.5 w-full bg-white rounded-md z-50">
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem>Calendar</CommandItem>
                  <CommandItem>Search Emoji</CommandItem>
                  <CommandItem>Calculator</CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                  <CommandItem>Profile</CommandItem>
                  <CommandItem>Billing</CommandItem>
                  <CommandItem>Settings</CommandItem>
                </CommandGroup>
              </CommandList>
            )}
          </Command>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:gap-2">
          <TagSelect id="career" option={[]} opValue={[]}>
            職業
          </TagSelect>
          <TagSelect id="industry" option={[]} opValue={[]}>
            產業
          </TagSelect>
          <TagSelect id="workMode" option={[]} opValue={[]}>
            工作模式
          </TagSelect>
          <TagSelect id="skill" option={[]} opValue={[]}>
            技能對應
          </TagSelect>
          <TagSelect id="corpType" option={[]} opValue={[]}>
            機構類別
          </TagSelect>
        </div>

        <button
          className="min-w-14 h-9 rounded-lg text-sm text-center text-white bg-[#5F6368] hover:bg-[#5F6368]/70 transition-all duration-300 ease-in"
          type="submit"
        >
          搜尋
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
