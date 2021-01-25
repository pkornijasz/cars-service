import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NameShortcutPipe } from './pipes/name-shortcut.pipe';
import { ImportantDirective } from './directives/important.directive';



@NgModule({
    declarations: [HeaderComponent, NameShortcutPipe, ImportantDirective],
    exports: [
        HeaderComponent,
        NameShortcutPipe,
        ImportantDirective
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
