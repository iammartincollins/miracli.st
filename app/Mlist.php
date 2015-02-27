<?php namespace FirstSite;

use Illuminate\Database\Eloquent\Model;

class Mlist extends Model {
	protected $fillable = ['name', 'description'];
	protected $hidden = ['id'];
	//

}
