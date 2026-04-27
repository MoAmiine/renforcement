<?php

$notes = [
    "Mathématiques" => 15,
    "Physique" => 13,
    "Informatique" => 17,
    "Anglais" => 12,
    "Français" => 10
];

$somme = 0;

foreach($notes as $key => $value){
    echo "matiere : $key , note : $value \n" ;
    $somme += $value;
}
$moyenne = $somme / count($notes);
echo "moyenne generale : $moyenne";

if ($moyenne >= 16) {
    $mention = "Très bien";
} elseif ($moyenne >= 14) {
    $mention = "Bien";
} elseif ($moyenne >= 12) {
    $mention = "Assez bien";
} elseif ($moyenne >= 10) {
    $mention = "Passable";
} else {
    $mention = "Insuffisant";
}
echo "Mention : $mention\n";
