<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use FirstSite\ListItem as ListItem;

class ListItemTableSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		ListItem::truncate();
		ListItem::create([
			'mlist_id' => 1,
			'title' => 'A list item 1',
			'body' => 'This is a list item',
		]);

		ListItem::create([
			'mlist_id' => 1,
			'title' => 'A list item 2',
			'body' => 'This is a list item 2 yay',
		]);
	}
}
