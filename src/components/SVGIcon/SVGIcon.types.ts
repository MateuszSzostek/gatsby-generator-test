interface IStyledIcon {
    width: string;
    height: string;
    currentColor?: string;
    iconHeight?: string;
    iconWidth?: string;
}

interface IIcon extends IStyledIcon {
    Icon: any;
}

export default IIcon;
export type { IStyledIcon };
