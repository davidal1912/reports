<?php
$accion = $_POST['accion'];

switch ($accion) {
    case 'report':
        report();
        break;
}
function report(){
    $file_report_name =  $_FILES['data_reporst']['name']; //name of file
    $file_report_tpm =   $_FILES['data_reporst']['tmp_name']; //ruta del archivo
    $paht = '../tmp/' . $file_report_name;
    $rps =  move_uploaded_file($file_report_tpm, $paht);
    echo ($rps) ?  json_encode(['status' => true, 'msg' => 'Success']) :  json_encode(['status' => false, 'msg' => 'Error']);
}
