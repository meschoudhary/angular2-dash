import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[dashDropdown]'
})
export class DropdownDirective {
    //CSS class 'open' will be passed to the element using this directive only if isOpen is true
    @HostBinding('class.open') 
    get opened(){
        return this.isOpen;
    }

    @HostListener('mouseenter')
    open(){
        this.isOpen = true;
    }

    @HostListener('mouseleave')
    close(){
        this.isOpen = false;
    }

    private isOpen = false;
}
