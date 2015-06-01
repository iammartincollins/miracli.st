<?php namespace FirstSite;

use Illuminate\Database\Eloquent\Model;

class ListItem extends Model {
    protected $fillable = ['title', 'body', 'order_num'];
    //
    public function Mlist()
    {
        return $this->belongsTo('FirstSite\Mlist');
    }
}
