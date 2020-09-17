<template>
  <div id="equipmentItem" v-bind:class="equipment.type">
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
  @Prop()  equipment!: Equipment;

}
</script>
<style scoped>
.Armor{
  background-color: lightsalmon;
}
.Weapon{
  background-color:lightcyan;
}
.Trinket{
  background-color:lightseagreen;
}
</style>>