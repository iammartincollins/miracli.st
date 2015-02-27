<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use FirstSite\Mlist as Mlist;

class MlistTableSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Mlist::truncate();
		Mlist::create([
			'name' => 'Best bands ever',
			'description' => 'This is a list of the best bands ever',
		]);

		Mlist::create([
			'name' => 'Best cars ever',
			'description' => 'This is a list of the best cars in existence!',
		]);

		Mlist::create([
			'name' => 'Best friends ever',
			'description' => 'This is a list of the best friends I have!',
		]);

		Mlist::create([
			'name' => 'Best toys ever',
			'description' => 'This is a list of the best toys you\'ve never seen!',
		]);

		Mlist::create([
			'name' => 'Best games ever',
			'description' => 'This is a list of the best games I know about!',
		]);
	}
}
