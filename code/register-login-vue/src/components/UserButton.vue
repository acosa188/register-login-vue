<template>
  <div class="user-button-wrapper">
    <button type="submit" ref="button" class="btn" id="user-button-id" :style="{width: validateSize(width) ? width : '100%', height: validateSize(height) ? height : '50px'}">
      <span> {{ label }} </span>
      <div class="icon">
        <i :class="`fa ${signUp ? 'fa-user-plus': 'fa-sign-in'}`"></i>
        <i class="fa fa-remove"></i>
        <i class="fa fa-check"></i>
        <i class="fa lds-dual-ring"></i>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: "UserButton",
  props: {
    label: String,
    signUp: Boolean,
    height: String,
    width: String,
    btn_state: String,
  },
  methods:{
    validateSize(size){
      return /\s*(\d+)px|\s*(\d+)rem|\s*(\d+)em|\s*(\d+)%/.test(size);
    }
  },
  watch: {
    btn_state: function (newVal, oldVal) {
      let accepted_states = ["standby", "loading", "success", "error"];

      if (newVal !== oldVal) {
        if (accepted_states.includes(newVal.toLowerCase())) {
          switch (newVal.toLowerCase()) {
            case "loading":
              this.$refs.button.classList.add("loading")
              break;
            case "success":
              this.$refs.button.classList.remove("loading")
              this.$refs.button.classList.add("success")
              setTimeout(() => {
                this.$refs.button.classList.remove("success")
              }, 3000);
              break;
            case "error":
              this.$refs.button.classList.remove("loading")
              this.$refs.button.classList.add("error")
              setTimeout(() => {
                this.$refs.button.classList.remove("error")
              }, 3000);
              break;
          }
        } else {
          throw Error(
            "wrong button state, please refer to the component document"
          );
        }
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user-button-wrapper{
  width: 100%;
}
.btn {
  display: block;
  position: relative;
  background-color: #549b2c;
  color: #fff;
  border: none;
  border-radius: 5px;
  outline: none;
  height: 50px;
  width: 300px;
  cursor: pointer;
  margin: auto;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
  transition: all 0.2s cubic-bezier(0.31, -0.105, 0.43, 1.4);
}

.btn > span,
.btn > .icon {
  height: 100%;
  text-align: center;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn > span {
  width: 72%;
  line-height: inherit;
  font-size: 22px;
  text-transform: uppercase;
  left: 0;
  transition: all 0.2s cubic-bezier(0.31, -0.105, 0.43, 1.4);
}
.btn > span::after {
  content: "";
  background-color: #4a8826;
  width: 2px;
  height: 70%;
  position: absolute;
  top: 15%;
  right: -1px;
}
.btn > .icon {
  width: 28%;
  right: 0;
  transition: all 0.2s cubic-bezier(0.31, -0.105, 0.43, 1.4);
}

.btn > .icon > .fa {
  font-size: 30px;
  vertical-align: middle;
  transition: all 0.2s ease;
}

.btn > .icon > .fa-sign-in {
  height: 36px;
  margin-top: 3px;
}

.btn > .icon > .fa-user-plus {
  height: 36px;
  margin-top: 3px;
}

.btn > .icon > .fa-check {
  display: none;
}

.btn > .icon > .fa-remove {
  display: none;
}

.btn > .icon > .lds-dual-ring{
  display: none;
}

.btn.error {
  background-color: #9b2c2c;
}

.btn.success > span,
.btn.loading > span,
.btn.error > span,
.btn:hover > span {
  left: -72%;
  opacity: 0;
}

.btn.success > .icon,
.btn.loading > .icon,
.btn.error > .icon,
.btn:hover > .icon {
  width: 100%;
}

.btn.success > .icon > .fa,
.btn.loading > .icon > .fa,
.btn.error > .icon > .fa,
.btn:hover > .icon > .fa {
  font-size: 45px;
}

.btn.success > .icon > .fa-sign-in,
.btn.error > .icon > .fa-sign-in,
.btn.loading > .icon > .fa-sign-in{
  display: none;
}
.btn.success > .icon > .fa-user-plus,
.btn.error > .icon > .fa-user-plus,
.btn.loading > .icon > .fa-user-plus {
  display: none;
}
.btn.success > .icon > .fa-remove,
.btn.loading > .icon > .fa-remove {
  display: none;
}
.btn.success > .icon > .fa-check {
  display: inline-block;
}
.btn.success > .icon > .lds-dual-ring,
.btn.error > .icon > .lds-dual-ring {
  display: none;
}


.btn.error > .icon > .fa-remove {
  display: inline-block;
}
.btn.error > .icon > .fa-check,
.btn.loading > .icon > .fa-check {
  display: none;
}


.btn.loading > .icon > .lds-dual-ring {
  display: inline-block;
}

.btn:hover {
  opacity: 0.9;
}
.btn:hover > .icon > .fa-sign-in,
.btn:hover > .icon > .fa-user-plus {
  height: 45px;
}
.btn:active {
  opacity: 1;
}

/* loading css */
.lds-dual-ring {
  display: inline-block;
  width: 45px;
  height: 45px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 30px;
  height: 30px;
  margin: 3px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
