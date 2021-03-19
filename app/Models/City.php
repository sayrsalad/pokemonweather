<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes; 

class Movie extends Model
{
    public $primaryKey = 'city_id';

    protected $fillable = ['city_name'];
    use softDeletes;
}
