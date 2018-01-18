import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PaginationComponent } from './index.component'

export * from './index.component'
export * from 'pagination-js-component'

/**
 * @public
 */
@NgModule({
  declarations: [
    PaginationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginationComponent
  ]
})
export class PaginationModule { }
