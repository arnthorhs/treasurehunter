<template>
  <div id="cart" v-if="typeof cart!='undefined' && cart.length!=0 ">
    <h1>Cart</h1>
    <div id="cartContent">
      <div id="itemList" >
        
        <div
          v-for="eq in cart" :key="eq.id">
          <p>{{eq.name}}, {{eq.value}} coins</p>
        </div>
        <p><b>Total cost: {{cartTotal}} coins</b></p>
        <button id="button"><p id="buttonText">Check out</p></button>
      </div>

      <div id="cartProps">
        <p>The cart adds {{plusHP}} to your HP</p>
        <p>The cart adds {{plusLuck}} to your Luck</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { Equipment, CharacterModel } from '../apiRequests'

@Component
export default  class Shop extends Vue{ 
  @Prop() cart!: Equipment[];
  @Prop() character!: CharacterModel;
  @Prop() cartTotal!: number;
  @Prop({default: 0}) plusHP!: number;
  @Prop({default: 0}) plusLuck!: number;

  @Watch('cart')
  onCartChange(){
    this.updateParams()
  }
  updateParams(){
    let sumHP = 0;
    let sumLuck = 0;
    this.cart.forEach(equipment => {
      sumHP += equipment.hpModifier;
      sumLuck += equipment.luckModifier;
    });
    this.plusHP = sumHP;
    this.plusLuck = sumLuck;
  }
}
</script>
<style scoped>

#cart {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 3em;
}
#cartContent{
  display: flex;
  flex-direction:row;
  border-style:dashed;
  border-color: black;
}
#itemList {
  flex:0.6;
}
#cartProps {
  padding-left: 2em;
  flex: 0.5;
}
</style>