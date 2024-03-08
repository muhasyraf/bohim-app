<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class MarineBiota extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'name',
        'scientific_name',
        'description',
        'photo',
        'status',
        'population',
        'created_at',
        'updated_at',
    ];

    public function campaigns(): HasMany
    {
        return $this->hasMany(Campaign::class);
    }

    public function reports(): HasMany
    {
        return $this->hasMany(Report::class);
    }

    public function habitats(): BelongsToMany
    {
        return $this->belongsToMany(Habitat::class);
    }
}
