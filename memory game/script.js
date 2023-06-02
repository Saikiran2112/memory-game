let result=document.getElementById('result')
let chosen=[]
let chos=[]
let b=6
let count=0
let play=document.getElementById('play')
const collection=[
    {
        name:'professor',
        img:'professor.jpg'
    },
    {
        name:'scofield',
        img:'scofield.webp'
    },
    {
        name:'walter',
        img:'walter.jpg'
    },
    {
        name:'wednesday',
        img:'wednesday.jpg'
    },
    {
        name:'shrikanth',
        img:'shrikanth.jpg'
    },
    {
        name:'shahid',
        img:'shahid.jpg'
    },
    {
        name:'professor',
        img:'professor.jpg'
    },
    {
        name:'scofield',
        img:'scofield.webp'
    },
    {
        name:'walter',
        img:'walter.jpg'
    },
    {
        name:'wednesday',
        img:'wednesday.jpg'
    },
    {
        name:'shrikanth',
        img:'shrikanth.jpg'
    },
    {
        name:'shahid',
        img:'shahid.jpg'
    }


]
collection.sort(()=>0.5-Math.random())
console.log(collection)
let grid=document.getElementById('grid')
function create(){
    play.hidden=true
   
    for(let i=0;i<12;i++){
        let n=document.createElement('img')
        n.setAttribute('src','rainbow.png')
        n.setAttribute('id',i)
        n.setAttribute('width','100px')
        n.addEventListener('click',flip)
        grid.appendChild(n)

    }
}
let d=document.getElementsByTagName('img')
create()
function check(){
    if(chos[0]===chos[1]){
      d[chosen[0]].setAttribute('src','white.jpg')
      d[chosen[1]].setAttribute('src','white.jpg')
      d[chosen[0]].removeEventListener('click',flip)
      d[chosen[1]].removeEventListener('click',flip)
      count++
      if(b==count){
        result.textContent="You Won"
        grid.innerHTML=''
        play.hidden=false

      }

    }
    else{
        d[chosen[0]].setAttribute('src','rainbow.png')
        d[chosen[1]].setAttribute('src','rainbow.png')

    }
    chos=[]
    chosen=[]
  
}

function flip(){
    let id=this.getAttribute('id')
    console.log(id)
    console.log(d)
    this.setAttribute('src',collection[id].img)
    
    chosen.push(id)
    chos.push(collection[id].name)
    console.log(chosen)

    if(chosen.length==2){
        setTimeout(check,1000)
    }
    

}