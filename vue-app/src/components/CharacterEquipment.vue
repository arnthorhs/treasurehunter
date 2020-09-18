<template>
  <div id="equipmentItem" v-bind:class="equipment.type.toLowerCase()">
    <h3>{{equipment.name}}</h3>
    <p>Type: {{equipment.type}}</p>
    <p>HP modifier: {{equipment.hpModifier}}</p>
    <p>Luck modifier: {{equipment.luckModifier}}</p>
    <p>Cost: {{equipment.value}}</p>
  </div> 
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Equipment } from '../apiRequests'

@Component
export default  class Shop extends Vue{
  @Prop() equipment!: Equipment;

}
</script>
<style scoped>

</style>