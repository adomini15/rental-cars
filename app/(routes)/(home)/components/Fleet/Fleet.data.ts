export type FleetCategory = {
    name: string,
    active: boolean
}

export type FleetBlock = {
    url: string;
    name: string;
}

export const fleetCategories: FleetCategory[]  = [
    {
        name: "Premium",
        active: false
    },
    {
        name: "Coupe",
        active: true
    },
    {
        name: "Sportcar",
        active: false
    },
    {
        name: "Hypercar",
        active: false
    },
    {
        name: "Limousine",
        active: true
    },
    {
        name: "Classic",
        active: false
    },
];



export const fleetBlock1: FleetBlock[] = [
    {
        url: "premium.jpg",
        name: 'Premium'
    },
    {
        url: "coupe.jpg",
        name: 'Coupe'
    },
    {
        url: "sportcar.jpg",
        name: 'SportCar'
    }
]

export const fleetBlock2: FleetBlock[] = [
    {
        url: "hypercar.jpg",
        name: 'Hypercar'
    },
    {
        url: "limousine.jpg",
        name: 'Limousine'
    },
    {
        url: "classic.jpg",
        name: 'Classic'
    },
    {
        url: "classic-2.jpg",
        name: "Classic-2"
    }
]