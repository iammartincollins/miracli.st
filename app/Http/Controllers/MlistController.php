<?php namespace FirstSite\Http\Controllers;

use FirstSite\Http\Requests;
use FirstSite\Http\Controllers\Controller;
use FirstSite\Mlist;

use Illuminate\Http\Request;

class MlistController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$lists = MList::all();
		// dd($lists);

		return view('mlist.index')->with('lists', $lists);
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function create()
	{
		//add new list to data

		//return list ID?
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$list = Mlist::find($id);

		return view('Mlist/show')->with('list', $list);
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//fetch mlist
		//if valid update
		//return appropriate request code
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function delete($id)
	{
		//
	}

}
