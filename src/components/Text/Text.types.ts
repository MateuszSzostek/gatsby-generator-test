import { FontSize, FontWeight, TagType } from "../../types/global/fonts";
import { Colors } from "../../types/global/colors";

interface IText {
  size?: string;
  color?: string;
  weight?: string;
  asTag: string;
}

enum TextVariantEnum {
  logoHeader = "logoHeader",
  footerHeader = "footerHeader",
  sectionTitle = "sectionTitle",
  primary = "primary",
  primaryWhite = "primaryWhite",
  primaryTitle = "primaryTitle",
  tinyWhite = "tinyWhite",
  landingTitle = "landingTitle",
  landingDescription = "landingDescription",
}

interface IStyledText {
  size?: string;
  color?: string;
  weight?: string;
  asTag: "h1" | "h2" | "h3";
}

export type { IText, IStyledText };

export { TextVariantEnum };
