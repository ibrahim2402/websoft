<?php require 'view/header.php'; ?>

<?php 

$file = 'webvalidate.pdf';
//$filename = 'webvalidate.pdf';
header('Content-type: application/pdf');
header('Content-Disposition: inline; filename = " '. $file .' "');
header('Content-Transfer-Encoding: binary');
header('Accept-Ranges: bytes');
@readfile($file);

/* require( 'webvalidate.pdf' );

    $pdf = new  PdfToText( );
    $pdf->Options = PdfToText::PDFOPT_DECODE_IMAGE_DATA;
    $pdf->Load( $argv [1] );
    echo $pdf->Text ;
 */
?>


<?php  require 'view/footer.php'?>