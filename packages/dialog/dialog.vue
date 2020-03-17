<template>
  <div class="ui dimmer modals page " :class="cWarpClass">
    <div class="ui standard modal" :class="cBoxClass" style="top: 60px;">
      <i class="close icon" @click="hNo"></i>
      <div class="header">
          <slot name="header">{{title}}</slot>
      </div>
      <div class="content">
        <div class="description">
          <slot name="body">{{content}}</slot>
        </div>
      </div>
      <div class="actions">
        <div class="ui black button" @click="hNo">{{noTxt}}</div>
        <div class="ui positive right labeled icon button" @click="hYes">
          {{yesTxt}}
          <i class="checkmark icon"></i>
        </div>
      </div>
    </div>
 </div>
</template>
<script>
export default {
  name: 'MyDialog',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '系统提示',
      require: false
    },
    content: {
      type: String,
      default: '时间不多了',
      require: false
    },
    noTxt: {
      type: String,
      default: '取消',
      require: false
    },
    yesTxt: {
      type: String,
      default: '确定',
      require: false
    }
  },
  computed: {
    cWarpClass () {
      if (this.active) {
        return 'active'
      }
      return ''
    },
    cBoxClass () {
      if (this.active) {
        return 'active'
      }
      return ''
    }
  },
  data () {
    return {
      active: false
    }
  },
  watch: {
    value: {
      handler (newVal, oldVal) {
        console.log(newVal, oldVal)
        this.active = this.value
      },
      immediate: true
    }
  },
  methods: {
    hClose () {
      this.active = false
      if (this.defaultClose) {
        this.defaultClose()
      }
      this.$emit('input', this.active)
    },
    hNo () {
      this.hClose()
      if (this.noHandler) {
        this.noHandler()
      }
      this.$emit('no')
    },
    hYes () {
      this.hClose()
      // eslint-disable-next-line no-debugger
      if (this.yesHandler) {
        this.yesHandler()
      }
      this.$emit('yes')
    }
  }
}
</script>
