import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatsRoutingModule } from './cats-routing.module';
import { TableComponent } from './components/table/table.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CoreModule } from '../core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AgePipe } from './pipes/age.pipe';
import { JoinListPipe } from './pipes/join-list.pipe';
import { FormComponent } from './dialogs/form/form.component';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';

@NgModule({
  declarations: [
    TableComponent,
    HeaderComponent,
    DashboardComponent,
    AgePipe,
    JoinListPipe,
    FormComponent,
  ],
  imports: [
    CommonModule,
    CatsRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzPageHeaderModule,
    NzTableModule,
    NzFormModule,
    NzIconModule,
    NzImageModule,
    NzSelectModule
  ],
  providers: [NzModalService]
})
export class CatsModule {}
