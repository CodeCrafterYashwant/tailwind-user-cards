let input = document.querySelector('input')
let val  = input.value || 1
function featchusers(num){
    document.querySelector('.main').innerHTML = ''
    url = `https://randomuser.me/api/?results=${num}`
    fetch(url)
    .then(rowdata=>rowdata.json())
    .then(data=>{
        let info = data.results;
        console.log(info);
        info.forEach(user => {
            let name = user.name.title +' ' +user.name.first + ' ' + user.name.last;
            let image = user.picture.large
            let id = user.id.name +' '+user.id.value;
            let email = user.email;
            let div = document.createElement('div')
            div.className = 'box group w-full max-w-sm rounded-3xl border border-white/10   bg-white/10 p-6 text-center shadow-2xl shadow-violet-950/50 backdrop-blur-md  transition duration-300 hover:-translate-y-1 hover:shadow-violet-900/60'
            let div2 = document.createElement('div')
            div2.className = 'mb-5 flex justify-center'
            let img = document.createElement('img')
            img.className = 'h-35 w-35 rounded-full border-4 border-violet-300 object-cover     shadow-lg shadow-violet-500/30 ring-4 ring-white/10'
            img.src = image
            div2.appendChild(img)
            let h1 = document.createElement('h1')
            h1.className = 'text-3xl font-bold tracking-tight text-white'
            h1.textContent = name
            let p  = document.createElement('p')
            p.className = 'mt-2 text-sm font-medium uppercase tracking-[0.25em]     text-violet-200'
            p.textContent = id
            let p2 = document.createElement('p')
            p2.className = 'mt-5 text-sm leading-relaxed text-slate-200 '
            p2.textContent = email

            div.appendChild(div2)
            div.appendChild(h1)
            div.appendChild(p)
            div.appendChild(p2)
            document.querySelector('.main').appendChild(div)
        });

    })
    .catch((err)=>{
        console.log(err);

    })

}
input.addEventListener('change',function(event) {
     val = (event.target.value)
})
featchusers(val)

document.querySelector('.refreshBotton').addEventListener('click',function(){
    featchusers(val)
})