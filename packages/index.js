import MyButton from './button/button.vue'
import MyDivider from './divider/divider.vue'
import MySlider from './slider/slider.vue'
import MyHeadline from './headline/headline.vue'
import MyDialog from './dialog/dialog.vue'
export default {
  install (Vue) {
    Vue.component('MyButton', MyButton)
    Vue.component('MySlider', MySlider)
    Vue.component('MyDivider', MyDivider)
    Vue.component('MyDialog', MyDialog)
    Vue.component('MyHeadline', MyHeadline)
  }
}
