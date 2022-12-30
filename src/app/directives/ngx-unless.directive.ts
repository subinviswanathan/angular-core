import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[ngxUnless]'
})
export class NgxUnlessDirective {
  visbile = false;
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input()
  set ngxUnless(condition: boolean) {
    if (!condition && !this.visbile) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.visbile = true;
    } else if (this.visbile && condition) {
      this.viewContainer.clear();
      this.visbile = false;
    }
  }

}
