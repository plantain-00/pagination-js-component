import * as React from 'react'
import * as common from 'pagination-js-component'
export * from 'pagination-js-component'

/**
 * @public
 */
export class Pagination extends React.PureComponent<{
  total: number;
  current: number;
  count: number;
  mode?: number;
  jump: (page: number) => void;
}, { hovered: boolean }> {
  render () {
    const list = common.getPages(this.props.current, this.props.total, this.props.count, this.props.mode).map(page => {
      if (page.disabled) {
        return (
                    <li key={page.text}>
                        <span>{page.text}</span>
                    </li>
        )
      } else {
        return (
                    <li key={page.text}>
                        <a href='javascript:void(0)' className={page.className} onClick={e => this.jumpTo(page.value)}>{page.text}</a>
                    </li>
        )
      }
    })
    return (
            <ul className='pagination'>
                {list}
            </ul>
    )
  }
  private jumpTo (page: number) {
    this.props.jump(page)
  }
}
