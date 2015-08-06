<?php
namespace FirstSite\Http\Controllers;

use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Response;
use FirstSite\ListItem;
use FirstSite\Mlist;


/**
 * Class MlistController
 * @package FirstSite\Http\Controllers
 */
class MlistController extends Controller
{
    // @Todo: create a new response object with hasError property and errors array for every request, that returns an empty array when no error and hasError will be false

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
        $data = Request::all();
        $items = $data['listItems'];
        $listItems = Array();

        $list = new Mlist;
        $list->name = $data['name'];
        $list->description = $data['description'];
        $list->save();

        foreach ($items as $item) {
            $listItems[] = new ListItem([
                'order_num' => $item['orderNum'],
                'title' => $item['title'],
                'body' => $item['body']
            ]);
        }

        $list->listItems()->saveMany($listItems);

        return $list;
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
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
            ), 404);
        }

        return $list;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int $id
     * @return Response
     */
    public function update($id)
    {
        if (!$list = Mlist::find($id)) {
            return Response::json(array(
                'error' => 'List not found.',
                'message' => 'The requested list was not found'
            ), 404);
        }

        $data = Request::all();
        $items = $data['listItems'];
        $listItems = Array();

        $list->name = $data['name'];
        $list->description = $data['description'];
        $list->save();

        foreach ($items as $item) {
            $listItems[] = new ListItem([
                'order_num' => $item['orderNum'],
                'title' => $item['title'],
                'body' => $item['body']
            ]);
        }

        $list->listItems()->saveMany($listItems);


        return Response::json(array(
            'data' => MList::all(),
            'message' => 'List successfully updated.'
        ), 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return Response
     */
    public function destroy($id)
    {
        $deleted = Mlist::destroy($id);

        if ($deleted) {
            return Response::json(array(
                'id' => $id,
                'data' => MList::all(),
                'message' => 'List successfully deleted.'
            ), 200);
        }

        return Response::json(array(
            'id' => $id,
            'error' => 'List not found.',
            'message' => 'The requested list was not found'
        ), 404);
    }

}
