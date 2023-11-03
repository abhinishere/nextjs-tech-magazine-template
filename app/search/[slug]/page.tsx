"use client";

import { usePathname } from "next/navigation";

function Search() {
  const pathname = usePathname();
  const keyword = pathname.replace("/search/", "");
  return <div>Search Results for {keyword}</div>;
}

export default Search;
