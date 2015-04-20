<?php namespace FirstSite\Http\Controllers;

use FirstSite\Http\Requests;
use FirstSite\Http\Controllers\Controller;

use Request;
use Response;

class IndexController extends Controller {

    /**
     * Show index view for JavaScript SPA client side
     *
     * @return Response
     */
    public function index()
    {
        return view('index');
    }

}
