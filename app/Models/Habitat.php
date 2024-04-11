<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Habitat extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'name',
        'slug',
        'description',
        'created_at',
        'updated_at',
    ];

    // many to many relationship
    public function marine_biotas(): BelongsToMany
    {
        return $this->belongsToMany(MarineBiota::class);
    }
}
