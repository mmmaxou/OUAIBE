<?php
namespace App;

use Illuminate\Auth\Authenticatable;
use Laravel\Lumen\Auth\Authorizable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;

use Illuminate\Support\Facades\Hash;

class MetaData extends Model implements AuthenticatableContract, AuthorizableContract
{
    use Authenticatable, Authorizable;

    protected $table = 'metadatas';
    /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
    protected $fillable = [
        'metakey',
        'metavalue',
        'description'
    ];

    /**
   * The attributes excluded from the model's JSON form.
   *
   * @var array
   */
    protected $hidden = [
        'created_at',
        'updated_at'
    ];
}
