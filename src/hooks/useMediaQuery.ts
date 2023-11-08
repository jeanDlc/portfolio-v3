import { useEffect, useState } from "react";

/**
 *  @description Returns whether the screen size matches the `query` or not
 * @example
 * useMediaQuery("(min-width: 768px)")
 * useMediaQuery("prefers-reduced-motion: reduce")
 */
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  const onChangeMedia = (e: MediaQueryListEvent) => {
    console.log("running");
    setMatches(e.matches);
  };

  useEffect(() => {
    //on first render
    setMatches(window.matchMedia(query).matches);
    //when changing screen size
    window.matchMedia(query).addEventListener("change", onChangeMedia);

    return () => {
      window.matchMedia(query).removeEventListener("change", onChangeMedia);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return matches;
};

export default useMediaQuery;
