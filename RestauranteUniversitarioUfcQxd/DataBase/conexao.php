<?php
$servidor = "localhost";
$usuario = "root";
$senha = "";
$nomeBanco = "ru-ufc";
$conexao = mysqli_connect($servidor, $usuario, $senha, $nomeBanco);
if (mysqli_connect_error()) {
    echo "
    <script>
        console.log('Erro na conexão!')
    </script>
    ";
} else {
    echo "
    <script>
        console.log('Conectado com Sucesso!! ')
    </script>
    ";
}
?>