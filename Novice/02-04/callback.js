function main(param1,param2,callBack){
  console.log(param1, param2)
  callBack()
}

function myCallback(){
  console.log ('hello callback')
}

main(1,2,myCallback)

/* ===================
Output :
 1 2
 hello callback
 */
