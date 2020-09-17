<template>
  <div>
    <h1>{{title}}</h1>
    <EquipmentItem v-for="(eq) in equipment" :key="eq.id" :equipment='eq' />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Equipment, getShop } from '../apiRequests';
import EquipmentItem from './EquipmentItem.vue';

@Component({
  components: {
    EquipmentItem
  },
})
export default class Shop extends Vue {  
  private equipment?: Equipment[] = undefined;

  data() {
    return {
      title: "Shop",
      equipment: this.equipment
    }
  } 
  async mounted() {
    this.equipment = await getShop();
  }
}
</script>