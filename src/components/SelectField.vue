<template>
  <div style="position:relative;">
    <div class="select-container">
      <input type="text" name="select" id="select" @focus="focused = true; blur = false" @blur="blur = true"  :value="value" placeholder="   " />
      <div class="line"></div>
      <label for="select">{{label }}</label>
      <button @click="clearSelection" v-if="value !== '' && value !== null"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="20px" height="20px"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg></button>
      <i class="arrow-down"><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 448 512">
          <path
            d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
        </svg></i>
    </div>
    <div id="selectOptions" :class="['content',{'active-content': focused,'inactive-content' : blur}]">
      <ul class="options">
        <li @click="selectOption(o)" v-for="o in options" :key="o">{{o}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: false,
      default: ' '
    }
  },
  data () {
    return {
      focused: false,
      blur: false,
      options: [
        'Brasil',
        'Argentina',
        'Paraguai',
        'Uruguai',
        'Colômbia',
        'Equador',
        'México',
        'Cuba',
        'Haiti',
        'Guiana Francesa',
        'Venezuela'
      ]
    }
  },
  computed: {
  },
  methods: {
    selectOption (option) {
      this.$emit('input', option)
      this.focused = false
    },
    clearSelection () {
      this.$emit('input', null)
    }
  }
}
</script>

<style lang="scss">

.select-container {
  position: relative;
  height: 50px;

  input {
    border: 0;
    width: 100%;
    background-color: transparent;
    height: 50px;
    letter-spacing: 1px;
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid $grey;

    &:focus {
      outline: none;
    }

    &:not(:focus):placeholder-shown~ .line {
      transform: scaleX(0);
    }

    &:not(:focus):placeholder-shown ~ label {
      bottom: -11px;
      color: $grey;
    }
    &:not(:focus):placeholder-shown ~ .arrow-down {
      fill: $grey;
    }
    &:focus {
      outline: none;
    }

    &:focus ~ .line,
    &:valid ~ .line {
      transform: scaleX(1);
    }

    &:focus~label,
    &:valid~label {
      transform: translateY(-26px);
      font-size: 0.9rem;
      font-weight: 550;
      color: $primary;
    }
    &:focus ~ .arrow-down  {
      transform: rotate(-180deg);
      fill: $primary;
    }
    &:valid ~ .arrow-down {
      fill: $primary;
    }
  }

  .line {
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 2px;
    background-color: $primary;
    transform: scaleX(0);
    transition: 0.3s;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    position: absolute;
    color: $dark;
    width: 30px;
    height: 30px;
    outline: none;
    right: 40px;
    bottom: 13px;
    border-radius: 50%;
    border: 0;
    cursor: pointer;
    font-size: 1rem;
    &:hover {
      background-color: rgba(195, 195, 195, 0.5);
    }
    svg {
      fill: $primary;
    }
  }
  .arrow-down {
    position: absolute;
    transition: transform 0.3s linear;
    right: 10px;
    bottom: 15px;
    fill: $grey;
    width: 22px;
    height: 23px;
  }

  label {
    pointer-events: none;
    position: absolute;
    bottom: 15px;
    left: 0;
    color: $grey;
    font-family: "Poppins" sans-serif;
    transition: 0.3s;
  }
}
.active-content {
  opacity: 1 !important;
  transition: opacity .4s linear !important;
  display: block !important;
}
.inactive-content {
  opacity: 0 !important;
  transition:  opacity .4s linear !important;
}

.content {
  display: flex;
  flex-direction: column;
  width: 100%;
  display: none;
  background: #fff;
  padding: 20px 0;
  position: absolute;
  z-index: 1;
  border-top: 0px;
  border-left: 1px solid $primary;
  border-right: 1px solid $primary;
  border-bottom: 1px solid $primary;

  .options {
    max-height: 250px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 7px;
    }

    &::-webkit-scrollbar-track {
      background-color: #f1f1f1;
      border-radius: 25px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 25px;
      background-color: #ccc;
    }

    li {
      height: 50px;
      margin: 0 20px;
      font-size: 1rem;
      border-bottom: 1px solid #ccc;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 550;
      line-height: 50px;
      padding-left: 1rem;
      letter-spacing: 1px;
      &:hover {
        background-color: #dfdfdf;
      }
    }
  }
}
</style>
