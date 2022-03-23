import * as Turbo from '@hotwired/turbo'
import { PageRenderer } from '@hotwired/turbo'

Object.assign(PageRenderer.prototype, {
  assignNewBody() {
    const container = document.querySelector("#app")
    const newContainer = this.newElement.querySelector("#app")

    if (container && newContainer) {
      container.replaceWith(newContainer)
    } else {
      document.body.replaceWith(this.newElement)
    }
  }
})
