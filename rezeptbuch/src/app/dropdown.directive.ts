import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropDownDirective {
    isOpen = false;

 @HostBinding
 @HostListener('click') toggle(){
    this.isOpen = !this.isOpen;

 }

}