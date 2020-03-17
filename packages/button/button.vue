<template>
<!-- <div class="ui vertical animated button">

</div> -->

    <div class="ui button" :class="cClass">
      <template v-if="cAnimated">
        <div v-if="$slots.hidden"  class="hidden content">
          <slot name="hidden"/>
        </div>
        <div v-if="$slots.visible"  class="visible content">
          <slot name="visible"/>
        </div>
      </template>
      <template v-else>
        <i v-if='icon' class="icon" :class="cIcon"></i>
        <slot>我是一个按钮</slot>
      </template>
    </div>

</template>

<script>
export default {
  name: 'MyButton',
  props: {
    size: {
      type: String,
      required: false,
      default: 'small',
      validator (val) {
        return ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'].includes(val)
      }
    },
    icon: {
      type: String,
      required: false,
      default: ''
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    animated: {
      type: [String, Boolean],
      required: false,
      default: ''
    }
  },
  computed: {
    cClass () {
      return [
        this.cSize,
        this.cIcon,
        this.cDisabled,
        this.cLoading,
        this.cAnimated
      ].join(' ')
    },
    cAnimated () {
      if (typeof this.animated === 'boolean') {
        return this.animated ? 'animated' : ''
      } else {
        return this.animated ? this.animated + ' animated' : ''
      }
    },
    cDisabled () {
      return this.disabled ? 'disabled' : ''
    },
    cLoading () {
      return this.loading ? 'loading' : ''
    },
    cSize () {
      return this.size
    },
    cIcon () {
      if (this.icon) {
        return this.icon
      } else {
        return ''
      }
    }
  },
  methods: {
    hClick () {
      this.$emit('click')
    }
  }
}
</script>
