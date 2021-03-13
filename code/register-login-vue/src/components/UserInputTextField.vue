<template>
  <div class="inputVue" :style="{height: validateSize(height) ? height : '40px', width: validateSize(width) ? width : '100%'}" >
    <input :id="`input-id-${label}`" @input="inputHandler" ref="input" :type="validateType(type) ? type : 'text'" :required="required"/>
    <label :for="`input-id-${label}`">{{label}}</label>
  </div>
</template>

<script>
export default {
  name: 'InputVue',
  props:{
    label:{
      type: String,
      require: true
    },
    error: Boolean,
    height: String,
    width: String,
    type: String,
    required: Boolean
  },
  methods:{
    inputHandler(e){
      this.$emit('input', e.target.value);
    },
    validateSize(size) {
      return /\s*(\d+)px|\s*(\d+)rem|\s*(\d+)em|\s*(\d+)%/.test(size);
    },
    validateType(type){
      return ["text", "email", "password","search", "tel", "number", "url"].includes(type);
    }
  },
  watch:{
    error: function(newVal, oldVal){
      if(newVal !== oldVal){
        if(newVal){
          this.$refs.input.classList.add("error");
          setTimeout(()=>{
            this.$refs.input.classList.remove("error");
          }, 1500);
        }
      }
    }
  },
  mounted(){
    this.$refs.input.addEventListener('focusout', ()=>{
      // check if there is an input
      if(this.$refs.input.value !== "")
        this.$refs.input.classList.add("inputIn");
      else
        this.$refs.input.classList.remove("inputIn");
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inputVue{
  position: relative;
}
input{
  outline: none;
  border: 2px solid rgba(68, 68, 68, 0.808);
  border-radius: 5px;
  height: 100%;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
}
input:hover,
input:focus,
input.inputIn{
  border-color: rgb(51, 175, 35);
}
label{
  position: absolute;
  top: calc(50% - 7px);
  left: 10px;
  transition: 0.2s all ease;
  cursor: text;
}

input:focus ~ label,
input.inputIn ~ label{
  top: -7px;
  font-size: 14px;
  color: rgb(51, 175, 35);
  background: #fff;
}

input.error{
  border-color: rgb(175, 35, 35);
}
input.error ~ label{
  color: rgb(175, 35, 35);
}

.error{
  animation: shake 0.4s forwards ease-out;
}

@keyframes shake{
  0%, 100%{
    transform: translate(0px,0px);
  }
  14%{
    transform: translate(-10px,0px);
  }
  28%{
    transform: translate(10px,0px);
  }
  42%{
    transform: translate(-10px,0px);
  }
  56%{
    transform: translate(10px,0px);
  }
  70%{
    transform: translate(-10px,0px);
  }
  84%{
    transform: translate(10px,0px);
  }
}
</style>
