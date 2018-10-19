<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of instruments
 *
 * @author win8
 */
class instruments {
    protected $id;
    protected $timeline;
    
    
    public function __construct($donnees)
    {
        foreach($donnees as $donneeName => $donneeValue)
        {
            $method='set'.ucfirst($donneeName);
                    
                    if(method_exists($this,$method))
                    {
                        $this->$method($donneeValue);
                    }
        }
    }
    
    public function getId()
    {
        return $this->id;
    }
    
    public function getTimeline()
    {
        return $this->timeline;
    }
    
    public function setId($id)
    {
        $id=intval($id);
        
        if(is_int($id))
        {
            $this->id=$id;
            return true;
        }
        
        return false;
    }
    
    public function setTimeline($timeline)
    {
        $this->timeline=$timeline;
        return true;
    }
}
