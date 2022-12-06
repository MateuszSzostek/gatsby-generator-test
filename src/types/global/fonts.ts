enum FontSizeEnum {
  _8px = "0.5rem",
  _12px = "0.65rem",
  _14px = "0.875rem",
  _16px = "1rem",
  _24px = "1.5rem",
  _32px = "2rem",
  _40px = "3.5rem",
  _80px = "7.0rem",
}

enum FontFamilyEnum {
  JosefinSansRegular = "JosefinSans-Regular",
  JosefinSansBold = "JosefinSans-Bold",
  JosefinSansLight = "JosefinSans-Light",
  JosefinSansSemiBold = "JosefinSans-SemiBold",
  JosefinSansThin = "JosefinSans-Thin",
}

enum FontWeightEnum {
  _300 = "300",
  _400 = "400",
  _500 = "500",
  _600 = "600",
  _700 = "700",
  _800 = "800",
  _900 = "900",
}

enum TagTypeEnum {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
  p = "p",
  span = "span",
}

type TagType =
  | TagTypeEnum.h1
  | TagTypeEnum.h2
  | TagTypeEnum.h3
  | TagTypeEnum.h4
  | TagTypeEnum.h5
  | TagTypeEnum.h6
  | TagTypeEnum.p
  | TagTypeEnum.span;

type FontSize = FontSizeEnum._16px | FontSizeEnum._32px | FontSizeEnum._24px;

type FontFamily =
  | FontFamilyEnum.JosefinSansRegular
  | FontFamilyEnum.JosefinSansBold
  | FontFamilyEnum.JosefinSansLight
  | FontFamilyEnum.JosefinSansSemiBold
  | FontFamilyEnum.JosefinSansThin;

type FontWeight =
  | FontWeightEnum._300
  | FontWeightEnum._400
  | FontWeightEnum._500
  | FontWeightEnum._600
  | FontWeightEnum._700
  | FontWeightEnum._800
  | FontWeightEnum._900;

export { FontSizeEnum, FontFamilyEnum, FontWeightEnum, TagTypeEnum };
export type { FontSize, FontFamily, FontWeight, TagType };
