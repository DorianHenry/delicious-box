<?php
 include('instruments.php');
 include ('instrumentManager.php');
$item = json_decode(file_get_contents('php://input'), true);
$_POST = $item;

$db = new PDO('mysql:host=localhost;dbname=deliciousbox', 'root', '');
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$manager = new instrumentManager($db);

if(isset($_POST['timeline']))
    {
        $timeline= json_encode($_POST['timeline']);
        
        $instrument=new instruments(array(
        'timeline' => $timeline
        ));
        $manager->addInstrument($instrument);
    }
 
if (isset($_GET['id']))
{
    $timeLineToLoad= $manager->getInstrument($_GET['id']);
    $timeline= $timeLineToLoad->getTimeline();
    echo $timeline;
}
    
   
