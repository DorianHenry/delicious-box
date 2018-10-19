<?php


class instrumentManager {
    
    protected $db;
    
    const TABLE='instruments'; 
    
    public function __construct($db)
    {
        $this->setDb($db);
    }
    
    public function addInstrument(instruments $instrument)
    {
        $q=$this->db->prepare('INSERT INTO '.self::TABLE.' SET timeline = :timeline');
        
        $q->bindValue(':timeline', $instrument->getTimeline());
        
        $q->execute();
               
    }
    
    public function deleteInstrument(instrument $instrument)
    {
        $q=$this->db->prepare('DELETE FROM '.self::TABLE.' WHERE id = '.$instrument->getId());
        $q->execute();
    }
    
    public function getInstrument($id)
    {
        $id=(int)$id;
        $q=$this->db->query('SELECT id, timeline FROM '.self::TABLE.' WHERE id = '.$id );
        
        $donnees = $q->fetch(PDO::FETCH_ASSOC);

        return new instruments($donnees);
    }
    
    public function getListInstrument()
    {
        $q=$this->db->query('SELECT id, timeline FROM '.self::TABLE.' ORDER BY id' );
        
        while($donnees = $q->fetch(PDO::FETCH_ASSOC))
        {
            $instruments[] = new instrument($donnees);
        }
        
        if(isset($instruments))
        {
            return $instruments;
        }
        
    }
    
    public function setDb(PDO $db)
    {
      $this->db=$db;
    }
}
