<?php namespace FirstSite;

use Illuminate\Database\Eloquent\Model;

class Mlist extends Model {
    protected $fillable = ['name', 'description', 'listItems'];

    public function listItems()
    {
        return $this->hasMany('FirstSite\ListItem');
    }
}
