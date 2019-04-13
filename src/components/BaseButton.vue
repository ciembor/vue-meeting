<template>
  <button :disabled="disabled" v-on:click="clickHandler(callback)">
    <span v-if="disabled"> {{ loaderMessage }} </span>
    <span v-else="disabled"> {{ message }} </span>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  data: function() {
    return {
      disabled: false
    }
  },
  props: {
    message: {
      type: String,
      default: "click me hard please"
    },
    loaderMessage: {
      type: String,
      default: "loading"
    },
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
      this.callback(function() { that.disabled = false})
    }
  }
}
</script>

