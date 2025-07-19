const marvel_heros = ["ironman" , "spiderman" , "thor"]
const dc_heros =["supermann" , "flash" , "batman"]

 const all_new_heros = [...marvel_heros,...dc_heros]

 console.log(all_new_heros);
 

//  spread operatoer makes easy handles array in array like[ 12,23,34, [2,3,4,5] ,34, 45  ]
const another_array = [1,2,3,4[4,5,6[4,5,6],3,4,5,6]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
