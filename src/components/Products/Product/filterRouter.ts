export interface IFilterRoute {
    title: string
}
export interface ITabsRoute {
    title: string
}
export enum ProductTabsRouteNames {
    NEW = "New",
    SALES = "Sales",
    KIDS = "Kids",
    MEN = "Men",
    WOMEN = 'Women',
}
export enum TabsRouteNames {
    DRESSES = "Dresses",
    SHOES = "Shoes",
    TSHIRTS = "T-shirts",
    BLOUSES = "Blouses",
    OUTWEAR = 'Outwear',
    HATS = 'Hat',
}

export const tabsRoute: ITabsRoute[] = [

    {
        title: TabsRouteNames.DRESSES,
    },
    {
        title: TabsRouteNames.SHOES,
    },
    {
        title: TabsRouteNames.TSHIRTS,
    },
    {
        title: TabsRouteNames.BLOUSES,
    },
    {
        title: TabsRouteNames.OUTWEAR,
    },
    {
        title: TabsRouteNames.HATS,
    },

]
export const productTabsRoute: IFilterRoute[] = [
    {
        title: ProductTabsRouteNames.NEW
    },
    {
        title: ProductTabsRouteNames.SALES
    },
    {
        title: ProductTabsRouteNames.KIDS
    },
    {
        title: ProductTabsRouteNames.MEN
    },
    {
        title: ProductTabsRouteNames.WOMEN
    },
]

