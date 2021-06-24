.front {
    background-color: front plate color;
}  
.standard {
    width: standard plate width;
    height: standard plate height;
}
.motor-cycle {
    width: motorcycle plate width;
    height: motorcycle plate height;
}
.larger-car {
    width: larger-car plate width;
    height: larger-car plate height;
}

$plateValue = $_POST['platevalue'];
$regno = $_POST['regno'];
$size = $_POST['platesize'];
$style = $_POST['textstyle'];
$border = $_POST['border'];

if ($plateValue=='front' || $plateValue=='rare') {
    //create front plate div and apply styles based on posted values
    echo '<div class="' . $plateValue . ' ' . $size '">
        <div class="' . $border . '">
            <h1 class="' . $style . '"><' . $regno . '</h1>
        </div>
    </div>';
} else {
    //code for both plates
}
