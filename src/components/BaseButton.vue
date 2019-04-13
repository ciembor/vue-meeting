<template>
  <button :disabled="disabled" v-on:click="clickHandler(callback)">
    <slot name="loadingMessage" v-if="disabled">
      Loading...
    </slot>
    <slot name="message" v-else>
      Click me hard please.
    </slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  data: function() {
    return {
      disabled: false,
      loderMessage: 'loading',
    }
  },
  props: {
    callback: {
      type: Function,
      default: function(callback) {
        setTimeout(callback, 2000)
      }
    }
  },
  methods: {
    clickHandler: function(callback) {
      let that = this
      this.disabled = true
      this.callback(function() { that.disabled = false })
    }
  }
}
</script>

