import { Component, Input, Output, EventEmitter } from '@angular/core'

import * as common from 'pagination-js-component'

import { indexTemplateHtml } from './variables'

/**
 * @public
 */
@Component({
  selector: 'pagination',
  template: indexTemplateHtml
})
export class PaginationComponent {
  @Input()
    total!: number
  @Input()
    current!: number
  @Input()
    count!: number
  @Input()
    mode?: number

  @Output()
    jump = new EventEmitter<number>()

  get pages () {
    return common.getPages(this.current, this.total, this.count, this.mode)
  }

  jumpTo (page: number) {
    this.jump.emit(page)
  }

  trackBy (page: common.Page, index: number) {
    return index
  }
}
