export const srcAngularTemplateHtml = `<ul class="pagination"><li *ngFor="let page of pages"><span *ngIf="page.disabled">{{page.text}}</span><a *ngIf="!page.disabled" href="javascript:void(0)" (click)="jumpTo(page.value)">{{page.text}}</a></li></ul>`;
