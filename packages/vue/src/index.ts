import { defineComponent } from 'vue'
import * as common from 'pagination-js-component'
export * from 'pagination-js-component'
import { indexTemplateHtml } from './variables'

/**
 * @public
 */
export const Pagination = defineComponent({
  render: indexTemplateHtml,
  props: {
    total: {
      type: Number,
      required: true,
    },
    current: {
      type: Number,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
    mode: Number
  },
  computed: {
     pages(): common.Page[] {
      return common.getPages(this.current, this.total, this.count, this.mode)
    }
  },
  methods: {
    jumpTo(page: number) {
      this.$emit('jump', page)
    }
  }
})
