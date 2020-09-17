<template>
  <div >
    <h2>{{equipment.name}}</h2>
    <h2>Type: {{equipment.type}}</h2>
    <h2>HP modifier: {{equipment.hpModifier}}</h2>
    <h2>Luck modifier: {{equipment.luckModifier}}</h2>
    <h2>Cost: {{equipment.value}}</h2>
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