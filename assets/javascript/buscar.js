let recetas=[
    {
        nombre:"Coulibiac",
        ingredientes:[
            "Salmón sin piel - 2 kilos",
            "Sal - 1 Cucharada",
            "Leche - 100 c.c.",
            "Manteca - 400 gr",
            "Azúcar - 100 g",
            "Huevos - 6 Unidades",
            "Harina 000 - 1/2 kg",
            "Harina 0000 - 1 kg",
            "Levadura en polvo - 10 g",
            "Champiñones - 250 g",
            "Salsa bechamel - 1 Taza",
            "Eneldo picado - 2 Cucharadas",
            "Espinaca blanqueada - 250 g",
            "Crêpes - 12 Unidades",
            "Perejil picado - 2 Cucharadas",
            "Sal - a gusto",
            "Arroz pilaf - 2 ½ Tazas",
            "Huevos duros - 5 Unidades"
        ],
        preparacion:[
            "Trabajar en batidora con gancho harina 0000 y la mitad de la harina 000, azúcar, levadura en polvo, leche, sal e ir agregando huevos de a uno sin dejar de amasar hasta unir.",
            "Agregar de a poco manteca pomada a medida que se vaya integrando.",
            "Bajar la masa a la mesada y trabajar con las manos sin amasar agregando harina si fuera necesario hasta unir bien.",
            "Llevar a un bowl, tapar y una vez que duplique su volumen, desgasificar y volver a formar un bollo.",
            "Dejar levar.",
            "Mezclar en un bowl arroz pilaf, salsa bechamel, eneldo y perejil picado y reservar.",
            "Picar los champiñones y saltear en sartén con manteca hasta cocinar y secar bien la preparación, dejar enfriar y reservar.",
            "Estirar la masa con palote formando un rectángulo.",
            "Pincelar con huevo la mitad de la masa estirada y cubrir la base pintada con crepes.",
            "Hacer un zócalo en el centro de las crepes con el arroz.",
            "Condimentar el salmón con sal y acomodar sobre el arroz.",
            "Agregar sobre el salmón las espinacas blanqueadas y picadas y sobre las espinacas los champiñones reservados.",
            "Cortar los huevos duros en mitades y cubrir los champiñones.",
            "Tapar con crepes, pincelar con huevo y cubrir con el resto de la masa de brioche estirada.",
            "Pintar con huevo la masa y llevar a horno a 180ºC por 50 minutos.",
            "Dejar entibiar y cortar en porciones."
        ]
    },
    {
        nombre :"Los No Tan Tristes.",
        ingredientes:2021,
        preparacion:[
            "Invisible. Nanpa Básico · Charles Ans · Gera MX.",
            "Penitencia Charles Ans · Gera MX · Nanpa Básico.",
            "Déjame en Paz. Charles Ans · Nanpa Básico · Gera MX.",
            "Ya No Te Pude Ver. Gera MX · Nanpa Básico · Charles Ans"
        ]
    }
]
function buscar(){
    const name = document.getElementById('nombre').value;
    let  nombre;
    let  ingrediente;
    let  instruccion;
    for ( let i = 0; i < decetas.length; i++){
        if(receta[i].nombre == name){
            nombre = receta[i].nombre;
            ingrediente = receta[i].ingredientes;
            preparacion = receta[i].preparacion; //;
            break;
        }
    }
    document.getElementById('title').innerText= "Receta "+nombre; 
    document.getElementById('ingrediente').innerText= "ingredientes de preparacion "+ingrediente; 
    //mostrando los ingredientes
    const lista  = document.getElementById('preparacion');
    const ul = document.createElement('ul');
    for (let i = 0; i < preparacion.length; i++) {
        const li = document.createElement('li');
        li.textContent = preparacion[i]; 
        ul.appendChild(li); 
    } 
    lista.appendChild(ul);
}