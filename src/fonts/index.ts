import { Poppins, Bai_Jamjuree, Sora, IBM_Plex_Sans } from "next/font/google";

export const poppins = Poppins({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const baiJamjuree = Bai_Jamjuree({
  weight: ["500", "600"],
  subsets: ["latin"],
});

export const sora = Sora({ weight: ["200", "300", "400"], subsets: ["latin"] });

export const ibmPlexSans400 = IBM_Plex_Sans({
  weight: "400",
  subsets: ["latin"],
});
