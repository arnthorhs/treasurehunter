<template>
  <div>
    <h1>{{title}}</h1>
    <div id="equipmentList">
    <EquipmentItem v-for="(eq) in equipment" :key="eq.id" :equipment='eq' id="item"/>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Equipment, getShop } from '../apiRequests';
import EquipmentItem from '../components/EquipmentItem.vue';

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
<style scoped>
#equipmentList {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
#item {
  flex: 0.2;
  margin: 1em;
  min-width: 10em;
}
</style>