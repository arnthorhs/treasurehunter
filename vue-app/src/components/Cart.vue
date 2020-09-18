<template>
  <div v-if="cart">
    <h1>Cart</h1>
    <div id="cartList" >
      <div
        v-for="eq in cart" :key="eq.id">
        <p>{{eq.name}}</p>
      </div>
    </div>
    <p>{{cartTotal}}</p>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Equipment } from '../apiRequests'

@Component
export default  class Shop extends Vue{ 
  @Prop() cart!: Equipment[];
  @Prop() cartTotal!: number;

}
</script>
<style scoped>
#cartList {
  flex-direction: column;
}
</style>