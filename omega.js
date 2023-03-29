const content = document.querySelectorAll('div')
const abmenu = $('div#hov')
const about = $('a#ab')

about.on('mouseover', function(){
    abmenu.slideDown()
})

abmenu.on('mouseleave', function(){
    $(this).slideUp()
})

const hlinks = $('a#co')
hlinks.on('mouseover', function(){
    abmenu.slideUp()
})

window.onload =function(){
    content[0].remove()
    content[2].classList.remove('hidden')
}

const afrib = document.getElementById('afrib')
const eurob = document.getElementById('eurob')
const asiab = document.getElementById('asiab')
const afrif = document.getElementById('afri')
const eurof = document.getElementById('euro')
const asiaf = document.getElementById('asia')



eurob.addEventListener('click', function(){
    if(afrib.classList.contains('bg-[#F28C28]') || asiab.classList.contains('bg-[#F28C28]')){
        afrib.classList.replace('bg-[#F28C28]', 'bg-white/0')
        asiab.classList.replace('bg-[#F28C28]', 'bg-white/0')
        afrib.classList.remove('text-white')
        asiab.classList.remove('text-white')
    }else{
        eurob.classList.replace('bg-white/0', 'bg-[#F28C28]')
        eurob.classList.add('text-white')
    }
    eurob.classList.replace('bg-white/0', 'bg-[#F28C28]')
    eurob.classList.add('text-white')
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
        eurob.classList.remove('text-white')
        afrib.classList.remove('text-white')
    }else{
        asiab.classList.replace('bg-white/0', 'bg-[#F28C28]')
        asiab.classList.add('text-white')
    }
    asiab.classList.replace('bg-white/0', 'bg-[#F28C28]')
    asiab.classList.add('text-white')
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
        asiab.classList.remove('text-white')
        eurob.classList.remove('text-white')
    }else{
        afrib.classList.add('bg-[#F28C28]')
        afrib.classList.add('text-white')
    }
    afrib.classList.replace('bg-white/0', 'bg-[#F28C28]')
    afrib.classList.add('text-white')
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

