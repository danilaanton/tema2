import { Component, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as catData from 'src/app/core/models/cat';
import { CatService } from 'src/app/core/services/cat.service';
import { FormComponent } from '../../dialogs/form/form.component';
import { NzModalRef, NzModalService, NzTriggerAction } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  cats!: catData.Cat[];
  FurPattern = catData.FurPattern;
  FurColor = catData.FurColor;
  Eye = catData.Eye;
  Sex = catData.Sex;
  Health = catData.Health;

  fallback = 'assets/default.png';

  constructor(
    private catService: CatService,
    private route: ActivatedRoute,
    private router: Router,
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef
  ) {
    this.catService.catListSubject.subscribe((res) => {
      this.cats = [...res];
    });
  }

  ngOnInit(): void {
    this.cats = this.catService.cats;
    this.route.queryParams.subscribe((res) => {
      if (this.route.snapshot.queryParamMap.has('catId')) {
        const id = res['catId'];
        this.updateModal(id);
      }
      else if (this.route.snapshot.queryParamMap.has('createNew')){
        this.createModal();
      }
    });
  }

  addItem() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        createNew : ''
      },
      queryParamsHandling: 'merge',
    });
  }

  getItem(id: number) {
    this.catService.get(id);
  }

  deleteItem(id: number) {
    this.catService.delete(id);
  }

  editItem(id: number) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        catId: id,
      },
      queryParamsHandling: 'merge',
    });
  }

  updateModal(id: number): void {
    const modal = this.modal.create<FormComponent>({
      nzTitle: 'Edit cat',
      nzContent: FormComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzComponentParams: {
        cat: this.catService.get(id),
      },
      nzData: {
        favoriteLibrary: 'angular',
        favoriteFramework: 'angular',
      },
      nzCentered: true,
      nzBodyStyle:{overflowY: 'scroll'},
      nzOnOk: (instance) => {
        this.catService.update(id, instance.catForm.value);
        this.resetRoute();
      },
      nzOnCancel: () => this.resetRoute(),
      nzFooter:[]
    });
  }

  createModal(): void {

    const modal = this.modal.create<FormComponent>({
      nzTitle: 'Add new cat',
      nzContent: FormComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzComponentParams: {
        cat: this.catService.getEmptyCat(),
      },
      nzData: {
        favoriteLibrary: 'angular',
        favoriteFramework: 'angular',
      },
      nzCentered: true,
      nzBodyStyle:{overflowY: 'scroll'},
      nzOnOk: (instance) => {
        this.catService.create(instance.catForm.value);
        this.resetRoute();
      },
      nzOnCancel: () => this.resetRoute(),
      nzFooter:[]
    });
  }

  resetRoute() {
    this.router.navigate([], {
      queryParams: {
        catId: null,
        createNew: null
      },
      relativeTo: this.route,
      queryParamsHandling: 'merge',
    });
  }
}
