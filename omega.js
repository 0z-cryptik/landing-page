var about = document.querySelectorAll('a')[0]
var abmenu = document.getElementById('hov')
var content = document.querySelectorAll('div')

about.addEventListener('mouseover', function(){
    if(abmenu.classList.contains('hidden')){
        abmenu.classList.replace('hidden', 'block')
    }else{
        abmenu.classList.add('block')
    }
})

abmenu.addEventListener('mouseleave', function(){
    this.classList.replace('block', 'hidden')
})


window.onload =function(){
    content[0].remove()
    content[2].classList.remove('hidden')
}

var afrib = document.getElementById('afrib')
var eurob = document.getElementById('eurob')
var asiab = document.getElementById('asiab')

var afrif = document.getElementById('afri')
var eurof = document.getElementById('euro')
var asiaf = document.getElementById('asia')



eurob.addEventListener('click', function(){
    if(afrib.classList.contains('bg-[#F28C28]') || asiab.classList.contains('bg-[#F28C28]')){
        afrib.classList.replace('bg-[#F28C28]', 'bg-white/0')
        asiab.classList.replace('bg-[#F28C28]', 'bg-white/0')
    }else{
        eurob.classList.replace('bg-white/0', 'bg-[#F28C28]')
    }
    eurob.classList.replace('bg-white/0', 'bg-[#F28C28]')
    if(afrif.classList.contains('block')){
        afrif.classList.replace('block', 'hidden')
    }else if(asiaf.classList.contains('block')){
        asiaf.classList.replace('block', 'hidden')
    }
    else{
        eurof.classList.replace('hidden', 'block')
    }
    eurof.classList.replace('hidden', 'block')
})

asiab.addEventListener('click', function(){
    if(afrib.classList.contains('bg-[#F28C28]') || eurob.classList.contains('bg-[#F28C28]')){
        afrib.classList.replace('bg-[#F28C28]', 'bg-white/0')
        eurob.classList.replace('bg-[#F28C28]', 'bg-white/0')
    }else{
        asiab.classList.replace('bg-white/0', 'bg-[#F28C28]')
    }
    asiab.classList.replace('bg-white/0', 'bg-[#F28C28]')
    if(afrif.classList.contains('block')){
        afrif.classList.replace('block', 'hidden')
    }else if(eurof.classList.contains('block')){
        eurof.classList.replace('block', 'hidden')
    }
    else{
        asiaf.classList.replace('hidden', 'block')
    }
    asiaf.classList.replace('hidden', 'block')
})

afrib.addEventListener('click', function(){
    if(eurob.classList.contains('bg-[#F28C28]') || asiab.classList.contains('bg-[#F28C28]')){
        eurob.classList.replace('bg-[#F28C28]', 'bg-white/0')
        asiab.classList.replace('bg-[#F28C28]', 'bg-white/0')
    }else{
        afrib.classList.add('bg-[#F28C28]')
    }
    afrib.classList.replace('bg-white/0', 'bg-[#F28C28]')
    if(asiaf.classList.contains('block')){
        asiaf.classList.replace('block', 'hidden')
    }else if(eurof.classList.contains('block')){
        eurof.classList.replace('block', 'hidden')
    }
    else{
        afrif.classList.replace('hidden','block')
    }
    afrif.classList.replace('hidden', 'block')
})

const links = document.querySelectorAll('a')

for(var i=0; i < links.length; i++){
    links[i].addEventListener('click', function(e){
        e.preventDefault()
    })
}

const btns = document.querySelectorAll('button')

for(var i=0; i < btns.length;i++){
    btns[i].classList.add('hover:z-[5]')
}

const f3links= [links[1], links[2], links[3]]

for(var i=0; i < f3links.length; i++){
    f3links[i].addEventListener('mouseover', function(){
        if(abmenu.classList.contains('block')){
            abmenu.classList.replace('block', 'hidden')
        }
    })
}