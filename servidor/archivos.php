<?php


if ( !empty( $_FILES ) ) {
    $tempPath = $_FILES[ 'file' ][ 'tmp_name' ];
 $uploadPath = dirname( __FILE__ ) . DIRECTORY_SEPARATOR . 'usuarios' . DIRECTORY_SEPARATOR . $_FILES[ 'file' ][ 'name' ];
	//$uploadPath = dirname( __FILE__ ) . DIRECTORY_SEPARATOR . 'usuarios' . DIRECTORY_SEPARATOR .'OLA22.jpg';
//	 $uploadPath = dirname( __FILE__ ) . DIRECTORY_SEPARATOR . 'usuarios' . DIRECTORY_SEPARATOR .  date("YmdHis") .'.jpg';
 //$uploadPath = dirname( __FILE__ ) . DIRECTORY_SEPARATOR . 'usuarios' . DIRECTORY_SEPARATOR .$foto .'.jpg';
 
    move_uploaded_file( $tempPath, $uploadPath );
    $answer = array( 'answer' => 'File transfer completed' );
    $json = json_encode( $answer );
    echo $json;
} else {
    echo 'No files';
}