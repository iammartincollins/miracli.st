<?php namespace FirstSite;

use Illuminate\Database\Eloquent\Model;

class ListItem extends Model {
	protected $fillable = ['title', 'body'];
	//
	public function Mlist()
	{
		return $this->belongsTo('FirstSite\Mlist');
	}
}
