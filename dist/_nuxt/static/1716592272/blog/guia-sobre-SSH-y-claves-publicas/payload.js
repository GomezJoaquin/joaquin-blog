__NUXT_JSONP__("/blog/guia-sobre-SSH-y-claves-publicas", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R){return {data:[{article:{slug:"guia-sobre-SSH-y-claves-publicas",description:"Learning how to use @nuxt\u002Fcontent to create a blog",title:s,img:"https:\u002F\u002Fimages.unsplash.com\u002Fphoto-1588432415392-51f6e1a61d5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",alt:s,author:{name:"Maria",bio:"All about Maria and where she works and what she does",img:"https:\u002F\u002Fimages.unsplash.com\u002Fphoto-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2551&q=80"},tags:[v],toc:[{id:A,depth:w,text:s},{id:B,depth:t,text:C},{id:D,depth:t,text:E},{id:F,depth:w,text:G},{id:H,depth:t,text:I},{id:J,depth:t,text:K},{id:L,depth:w,text:M}],body:{type:"root",children:[{type:b,tag:x,props:{id:A},children:[{type:b,tag:h,props:{ariaHidden:i,href:"#gu%C3%ADa-sobre-ssh-y-claves-p%C3%BAblicas",tabIndex:j},children:[{type:b,tag:g,props:{className:[k,l]},children:[]}]},{type:a,value:s}]},{type:a,value:c},{type:b,tag:u,props:{id:B},children:[{type:b,tag:h,props:{ariaHidden:i,href:"#descripci%C3%B3n",tabIndex:j},children:[{type:b,tag:g,props:{className:[k,l]},children:[]}]},{type:a,value:C}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"En esta guía aprenderás cómo utilizar SSH (Secure Shell) y claves públicas para mejorar la seguridad y facilitar la autenticación en conexiones remotas."}]},{type:a,value:c},{type:b,tag:u,props:{id:D},children:[{type:b,tag:h,props:{ariaHidden:i,href:"#c%C3%B3mo-funciona-ssh",tabIndex:j},children:[{type:b,tag:g,props:{className:[k,l]},children:[]}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"SSH utiliza un par de claves, una privada y una pública, para autenticar a los usuarios y cifrar la comunicación entre el cliente y el servidor. Aquí tienes una breve explicación de cómo funciona:"}]},{type:a,value:c},{type:b,tag:N,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:O,props:{},children:[{type:a,value:"Clave Privada:"}]},{type:a,value:" Esta clave se guarda en el cliente y nunca se comparte. Es utilizada para desbloquear el acceso a una máquina remota."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:O,props:{},children:[{type:a,value:"Clave Pública:"}]},{type:a,value:" Esta clave se guarda en la máquina remota en un archivo llamado "},{type:b,tag:d,props:{},children:[{type:a,value:m}]},{type:a,value:". Cuando un cliente se conecta a la máquina remota, el servidor verifica si la clave pública del cliente está en el archivo "},{type:b,tag:d,props:{},children:[{type:a,value:m}]},{type:a,value:". Si la clave pública coincide, el acceso se concede."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:x,props:{id:F},children:[{type:b,tag:h,props:{ariaHidden:i,href:"#c%C3%B3mo-obtener-y-transferir-claves-p%C3%BAblicas",tabIndex:j},children:[{type:b,tag:g,props:{className:[k,l]},children:[]}]},{type:a,value:G}]},{type:a,value:c},{type:b,tag:u,props:{id:H},children:[{type:b,tag:h,props:{ariaHidden:i,href:"#generar-un-par-de-claves-ssh",tabIndex:j},children:[{type:b,tag:g,props:{className:[k,l]},children:[]}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:P,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Genera un par de claves en tu máquina local:"}]},{type:a,value:c},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"ssh-keygen\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Esto generará un par de claves (clave privada y clave pública) en tu directorio "},{type:b,tag:d,props:{},children:[{type:a,value:"~\u002F.ssh"}]},{type:a,value:"."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Copia la clave pública a la máquina remota:"}]},{type:a,value:c},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"ssh-copy-id usuario@servidor\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Esto copiará tu clave pública al servidor y la agregará al archivo "},{type:b,tag:d,props:{},children:[{type:a,value:Q}]},{type:a,value:" en la máquina remota. Serás autenticado sin necesidad de una contraseña."}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:u,props:{id:J},children:[{type:b,tag:h,props:{ariaHidden:i,href:"#transferir-una-clave-p%C3%BAblica-manualmente",tabIndex:j},children:[{type:b,tag:g,props:{className:[k,l]},children:[]}]},{type:a,value:K}]},{type:a,value:c},{type:b,tag:P,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Genera un par de claves en tu máquina local (si aún no lo has hecho)."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Muestra la clave pública:"}]},{type:a,value:c},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{className:[y,z]},children:[{type:a,value:"cat"}]},{type:a,value:" ~\u002F.ssh\u002Fid_rsa.pub\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Copia la clave pública que se muestra."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Conéctate a la máquina remota:"}]},{type:a,value:c},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{className:[y,z]},children:[{type:a,value:"ssh"}]},{type:a,value:" usuario@servidor\n"}]}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"En la máquina remota, crea o edita el archivo "},{type:b,tag:d,props:{},children:[{type:a,value:Q}]},{type:a,value:":"}]},{type:a,value:c},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{className:[y,z]},children:[{type:a,value:"nano"}]},{type:a,value:" ~\u002F.ssh\u002Fauthorized_keys\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Pega la clave pública que copiaste en el paso 2 en el archivo "},{type:b,tag:d,props:{},children:[{type:a,value:m}]},{type:a,value:". Guarda los cambios y cierra el editor de texto."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Ahora podrás conectarte a la máquina remota desde tu máquina local sin necesidad de una contraseña."}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:"hr",props:{},children:[]},{type:a,value:c},{type:b,tag:x,props:{id:L},children:[{type:b,tag:h,props:{ariaHidden:i,href:"#hoja-de-ayuda-comandos-ssh",tabIndex:j},children:[{type:b,tag:g,props:{className:[k,l]},children:[]}]},{type:a,value:M}]},{type:a,value:c},{type:b,tag:N,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"ssh-keygen"}]},{type:a,value:": Genera un par de claves SSH en tu máquina local."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"ssh-copy-id usuario@servidor"}]},{type:a,value:": Copia tu clave pública al servidor y la agrega al archivo "},{type:b,tag:d,props:{},children:[{type:a,value:m}]},{type:a,value:R}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"cat ~\u002F.ssh\u002Fid_rsa.pub"}]},{type:a,value:": Muestra la clave pública en tu máquina local."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"ssh usuario@servidor"}]},{type:a,value:": Conéctate a la máquina remota."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"nano ~\u002F.ssh\u002Fauthorized_keys"}]},{type:a,value:": Crea o edita el archivo "},{type:b,tag:d,props:{},children:[{type:a,value:m}]},{type:a,value:R}]},{type:a,value:c}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002Fguia-sobre-SSH-y-claves-publicas",extension:".md",createdAt:"2024-05-11T15:25:29.369Z",updatedAt:"2024-05-24T23:00:29.344Z"},tags:{nuxtjs:{slug:v,name:v}},prev:{slug:"article-about-me",title:"Article about me"},next:null}],fetch:{},mutations:void 0}}("text","element","\n","code","li","p","span","a","true",-1,"icon","icon-link","authorized_keys","div","nuxt-content-highlight","pre","language-bash","line-numbers","Guía sobre SSH y Claves Públicas",3,"h3","nuxtjs",2,"h2","token","function","guía-sobre-ssh-y-claves-públicas","descripción","Descripción","cómo-funciona-ssh","¿Cómo Funciona SSH?","cómo-obtener-y-transferir-claves-públicas","Cómo Obtener y Transferir Claves Públicas","generar-un-par-de-claves-ssh","Generar un Par de Claves SSH","transferir-una-clave-pública-manualmente","Transferir una Clave Pública Manualmente","hoja-de-ayuda-comandos-ssh","Hoja de Ayuda: Comandos SSH","ul","strong","ol","~\u002F.ssh\u002Fauthorized_keys"," en la máquina remota.")));