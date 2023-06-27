const gridContainer=document.getElementById('grid-container');
const content=document.getElementById('content');
const nextButton=document.getElementById('next');
const beforeButton=document.getElementById('before');
var index = 0;

function grid(){
  for(let i=1;i<=100;i++){
    const item=document.createElement('div');
    item.id="grid"+i;
    item.innerText=i;
    gridContainer.appendChild(item);
  }
}
grid();

let set=[];

const randomNumbers = ()=>{
    const array=Array(100).fill(false);

        while(set.length<100){
           var value=Math.floor( Math.random() * 100 )+1;
           if(array[value-1] == false){
            set.push(value);
               array[value-1] = true;
            }

        }
    }
    
    randomNumbers();

nextButton.addEventListener('click',()=>{
  if(index<set.length){
    var value=`${set[index]}`;
    content.innerText=value;
      var changing=document.getElementById("grid"+value);
      changing.style.backgroundColor="yellow";
  }
  if(index == set.length){
    content.innerHTML="finish";
  }
      index++;
});


beforeButton.addEventListener('click',()=>{
   if(index>0){
     index--;
      var value=`${set[index]}`;
    content.innerText=value;
      var changing=document.getElementById("grid"+value);
      changing.style.backgroundColor="white";
   }
   if(index == 0){
    content.innerText='start';
  }
});





