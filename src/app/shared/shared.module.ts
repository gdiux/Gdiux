import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsModule } from '../icons/icons.module';

// COMPONENTS
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    IconsModule
  ],
  providers: [IconsModule],
})
export class SharedModule { }
