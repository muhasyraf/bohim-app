<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Article;
use App\Models\User;
use Illuminate\Support\Facades\Storage;

class ArticleController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->only(['create', 'store', 'edit', 'update', 'destroy']);
    }
    /**
     * Display a listing of the article.
     */
    public function index()
    {
        $articles = Article::all();
        return Inertia::render('Article/Index', [
            'articles' => $articles
        ]);
    }

    /**
     * Show the form for creating a new article.
     */
    public function create()
    {
        $userId = auth()->user()->id;
        return Inertia::render('Article/Create', [
            'userId' => $userId
        ]);
    }

    /**
     * Store a newly created article in database.
     */
    public function store(Request $request)
    {
        $request->validate(
            [
                'user_id' => 'required|exists:users,id',
                'slug' => 'required|string|max:255',
                'thumbnail' => 'required',
                'title' => 'required|string|max:255',
                'content' => 'required|string',
            ]
        );

        $file = $request->file('thumbnail');
        $fileName = time() . '_' . $request->title . $file->getClientOriginalExtension();

        Storage::putFileAs('public/articles', $file, $fileName);
        Article::create([
            'user_id' => $request->user_id,
            'slug' => $request->slug,
            'thumbnail' => $fileName,
            'title' => $request->title,
            'content' => $request->content,
        ]);

        return redirect()->back()->with('message', 'Article created successfully');
    }

    /**
     * Display the specified article.
     */
    public function show(string $id)
    {
        $article = Article::find($id);
        $user = User::find($article->user_id);
        return Inertia::render('Article/Show', [
            'article' => $article,
            'user' => $user
        ]);
    }

    /**
     * Show the form for editing the specified article.
     */
    public function edit(string $id)
    {
        $article = Article::find($id);
        return Inertia::render('Article/Edit', [
            'article' => $article
        ]);
    }

    /**
     * Update the specified article in database.
     */
    public function update(Request $request, string $id)
    {
        $request->validate(
            [
                'user_id' => 'required|exists:users,id',
                'slug' => 'required|string|max:255',
                'thumbnail' => 'required|string',
                'title' => 'required|string|max:255',
                'content' => 'required|string',
            ]
        );

        $article = Article::find($id);
        if ($request->hasFile('thumbnail')) {
            $file = $request->file('thumbnail');
            $fileName = time() . '_' . $request->title . $file->getClientOriginalExtension();
            Storage::putFileAs('public/articles', $file, $fileName);
            $article->thumbnail = $fileName;
        }
        $article->update($request->all());

        return redirect()->back()->with('message', 'Article updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $article = Article::find($id);
        $article->delete();
        return redirect()->back()->with('message', 'Article deleted successfully');
    }
}
