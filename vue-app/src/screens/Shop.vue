<template>
  <div>
    <h1>Shop</h1>
    <div id="equipmentList">
      <EquipmentItem id="item" v-for="(eq) in equipment" :key="eq.id" :equipment='eq' @addToCart='addToCart($event)' />
    </div>
    <Cart :cart='cart' :cartTotal='cartTotal'/>
  </div>
</template>
<script lang="ts">
import { Component, Vue , Prop, Watch} from 'vue-property-decorator';
import { Equipment, getShop, CharacterModel, getCharacter } from '../apiRequests';
import EquipmentItem from '../components/EquipmentItem.vue';
import Cart from '../components/Cart.vue';

@Component({
  components: {
    EquipmentItem,
    Cart,
  },
})
export default class Shop extends Vue {  
  @Prop() equipment!: Equipment[];
  @Prop() character!: CharacterModel;
  @Prop({default:() => []}) cart!: Equipment[];
  @Prop({default:0}) cartTotal!: number;
  @Prop({default:false}) canAffordCart!: boolean;
  @Prop() wealthLeft!: number;

  data() {
    return {
      wealthLeft: this.character.wealth-this.cartTotal
    }
  }
  async mounted() {
    this.equipment = await getShop();
    this.character = await getCharacter();
  }
  addToCart(equipmentToCart: Equipment){
    this.updateWealthLeft()
    console.log(this.wealthLeft)
    if(equipmentToCart.value < this.wealthLeft){
      this.cart.push(equipmentToCart)
    }
    else {
      alert("Sorry you cant afford this")
    }
  }

  @Watch('cart')
  onCarthanged() {
    let sum = 0;
    this.cart.forEach(equipment => {
      sum += equipment.value
    });
    this.cartTotal = sum;
    this.checkCanAffordCart();
    this.updateWealthLeft();
  }
  updateWealthLeft(){
    this.wealthLeft = this.character.wealth-this.cartTotal;
    console.log(this.wealthLeft)
  }
  checkCanAffordCart(){
    this.canAffordCart = this.cartTotal < this.character.wealth;
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