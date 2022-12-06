interface IModule {
    variant?: ModuleVariant;
}

enum ModuleVariantEnum {
    primary = "primary",
    bottomMargin = "bottomMargin",
    darkFooter = "darkFooter",
}

type ModuleVariant =
    | ModuleVariantEnum.primary
    | ModuleVariantEnum.bottomMargin
    | ModuleVariantEnum.darkFooter;

interface IStyledModule {
    variant?: ModuleVariant;
}

export type { IModule, ModuleVariant, IStyledModule };

export { ModuleVariantEnum };
