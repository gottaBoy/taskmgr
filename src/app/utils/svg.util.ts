import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from "@angular/platform-browser";
export const loadSvgResources = (iconRegistry:MatIconRegistry,sanitizer:DomSanitizer) => {
    const imgDir = 'assets/img';
    const sidebarDir = `${imgDir}/sidebar`;
    const dayDir = `${imgDir}/days`;
    const avatarDir = `${imgDir}/avatar`;
    const iconDir = `${imgDir}/icons`;
    iconRegistry.addSvgIcon('unassigned',sanitizer.bypassSecurityTrustResourceUrl(`${avatarDir}/unassigned.svg`));
    iconRegistry.addSvgIconSetInNamespace('avatars',sanitizer.bypassSecurityTrustResourceUrl(`${avatarDir}/avatars.svg`));
    iconRegistry.addSvgIcon('gifts',sanitizer.bypassSecurityTrustResourceUrl('assets/gifts.svg'));
    iconRegistry.addSvgIcon('day',sanitizer.bypassSecurityTrustResourceUrl(`${sidebarDir}/day.svg`));
    iconRegistry.addSvgIcon('month',sanitizer.bypassSecurityTrustResourceUrl(`${sidebarDir}/month.svg`));
    iconRegistry.addSvgIcon('projects',sanitizer.bypassSecurityTrustResourceUrl(`${sidebarDir}/projects.svg`));
    iconRegistry.addSvgIcon('week',sanitizer.bypassSecurityTrustResourceUrl(`${sidebarDir}/week.svg`));
    iconRegistry.addSvgIcon('move',sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/move.svg`));
    iconRegistry.addSvgIcon('add',sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/add.svg`));
    iconRegistry.addSvgIcon('delete',sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/delete.svg`));
    
    const days = [
        1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31
    ]
    days.forEach(d => iconRegistry.addSvgIcon(`day${d}`,sanitizer.bypassSecurityTrustResourceUrl(`${dayDir}/day${d}.svg`)));
}