import { Injectable } from '@angular/core';


export interface ChildrenItems {
    subname: string;
    sublink: string;
    subtitle: string;
}

export interface Menu {
    name: string;
    link?: string;
    expandClass: string;
    icon: string;
    title: string;
    children?: ChildrenItems[];
}

const MenuItemsServices = [
    {
        name: 'Home',
        link: '/dashboard',
        expandClass: 'dashboard',
        icon: 'fa-home',
        title: 'Home'
    },
    {
        name: 'admin-user',
        link: '/admin-user',
        expandClass: 'admin-user',
        icon: 'fa-users',
        title: 'WISER.AMMINISTRAZIONE.USER_MANAGEMENT'
    },
    {
        name: 'admin-user',
        expandClass: 'admin-user2',
        icon: 'fa-user-plus',
        title: 'WISER.AMMINISTRAZIONE.USER_MANAGEMENT',
        children: [
            {
                subname: 'admin-user',
                sublink: '/admin-user',
                subtitle: 'WISER.AMMINISTRAZIONE.USER_MANAGEMENT'
            },
        ]
    },
];

@Injectable()
export class MenuService {
    getAll(): Menu[] {
        return MenuItemsServices;
    }
}

