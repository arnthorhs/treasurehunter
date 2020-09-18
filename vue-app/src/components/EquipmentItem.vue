<template>
  <div id="equipmentItem" v-bind:class="equipment.type.toLowerCase()">
    <h3>{{equipment.name}}</h3>
    <p>Type: {{equipment.type}}</p>
    <p>HP modifier: {{equipment.hpModifier}}</p>
    <p>Luck modifier: {{equipment.luckModifier}}</p>
    <p>Cost: {{equipment.value}}</p>
    <button v-on:click="handleSubmit()" id="button"><p id="buttonText">Add to cart</p></button>
  </div>
  
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Equipment } from '../apiRequests'

@Component
export default  class Shop extends Vue{ 
  @Prop() equipment!: Equipment;
  @Prop({ default: false }) selected!: boolean;
  handleSubmit() {
    this.$emit("addToCart", this.equipment);
  }
}
</script>
<style scoped>
.armor{
  background-color: lightsalmon;
}
.weapon{
  background-color:lightcyan;
}
.trinket{
  background-color:lightseagreen;
}

</style>>