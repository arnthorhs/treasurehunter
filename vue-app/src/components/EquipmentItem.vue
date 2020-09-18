<template>
  <div id="equipmentItem" v-bind:class="equipment.type.toLowerCase()" v-on:click="handleSubmit()">
    <h3>{{equipment.name}}</h3>
    <h4>Type: {{equipment.type}}</h4>
    <h4>HP modifier: {{equipment.hpModifier}}</h4>
    <h4>Luck modifier: {{equipment.luckModifier}}</h4>
    <h4>Cost: {{equipment.value}}</h4>
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
button {
  margin: 0.5em
}
</style>>