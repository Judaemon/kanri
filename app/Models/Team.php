<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Traits\HasRoles;

class Team extends Model
{
	use HasFactory, HasRoles;

	protected $fillable = ['name', 'description'];
		
	function users()
	{
		return $this->belongsToMany(User::class);
	}
}
