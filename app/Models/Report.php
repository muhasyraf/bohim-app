<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Report extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'user_id',
        'violation_id',
        'marine_biota_id',
        'location',
        'description',
        'photo',
        'action_taken',
        'notes',
        'status',
        'created_at',
        'updated_at',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function violation(): BelongsTo
    {
        return $this->belongsTo(Violation::class);
    }

    public function marine_biota(): BelongsTo
    {
        return $this->belongsTo(MarineBiota::class);
    }

    public function comments(): HasMany
    {
        return $this->HasMany(Comment::class);
    }
}
