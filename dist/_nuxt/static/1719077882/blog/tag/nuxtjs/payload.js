__NUXT_JSONP__("/blog/tag/nuxtjs", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a_,a$,ba,bb){return {data:[{articles:[{slug:"guia-sobre-SSH-y-claves-publicas",description:V,title:G,img:Z,alt:G,tags:[z],toc:[{id:_,depth:p,text:G},{id:$,depth:u,text:aa},{id:ab,depth:u,text:ac},{id:ad,depth:p,text:ae},{id:af,depth:u,text:ag},{id:ah,depth:u,text:ai},{id:aj,depth:p,text:ak}],body:{type:A,children:[{type:b,tag:q,props:{id:_},children:[{type:b,tag:h,props:{ariaHidden:i,href:"#gu%C3%ADa-sobre-ssh-y-claves-p%C3%BAblicas",tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:G}]},{type:a,value:c},{type:b,tag:v,props:{id:$},children:[{type:b,tag:h,props:{ariaHidden:i,href:"#descripci%C3%B3n",tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:aa}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"En esta guía aprenderás cómo utilizar SSH (Secure Shell) y claves públicas para mejorar la seguridad y facilitar la autenticación en conexiones remotas."}]},{type:a,value:c},{type:b,tag:v,props:{id:ab},children:[{type:b,tag:h,props:{ariaHidden:i,href:"#c%C3%B3mo-funciona-ssh",tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:ac}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"SSH utiliza un par de claves, una privada y una pública, para autenticar a los usuarios y cifrar la comunicación entre el cliente y el servidor. Aquí tienes una breve explicación de cómo funciona:"}]},{type:a,value:c},{type:b,tag:al,props:{},children:[{type:a,value:c},{type:b,tag:m,props:{},children:[{type:b,tag:am,props:{},children:[{type:a,value:"Clave Privada:"}]},{type:a,value:" Esta clave se guarda en el cliente y nunca se comparte. Es utilizada para desbloquear el acceso a una máquina remota."}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:b,tag:am,props:{},children:[{type:a,value:"Clave Pública:"}]},{type:a,value:" Esta clave se guarda en la máquina remota en un archivo llamado "},{type:b,tag:g,props:{},children:[{type:a,value:D}]},{type:a,value:". Cuando un cliente se conecta a la máquina remota, el servidor verifica si la clave pública del cliente está en el archivo "},{type:b,tag:g,props:{},children:[{type:a,value:D}]},{type:a,value:". Si la clave pública coincide, el acceso se concede."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:q,props:{id:ad},children:[{type:b,tag:h,props:{ariaHidden:i,href:"#c%C3%B3mo-obtener-y-transferir-claves-p%C3%BAblicas",tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:ae}]},{type:a,value:c},{type:b,tag:v,props:{id:af},children:[{type:b,tag:h,props:{ariaHidden:i,href:"#generar-un-par-de-claves-ssh",tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:ag}]},{type:a,value:c},{type:b,tag:an,props:{},children:[{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Genera un par de claves en tu máquina local:"}]},{type:a,value:c},{type:b,tag:o,props:{className:[r]},children:[{type:b,tag:s,props:{className:[E,t]},children:[{type:b,tag:g,props:{},children:[{type:a,value:"ssh-keygen\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Esto generará un par de claves (clave privada y clave pública) en tu directorio "},{type:b,tag:g,props:{},children:[{type:a,value:"~\u002F.ssh"}]},{type:a,value:"."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Copia la clave pública a la máquina remota:"}]},{type:a,value:c},{type:b,tag:o,props:{className:[r]},children:[{type:b,tag:s,props:{className:[E,t]},children:[{type:b,tag:g,props:{},children:[{type:a,value:"ssh-copy-id usuario@servidor\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Esto copiará tu clave pública al servidor y la agregará al archivo "},{type:b,tag:g,props:{},children:[{type:a,value:ao}]},{type:a,value:" en la máquina remota. Serás autenticado sin necesidad de una contraseña."}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:v,props:{id:ah},children:[{type:b,tag:h,props:{ariaHidden:i,href:"#transferir-una-clave-p%C3%BAblica-manualmente",tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:ai}]},{type:a,value:c},{type:b,tag:an,props:{},children:[{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Genera un par de claves en tu máquina local (si aún no lo has hecho)."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Muestra la clave pública:"}]},{type:a,value:c},{type:b,tag:o,props:{className:[r]},children:[{type:b,tag:s,props:{className:[E,t]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:d,props:{className:[e,W]},children:[{type:a,value:"cat"}]},{type:a,value:" ~\u002F.ssh\u002Fid_rsa.pub\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Copia la clave pública que se muestra."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Conéctate a la máquina remota:"}]},{type:a,value:c},{type:b,tag:o,props:{className:[r]},children:[{type:b,tag:s,props:{className:[E,t]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:d,props:{className:[e,W]},children:[{type:a,value:"ssh"}]},{type:a,value:" usuario@servidor\n"}]}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"En la máquina remota, crea o edita el archivo "},{type:b,tag:g,props:{},children:[{type:a,value:ao}]},{type:a,value:X}]},{type:a,value:c},{type:b,tag:o,props:{className:[r]},children:[{type:b,tag:s,props:{className:[E,t]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:d,props:{className:[e,W]},children:[{type:a,value:"nano"}]},{type:a,value:" ~\u002F.ssh\u002Fauthorized_keys\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Pega la clave pública que copiaste en el paso 2 en el archivo "},{type:b,tag:g,props:{},children:[{type:a,value:D}]},{type:a,value:". Guarda los cambios y cierra el editor de texto."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Ahora podrás conectarte a la máquina remota desde tu máquina local sin necesidad de una contraseña."}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:"hr",props:{},children:[]},{type:a,value:c},{type:b,tag:q,props:{id:aj},children:[{type:b,tag:h,props:{ariaHidden:i,href:"#hoja-de-ayuda-comandos-ssh",tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:ak}]},{type:a,value:c},{type:b,tag:al,props:{},children:[{type:a,value:c},{type:b,tag:m,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"ssh-keygen"}]},{type:a,value:": Genera un par de claves SSH en tu máquina local."}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"ssh-copy-id usuario@servidor"}]},{type:a,value:": Copia tu clave pública al servidor y la agrega al archivo "},{type:b,tag:g,props:{},children:[{type:a,value:D}]},{type:a,value:ap}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"cat ~\u002F.ssh\u002Fid_rsa.pub"}]},{type:a,value:": Muestra la clave pública en tu máquina local."}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"ssh usuario@servidor"}]},{type:a,value:": Conéctate a la máquina remota."}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"nano ~\u002F.ssh\u002Fauthorized_keys"}]},{type:a,value:": Crea o edita el archivo "},{type:b,tag:g,props:{},children:[{type:a,value:D}]},{type:a,value:ap}]},{type:a,value:c}]}]},dir:F,path:"\u002Farticles\u002Fguia-sobre-SSH-y-claves-publicas",extension:B,createdAt:Y,updatedAt:"2024-06-22T17:31:57.367Z"},{slug:"my-first-blog-post",description:V,title:"My First Blog Post",img:"https:\u002F\u002Fimages.unsplash.com\u002Freserve\u002FLJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",alt:"my first blog post",author:{name:"Peter",bio:"All about Peter and what he does and where he works",img:"https:\u002F\u002Fimages.unsplash.com\u002Fphoto-1533636721434-0e2d61030955?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"},tags:[z,"javascript","reflexiones"],toc:[{id:H,depth:p,text:I},{id:J,depth:u,text:K},{id:L,depth:u,text:M},{id:N,depth:p,text:O}],body:{type:A,children:[{type:b,tag:f,props:{},children:[{type:a,value:"Welcome to my first blog post using content module"}]},{type:a,value:c},{type:b,tag:q,props:{id:H},children:[{type:b,tag:h,props:{ariaHidden:i,href:aq,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:w}]},{type:a,value:c},{type:b,tag:o,props:{className:[ar,as,at,au]},children:[{type:a,value:av}]},{type:a,value:c},{type:b,tag:aw,props:{},children:[{type:a,value:P},{type:b,tag:ax,props:{"#info-box":ay},children:[],content:[{type:a,value:az}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{className:[r]},children:[{type:b,tag:d,props:{className:[Q]},children:[{type:a,value:aA}]},{type:b,tag:s,props:{className:[t,aB]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:d,props:{className:[e,R,S]},children:[{type:a,value:aC}]},{type:a,value:C},{type:b,tag:d,props:{className:[e,R,S]},children:[{type:a,value:aD}]},{type:a,value:C},{type:b,tag:d,props:{className:[e,n]},children:[{type:a,value:aE}]},{type:a,value:P},{type:b,tag:d,props:{className:[e,aF,aG]},children:[{type:a,value:aH}]},{type:b,tag:d,props:{className:[e,aI]},children:[{type:a,value:X}]},{type:a,value:C},{type:b,tag:d,props:{className:[e,aJ]},children:[{type:a,value:aK}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,n]},children:[{type:a,value:aL}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:o,props:{className:[r]},children:[{type:b,tag:d,props:{className:[Q]},children:[{type:a,value:aM}]},{type:b,tag:s,props:{className:[t,aN]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:d,props:{className:[e,x]},children:[{type:b,tag:d,props:{className:[e,x]},children:[{type:b,tag:d,props:{className:[e,n]},children:[{type:a,value:aO}]},{type:a,value:f}]},{type:b,tag:d,props:{className:[e,n]},children:[{type:a,value:T}]}]},{type:a,value:aP},{type:b,tag:d,props:{className:[e,x]},children:[{type:b,tag:d,props:{className:[e,x]},children:[{type:b,tag:d,props:{className:[e,n]},children:[{type:a,value:aQ}]},{type:a,value:f}]},{type:b,tag:d,props:{className:[e,n]},children:[{type:a,value:T}]}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:v,props:{id:J},children:[{type:b,tag:h,props:{ariaHidden:i,href:aR,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:K}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:w}]},{type:a,value:c},{type:b,tag:v,props:{id:L},children:[{type:b,tag:h,props:{ariaHidden:i,href:aS,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:M}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:w}]},{type:a,value:c},{type:b,tag:q,props:{id:N},children:[{type:b,tag:h,props:{ariaHidden:i,href:aT,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:O}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:w}]}]},dir:F,path:"\u002Farticles\u002Fmy-first-blog-post",extension:B,createdAt:y,updatedAt:y},{slug:"my-second-post",description:V,title:"My Second Blog Post",img:Z,alt:"my second blog post",author:{name:"Maria",bio:"All about Maria and where she works and what she does",img:"https:\u002F\u002Fimages.unsplash.com\u002Fphoto-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2551&q=80"},tags:[z],toc:[{id:aU,depth:p,text:aV},{id:H,depth:p,text:I},{id:J,depth:u,text:K},{id:L,depth:u,text:M},{id:N,depth:p,text:O}],body:{type:A,children:[{type:b,tag:q,props:{id:aU},children:[{type:b,tag:h,props:{ariaHidden:i,href:"#welcome-to-my-second-blog-post-using-content-module",tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:aV}]},{type:a,value:c},{type:b,tag:q,props:{id:H},children:[{type:b,tag:h,props:{ariaHidden:i,href:aq,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:w}]},{type:a,value:c},{type:b,tag:o,props:{className:[ar,as,at,au]},children:[{type:a,value:av}]},{type:a,value:c},{type:b,tag:aw,props:{},children:[{type:a,value:P},{type:b,tag:ax,props:{"#info-box":ay},children:[],content:[{type:a,value:az}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{className:[r]},children:[{type:b,tag:d,props:{className:[Q]},children:[{type:a,value:aA}]},{type:b,tag:s,props:{className:[t,aB]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:d,props:{className:[e,R,S]},children:[{type:a,value:aC}]},{type:a,value:C},{type:b,tag:d,props:{className:[e,R,S]},children:[{type:a,value:aD}]},{type:a,value:C},{type:b,tag:d,props:{className:[e,n]},children:[{type:a,value:aE}]},{type:a,value:P},{type:b,tag:d,props:{className:[e,aF,aG]},children:[{type:a,value:aH}]},{type:b,tag:d,props:{className:[e,aI]},children:[{type:a,value:X}]},{type:a,value:C},{type:b,tag:d,props:{className:[e,aJ]},children:[{type:a,value:aK}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,n]},children:[{type:a,value:aL}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:o,props:{className:[r]},children:[{type:b,tag:d,props:{className:[Q]},children:[{type:a,value:aM}]},{type:b,tag:s,props:{className:[t,aN]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:d,props:{className:[e,x]},children:[{type:b,tag:d,props:{className:[e,x]},children:[{type:b,tag:d,props:{className:[e,n]},children:[{type:a,value:aO}]},{type:a,value:f}]},{type:b,tag:d,props:{className:[e,n]},children:[{type:a,value:T}]}]},{type:a,value:aP},{type:b,tag:d,props:{className:[e,x]},children:[{type:b,tag:d,props:{className:[e,x]},children:[{type:b,tag:d,props:{className:[e,n]},children:[{type:a,value:aQ}]},{type:a,value:f}]},{type:b,tag:d,props:{className:[e,n]},children:[{type:a,value:T}]}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:v,props:{id:J},children:[{type:b,tag:h,props:{ariaHidden:i,href:aR,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:K}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:w}]},{type:a,value:c},{type:b,tag:v,props:{id:L},children:[{type:b,tag:h,props:{ariaHidden:i,href:aS,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:M}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:w}]},{type:a,value:c},{type:b,tag:q,props:{id:N},children:[{type:b,tag:h,props:{ariaHidden:i,href:aT,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:O}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:w}]}]},dir:F,path:"\u002Farticles\u002Fmy-second-post",extension:B,createdAt:y,updatedAt:y},{slug:"some-interesting-title",description:"Learning how to use @nuxt\u002Fcontent to create a blog again",title:"Some Interesting title",img:"https:\u002F\u002Fimages.unsplash.com\u002Fphoto-1588336271629-1704e27ef8be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2158&q=80",alt:"nice image",author:{name:aW,bio:aX,img:aY},tags:[z,aZ],toc:[{id:a_,depth:p,text:a$}],body:{type:A,children:[{type:b,tag:q,props:{id:a_},children:[{type:b,tag:h,props:{ariaHidden:i,href:"#welcome-to-another-blog-post-using-content-module",tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:a$}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:U}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:U}]}]},dir:F,path:"\u002Farticles\u002Fsome-interesting-title",extension:B,createdAt:y,updatedAt:y},{slug:"what-we-know",description:"This is the description for the article about all the things we know",title:"What we know",img:"https:\u002F\u002Fimages.unsplash.com\u002Fphoto-1588065394015-68bf7e40738d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",alt:"Article 10",author:{name:aW,bio:aX,img:aY},tags:[z,aZ],toc:[{id:ba,depth:p,text:bb}],body:{type:A,children:[{type:b,tag:q,props:{id:ba},children:[{type:b,tag:h,props:{ariaHidden:i,href:"#what-do-you-know-and-what-do-we-not-know",tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:bb}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:U}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:U}]}]},dir:F,path:"\u002Farticles\u002Fwhat-we-know",extension:B,createdAt:y,updatedAt:y}],tag:{slug:z,description:"NuxtJS is an open source framework making web development simple and powerful.",name:z,img:"https:\u002F\u002Fimages.unsplash.com\u002Fphoto-1598313183973-4effcded8d5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",toc:[],body:{type:A,children:[]},dir:"\u002Ftags",path:"\u002Ftags\u002Fnuxtjs",extension:B,createdAt:Y,updatedAt:Y}}],fetch:{},mutations:[]}}("text","element","\n","span","token","p","code","a","true",-1,"icon","icon-link","li","punctuation","div",2,"h2","nuxt-content-highlight","pre","line-numbers",3,"h3","This is some more info","tag","2024-06-22T17:36:34.228Z","nuxtjs","root",".md"," ","authorized_keys","language-bash","\u002Farticles","Guía sobre SSH y Claves Públicas","this-is-a-heading","This is a heading","this-is-a-sub-heading","This is a sub heading","this-is-another-sub-heading","This is another sub heading","this-is-another-heading","This is another heading","\n  ","filename","keyword","module","\u003E","Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?","Learning how to use @nuxt\u002Fcontent to create a blog","function",":","2024-06-22T16:58:35.804Z","https:\u002F\u002Fimages.unsplash.com\u002Fphoto-1588432415392-51f6e1a61d5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80","guía-sobre-ssh-y-claves-públicas","descripción","Descripción","cómo-funciona-ssh","¿Cómo Funciona SSH?","cómo-obtener-y-transferir-claves-públicas","Cómo Obtener y Transferir Claves Públicas","generar-un-par-de-claves-ssh","Generar un Par de Claves SSH","transferir-una-clave-pública-manualmente","Transferir una Clave Pública Manualmente","hoja-de-ayuda-comandos-ssh","Hoja de Ayuda: Comandos SSH","ul","strong","ol","~\u002F.ssh\u002Fauthorized_keys"," en la máquina remota.","#this-is-a-heading","bg-blue-500","text-white","p-4","mb-4","\n  This is HTML inside markdown that has a class some classes\n","info-box","template","","\n    This is a vue component inside markdown using slots\n  ","nuxt.config.js","language-js","export","default","{","literal-property","property","nuxt","operator","string","\"is the best\"","}","my-first-blog-post.md","language-html","\u003C","code styling is easy","\u003C\u002F","#this-is-a-sub-heading","#this-is-another-sub-heading","#this-is-another-heading","welcome-to-my-second-blog-post-using-content-module","Welcome to my second blog post using content module","Choi","All about Choi and where he works and what he does","https:\u002F\u002Fimages.unsplash.com\u002Fphoto-1534471770828-9bde524ee634?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60","web development","welcome-to-another-blog-post-using-content-module","Welcome to another blog post using content module","what-do-you-know-and-what-do-we-not-know","what do you know and what do we not know")));