__NUXT_JSONP__("/blog/load-average", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K){return {data:[{article:{slug:"load-average",description:"El \"load average\" indica el promedio de carga del sistema en un periodo dado.",title:"Load Average",img:"images\u002Fload-average.png",alt:"nice image",tags:[x,s],toc:[{id:y,depth:t,text:z},{id:A,depth:t,text:B},{id:C,depth:t,text:D},{id:E,depth:u,text:F},{id:G,depth:u,text:H},{id:I,depth:u,text:J}],body:{type:"root",children:[{type:a,tag:v,props:{id:y},children:[{type:a,tag:f,props:{ariaHidden:g,href:"#introducci%C3%B3n",tabIndex:h},children:[{type:a,tag:e,props:{className:[i,j]},children:[]}]},{type:b,value:z}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"Habitualmente me encuentro en la situacion de ingresar a servidores para verificar su rendimiento y me pareció oportuno detenerme en documentar la métrica de uso de load average."}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"Esta métrica, se consigue con un simple comando y proporciona una informacion vital sobre la salud del sistema."}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"El load average representa el promedio de carga del sistema, indicando la cantidad de trabajo que el sistema está manejando.\nNo se trata de verificar solo el uso de CPU, sino de la carga general que incluye procesos esperando por recursos, ya sea CPU o entrada\u002Fsalida de disco.\nSe muestrea como tres números correspondientes a los promedios de carga en los últimos 1, 5 y 15 minutos, proporcionando una visión de la tendencia del rendimiento del sistema."}]},{type:b,value:c},{type:a,tag:v,props:{id:A},children:[{type:a,tag:f,props:{ariaHidden:g,href:"#c%C3%B3mo-monitorizar-el-load-average-",tabIndex:h},children:[{type:a,tag:e,props:{className:[i,j]},children:[]}]},{type:b,value:B}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"Se puede verificar la carga utilizando los siguientes comandos:"}]},{type:b,value:c},{type:a,tag:k,props:{className:[l]},children:[{type:a,tag:m,props:{className:[n,o]},children:[{type:a,tag:p,props:{},children:[{type:a,tag:e,props:{className:[q,r]},children:[{type:b,value:"uptime"}]},{type:b,value:c}]}]}]},{type:b,value:c},{type:a,tag:k,props:{className:[l]},children:[{type:a,tag:m,props:{className:[n,o]},children:[{type:a,tag:p,props:{},children:[{type:a,tag:e,props:{className:[q,r]},children:[{type:b,value:"top"}]},{type:b,value:c}]}]}]},{type:b,value:c},{type:a,tag:k,props:{className:[l]},children:[{type:a,tag:m,props:{className:[n,o]},children:[{type:a,tag:p,props:{},children:[{type:a,tag:e,props:{className:[q,r]},children:[{type:b,value:K}]},{type:b,value:" \u002Fproc\u002Floadavg\n"}]}]}]},{type:b,value:c},{type:a,tag:v,props:{id:C},children:[{type:a,tag:f,props:{ariaHidden:g,href:"#c%C3%B3mo-se-interpreta-load-average-",tabIndex:h},children:[{type:a,tag:e,props:{className:[i,j]},children:[]}]},{type:b,value:D}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"El load average se expresa normalmente con tres números, por ejemplo: 0.85, 0.77, 0.75. Estos números representan el promedio de carga del sistema durante los últimos 1, 5 y 15 minutos, respectivamente."}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"Aquí está cómo interpretar estos números:"}]},{type:b,value:c},{type:a,tag:w,props:{id:E},children:[{type:a,tag:f,props:{ariaHidden:g,href:"#comparaci%C3%B3n-con-el-n%C3%BAmero-de-n%C3%BAcleos-de-cpu",tabIndex:h},children:[{type:a,tag:e,props:{className:[i,j]},children:[]}]},{type:b,value:F}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"Primero, debes saber cuántos núcleos de CPU tiene tu sistema. Puedes encontrar esta información usando"}]},{type:b,value:c},{type:a,tag:k,props:{className:[l]},children:[{type:a,tag:m,props:{className:[n,o]},children:[{type:a,tag:p,props:{},children:[{type:b,value:"nproc\n"}]}]}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"o revisando el archivo \"cpuinfo\":"}]},{type:b,value:c},{type:a,tag:k,props:{className:[l]},children:[{type:a,tag:m,props:{className:[n,o]},children:[{type:a,tag:p,props:{},children:[{type:a,tag:e,props:{className:[q,r]},children:[{type:b,value:K}]},{type:b,value:" \u002Fproc\u002Fcpuinfo.\n"}]}]}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"Si el primer número (load average de 1 minuto) es menor que el número de núcleos de CPU, tu sistema no está sobrecargado.\nSi el número es igual al número de núcleos de CPU, tu sistema está utilizando su máxima capacidad de manera efectiva.\nSi el número es mayor que el número de núcleos de CPU, significa que hay más procesos esperando para ejecutarse que núcleos disponibles, lo que puede resultar en ralentizaciones."}]},{type:b,value:c},{type:a,tag:w,props:{id:G},children:[{type:a,tag:f,props:{ariaHidden:g,href:"#tendencias",tabIndex:h},children:[{type:a,tag:e,props:{className:[i,j]},children:[]}]},{type:b,value:H}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"Si los números están bajando (1.00, 0.75, 0.50), la carga del sistema está disminuyendo.\nSi los números están aumentando (0.50, 0.75, 1.00), la carga del sistema está creciendo.\nSi los números son constantes, la carga del sistema es estable."}]},{type:b,value:c},{type:a,tag:w,props:{id:I},children:[{type:a,tag:f,props:{ariaHidden:g,href:"#consideraciones",tabIndex:h},children:[{type:a,tag:e,props:{className:[i,j]},children:[]}]},{type:b,value:J}]},{type:b,value:c},{type:a,tag:"br",props:{},children:[]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"Es normal que los sistemas tengan picos de carga durante ciertas operaciones. Un load average alto en un momento dado no necesariamente indica un problema a menos que se mantenga alto persistentemente.\nEl load average incluye todos los procesos que utilizan o esperan recursos del sistema (CPU, entrada\u002Fsalida de disco), no solo los procesos que están activamente utilizando la CPU en ese momento."}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002Fload-average",extension:".md",createdAt:"2024-06-22T21:06:37.805Z",updatedAt:"2024-06-30T04:41:40.178Z"},tags:{reflexiones:{slug:s,name:s},"web development":{slug:"web_development",name:x}},prev:{slug:"guia-sobre-SSH-y-claves-publicas",title:"Guía sobre SSH y Claves Públicas"},next:null}],fetch:{},mutations:[]}}("element","text","\n","p","span","a","true",-1,"icon","icon-link","div","nuxt-content-highlight","pre","language-bash","line-numbers","code","token","function","reflexiones",2,3,"h2","h3","web development","introducción","Introducción.","cómo-monitorizar-el-load-average-","¿Cómo Monitorizar el Load Average ?","cómo-se-interpreta-load-average-","¿Cómo se interpreta Load Average ?","comparación-con-el-número-de-núcleos-de-cpu","Comparación con el número de núcleos de CPU:","tendencias","Tendencias:","consideraciones","Consideraciones:","cat")));