<?php namespace FirstSite\Http\Controllers;

// use FirstSite\Http\Requests;
use FirstSite\Http\Controllers\Controller;
use FirstSite\Mlist;

use Request;
use Response;

class MlistController extends Controller {

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $lists = MList::all();

        return $lists;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store()
    {
        $list = Mlist::create(Request::all());

        return $list;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        $list = Mlist::where('id', $id)
                        ->with('ListItems')
                        ->get();

        if (is_null($list)) {
            return Response::json(array(
                    'error' => 'List not found.',
                    'message' => 'The requested list was not found'
                ), 404
            );
        }

        return $list;
        // return view('Mlist/show')->with('list', $list);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function update($id)
    {
        if (! $list = Mlist::find($id)) {
            return Response::json(array(
                    'error' => 'List not found.',
                    'message' => 'The requested list was not found'
                ), 404
            );
        }

        $list->update(Request::all());

        return Response::json(array(
                'list' => $list,
                'message' => 'List successfully updated.'
            ), 200
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function delete($id)
    {
        Mlist::destroy($id);
    }

}
