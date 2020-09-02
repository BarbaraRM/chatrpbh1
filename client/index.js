//io("http://localhost:3000/")
let socket=io()

let mensaje=document.getElementById('mensaje')
let usuario=document.getElementById('usuario')
let btn=document.getElementById('enviar')
let btn1=document.getElementById('join')
let conversacion=document.getElementById('conversacion')
let acciones=document.getElementById('acciones')


btn.addEventListener('click',()=>{
    socket.emit('nuevo_mensaje',{mensaje:mensaje.value,usuario:usuario.value})
    mensaje.value=''
})

btn1.addEventListener('click',()=>{
    socket.emit('nueva_conexion',{usuario:usuario.value})
})

mensaje.addEventListener('keypress',()=>{
    socket.emit('escribiendo',usuario.value)
})

socket.on('mensaje_servidor',(data)=>{
    acciones.innerHTML=''
    conversacion.innerHTML+=`<p><strong>${data.usuario}</strong> ${data.mensaje}</p>`
})

socket.on('mensaje_servidor1',(data)=>{
    acciones.innerHTML=''
    conversacion.innerHTML+=`<p>${data.usuario} se ha conectado</p>`
})

socket.on('escribiendo',(usuario)=>{
    acciones.innerHTML=`<p><strong>${usuario} </strong>escribiendo...</p>`
})

