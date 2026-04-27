<?php

$celsius = 25;

$fahrenheit = ($celsius * 9 / 5) + 32;
$kelvin = $celsius + 273.15;

echo "Température initiale : $celsius °C\n";
echo "En Fahrenheit : " . number_format($fahrenheit, 2) . " °F\n";
echo "En Kelvin : " . number_format($kelvin, 2);

$temperatures = [10, 15, 20, 25, 30];

foreach ($temperatures as $t) {
    $f = ($t * 9 / 5) + 32;
    $k = $t + 273.15;
    echo "Température initiale : $t °C\n";
    echo "En Fahrenheit : " . number_format($f, 2) . " °F\n";
    echo "En Kelvin : " . number_format($k, 2);
}
