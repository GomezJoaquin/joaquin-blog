---
title: Guía sobre SSH y Claves Públicas
description: Learning how to use @nuxt/content to create a blog
img: https://images.unsplash.com/photo-1588432415392-51f6e1a61d5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80
alt: Guía sobre SSH y Claves Públicas
author:
  name: Maria
  bio: All about Maria and where she works and what she does
  img: https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2551&q=80
tags:
  - nuxtjs
---

## Guía sobre SSH y Claves Públicas

### Descripción

En esta guía aprenderás cómo utilizar SSH (Secure Shell) y claves públicas para mejorar la seguridad y facilitar la autenticación en conexiones remotas.

### ¿Cómo Funciona SSH?

SSH utiliza un par de claves, una privada y una pública, para autenticar a los usuarios y cifrar la comunicación entre el cliente y el servidor. Aquí tienes una breve explicación de cómo funciona:

- **Clave Privada:** Esta clave se guarda en el cliente y nunca se comparte. Es utilizada para desbloquear el acceso a una máquina remota.
- **Clave Pública:** Esta clave se guarda en la máquina remota en un archivo llamado `authorized_keys`. Cuando un cliente se conecta a la máquina remota, el servidor verifica si la clave pública del cliente está en el archivo `authorized_keys`. Si la clave pública coincide, el acceso se concede.

## Cómo Obtener y Transferir Claves Públicas

### Generar un Par de Claves SSH

1. Genera un par de claves en tu máquina local:

   ```bash
   ssh-keygen
   ```

   Esto generará un par de claves (clave privada y clave pública) en tu directorio `~/.ssh`.

2. Copia la clave pública a la máquina remota:

   ```bash
   ssh-copy-id usuario@servidor
   ```

   Esto copiará tu clave pública al servidor y la agregará al archivo `~/.ssh/authorized_keys` en la máquina remota. Serás autenticado sin necesidad de una contraseña.

### Transferir una Clave Pública Manualmente

1. Genera un par de claves en tu máquina local (si aún no lo has hecho).
2. Muestra la clave pública:

   ```bash
   cat ~/.ssh/id_rsa.pub
   ```

   Copia la clave pública que se muestra.

3. Conéctate a la máquina remota:

   ```bash
   ssh usuario@servidor
   ```

4. En la máquina remota, crea o edita el archivo `~/.ssh/authorized_keys`:

   ```bash
   nano ~/.ssh/authorized_keys
   ```

   Pega la clave pública que copiaste en el paso 2 en el archivo `authorized_keys`. Guarda los cambios y cierra el editor de texto.

5. Ahora podrás conectarte a la máquina remota desde tu máquina local sin necesidad de una contraseña.

---

## Hoja de Ayuda: Comandos SSH

- `ssh-keygen`: Genera un par de claves SSH en tu máquina local.
- `ssh-copy-id usuario@servidor`: Copia tu clave pública al servidor y la agrega al archivo `authorized_keys` en la máquina remota.
- `cat ~/.ssh/id_rsa.pub`: Muestra la clave pública en tu máquina local.
- `ssh usuario@servidor`: Conéctate a la máquina remota.
- `nano ~/.ssh/authorized_keys`: Crea o edita el archivo `authorized_keys` en la máquina remota.
