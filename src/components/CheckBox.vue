<template>
  <div class="check-content">
    <input ref="check" type="checkbox" v-model="checked" id="1"/>
  </div>
</template>

<script>

export default {
  name: 'CheckBox',
  props: {
    value: {
      required: true
    }
  },
  computed: {
    checked: {
      get () {
        return this.value
      },
      set () {
        this.$emit('input', !this.value)
      }
    }
  },
  methods: {
    handleCheck () {
      this.val = !this.checked
    }
  }
}
</script>

<style lang="scss" scoped>
.check-content {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: rgba(195, 195, 195, 0.4);
  }
  @media (max-width: 999px) {
     width: 60px;
  }
  input[type="checkbox"] {
  display: block;
  content: '';
  -webkit-appearance: none;
  width: 21px;
  height: 20px;
  border: 2px solid $primary;
  border-radius: 5px !important;
  position: relative;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:not(:checked)::after {
    opacity: 0;
  }
  &:checked::after {
    content: '';
    opacity: 1;
    transition: opacity .3s ;
    position: absolute;
    bottom: 4px;
    width: 5px;
    height: 8px;
    border: 2px solid $primary;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

}
}
</style>
