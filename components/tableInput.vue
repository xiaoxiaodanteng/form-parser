<template>
  <div
    ref="tableInput"
    :style="{zIndex: actived ? 9 : 8}"
    class="table-input"
    :class="{required: required&&value.length > 0}"
    contenteditable="true"
    @input="onInput"
  />
</template>

<script>
export default {
  name: 'TableInput',
  props: {
    value: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      actived: false
    }
  },
  watch: {
    value: {
      immediate: true,
      handler() {
        if (this.$refs.tableInput) {
          this.$refs.tableInput.textContent = this.value
        }
      }
    }
  },
  mounted() {
    this.$refs.tableInput.textContent = this.value
  },
  methods: {
    onInput(event) {
      this.$emit('input', this.$refs.tableInput.textContent)
    },
    handleFocus() {
      this.actived = true
      this.$refs.tableInput.focus()
    },
    handleBlur() {
      this.actived = false
      this.$refs.tableInput.blur()
    }
  }
}
</script>

<style lang="scss" scoped>
.table-input {
  width: 100%;
  /* height: 100%; */
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  min-height: 40px;
  line-height: 40px;
  padding-left: 8px;
  &.required {
    // &::after {
    //   content: '*';
    //   position: absolute;
    //   left: 0px;
    //   color: #ff4949;
    // }
  }
}
</style>

