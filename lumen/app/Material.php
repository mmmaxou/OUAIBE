<?php
namespace App;

use Illuminate\Auth\Authenticatable;
use Laravel\Lumen\Auth\Authorizable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;

use Illuminate\Support\Facades\Hash;

class Material extends Model implements AuthenticatableContract, AuthorizableContract
{
    use Authenticatable, Authorizable;

    /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
    protected $fillable = [
        'id',
        'name',
        'quantity',
        'type_materiels_id'
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

    
    /**
    * Define a one-to-many relationship with App\TypeMaterial
    */
    public function type_material()
    {
        return $this->belongsTo('App\TypeMaterial');
    }
}