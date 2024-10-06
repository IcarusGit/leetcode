// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 


function cakes(recipe, available) {
//   Object.getOwnPropertyNames(recipe).length
//   Object.getOwnPropertyNames(available).length
    let rMin = Infinity;
    
    for (let ingedient in recipe){
        // nag loop lang ako sa recipe since yun yung required e so per ingredient ng recipe ang ichecheck ko

        //so eto lang edge case check muna: kapag wala yung ingredient na yon sa available edi pass na
        if (!available[ingedient]) return 0;
        // edge case check: kapag mas marami yugn recipe kesa sa available edi olats na
        if (recipe[ingedient] > available[ingedient]) return 0;
        
        // ngayon mag didivide lang ako nung nasa available at nung mismong recipe since pag dinivide ko sila dun ko malalaman kung ilang ang possible pieces na magawa ko
        let cakeCounter = Math.floor(available[ingedient] / recipe[ingedient]);
        
        // shempre kung saang ingredients yung pinaka onti edi ayun yugn ibabalik kong output
        rMin = Math.min(rMin, cakeCounter);
    }
    
    return rMin;
}



function alternative(recipe, available){
    return Object.keys(recipe).reduce((currentCount, ingredient) => {
        if (!available[ingredient]) return 0;
        if (recipe[ingredient] > available[ingredient]) return 0;
        return Math.min(currentCount, Math.floor(available[ingredient] / recipe[ingredient]))
    },Infinity);
}