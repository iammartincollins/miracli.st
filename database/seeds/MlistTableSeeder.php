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
            'id' => 1,
            'name' => 'Best bands ever',
            'description' => 'This is a list of the best bands ever',
        ]);

        Mlist::create([
            'id' => 2,
            'name' => 'My top 5 Coheed songs',
            'description' => 'This is a list of my favourite Coheed & Cambria songs. Hope you like it!',
        ]);

        Mlist::create([
            'id' => 3,
            'name' => 'Most popular JavaScript frameworks',
            'description' => 'We asked our readers what JS frameworks they are using, and this is the results...',
        ]);

        Mlist::create([
            'id' => 4,
            'name' => 'Tony\'s Best games ever created',
            'description' => 'Hi I\'m Tony and these are my most favourite games of all time, and trust me, I\'ve played a lot of games over the years (I\'m 78)!',
        ]);
    }
}
