import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Pagination } from '../dist/'

class Main extends React.Component<unknown, unknown> {
  private total = 12
  private current1 = 1
  private count = 2

  private current2 = 1
  private mode1 = 1

  render() {
    return (
      <div>
        <a href='https://github.com/plantain-00/pagination-js-component/tree/master/packages/react/demo' target='_blank'>the source code of the demo</a>
        <h3>default mode:</h3>
        <div className='default-mode'>
          <Pagination total={this.total}
            current={this.current1}
            count={this.count}
            jump={page => this.jump1(page)}>
          </Pagination>
        </div>
        <br />
        <h3>mode 1:</h3>
        <div className='mode-1'>
          <Pagination total={this.total}
            current={this.current2}
            count={this.count}
            mode={this.mode1}
            jump={page => this.jump2(page)}>
          </Pagination>
        </div>
      </div>
    )
  }
  private jump1(page: number) {
    this.current1 = page
    this.setState({ current1: this.current1 })
  }
  private jump2(page: number) {
    this.current2 = page
    this.setState({ current2: this.current2 })
  }
}

ReactDOM.render(<Main />, document.getElementById('container'))
