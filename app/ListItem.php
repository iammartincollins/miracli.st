<?php namespace FirstSite;

use Illuminate\Database\Eloquent\Model;

class ListItem extends Model {
    protected $fillable = ['title', 'body', 'orderNum'];
    //
    public function Mlist()
    {
        return $this->belongsTo('FirstSite\Mlist');
    }
}
