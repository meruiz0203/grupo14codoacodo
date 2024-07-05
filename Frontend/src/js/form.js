 // La validación del formulario irá aquí
        const btnEnviar = document.getElementById('btn-enviar');
        const validarCampos = (e) => {
            console.log("first")
            e.preventDefault();
            const usuario = document.getElementById('user');
            const email = document.getElementById('email');
            const mensaje = document.getElementById('mensaje')
            
            if (usuario.value === "") {
                alert("Por favor, escribe tu nombre.");
                usuario.focus();
                return false;
            }

            if (email.value === "") {
                alert("Por favor, escribe tu correo electrónico.");
                email.focus();
                return false;
            }

            if (mensaje.value === "") {
                alert("Por favor, escribe un mensaje.");
                mensaje.focus();
                return false;
            }


            return true;
        }

        btnEnviar.addEventListener('click', validarCampos);