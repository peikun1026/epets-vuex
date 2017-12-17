export default {
  cartFoods (state) {
    let foods = [];
    state.goods.forEach((good)=>{
      good.foods.forEach((food)=>{
        if(food.count){
          foods.push(food);
        }
      })
    })
    return foods;
  },
  totalCount (state,getters) {
    return getters.cartFoods.reduce((preCount,cartFood)=>preCount+cartFood.count,0)
  },
  totalPrice (state,getters) {
    return getters.cartFoods.reduce((prePrice,cartFood)=>prePrice+cartFood.count*cartFood.price,0)
  }
}
