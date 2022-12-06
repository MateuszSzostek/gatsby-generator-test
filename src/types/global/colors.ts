enum ColorsEnum {
    brandMain = "#FFB800",
    red_00 = "#C81B1E",
    red_05 = "#e60000",
    red_09 = "#ffe6e6",
    green_00 = "#08C649",
    green_05 = "#00e600",
    green_09 = "#e6ffe6",
    gray_00 = "#151515",
    gray_03 = "#3B3B3B",
    gray_04transparent = "rgba(217, 217, 217, 0.4)",
    gray_05 = "#545454",
    gray_09 = "#F5F5F5",
    gray_10 = "#FFFFFF",
    yellow_05 = "#e6e600",
    yellow_09 = "#ffffe6",
    sky_05 = "#00ccff",
    sky_09 = "#e6faff",
}

type Colors =
    | ColorsEnum.red_00
    | ColorsEnum.gray_00
    | ColorsEnum.gray_03
    | ColorsEnum.gray_04transparent
    | ColorsEnum.gray_05
    | ColorsEnum.gray_09
    | ColorsEnum.gray_10
    | ColorsEnum.brandMain
    | ColorsEnum.green_00;

export { ColorsEnum };
export type { Colors };
