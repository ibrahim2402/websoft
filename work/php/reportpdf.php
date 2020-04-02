<?php 

$file = 'Olakunle_WebDev_Reflection_Report.pdf';
$filename = 'Olakunle_WebDev_Reflection_Report.pdf';

header('Content-type: application/pdf');
header('Content-Disposition: inline; filename = " '. $file .' "');
header('Content-Transfer-Encoding: binary');
header('Accept-Ranges: bytes');
@readfile($file);

/*
// To download the pdf format
if(file_exists($file)){

    header('Content-Description: File Transfer');
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename="'.basename($file).'"');
    header('Expires: 0');
    header('Cache-Control: must-revalidate');
    header('Pragma: public');
    header('Content-Length: ' . filesize($file));
    readfile($file);

    exit;
}*/
?>