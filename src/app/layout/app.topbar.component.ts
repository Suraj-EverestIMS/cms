import { Component, ElementRef, OnInit, ViewChild, HostListener } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit {

    items!: MenuItem[];
    model: any[] = [];
    isScrolled = false;

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                // label: 'UI Components',
                items: [
                    { label: 'Home', routerLink: ['/'] },
                    { label: 'Contacts', routerLink: ['/contacts'] },
                    { label: 'Profile', routerLink: ['/profile'] }
                ]
            }
        ];
    }


    getIcon(label: string): string {
        const iconMap: { [key: string]: string } = {
            Home: 'pi-home',
            Contacts: 'pi-list',
            Profile: 'pi-user'
        };
        return iconMap[label] || 'pi-question'; // Default icon if not found
    }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.isScrolled = window.scrollY > 100; // Add class when scrolled 100px down
    }
}
