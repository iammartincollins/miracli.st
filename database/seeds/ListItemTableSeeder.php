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

        //list 1
        ListItem::create([
            'mlist_id' => 1,
            'order_num' => 1,
            'title' => 'Coheed',
            'body' => "Coheed and Cambria is an American progressive rock band from Nyack, New York, formed in 1995. The group's music incorporates aspects of progressive rock, pop, heavy metal, and post-hardcore.",
        ]);

        ListItem::create([
            'mlist_id' => 1,
            'order_num' => 2,
            'title' => 'The Libertines',
            'body' => "The Libertines are an English rock band, formed in London in 1997 by frontmen Carl Barât (vocals/guitar) and Pete Doherty (vocals/guitar). The band, centred on the songwriting partnership of Barât and Doherty, also included John Hassall (bass) and Gary Powell (drums) for most of its recording career. The band was part of the garage rock revival and spearheaded the movement in the UK.",
        ]);

        ListItem::create([
            'mlist_id' => 1,
            'order_num' => 3,
            'title' => 'Avenged Sevenfold',
            'body' => "Avenged Sevenfold (sometimes abbreviated as A7X) is an American heavy metal band from Huntington Beach, California, formed in 1999. The band's members are lead vocalist M. Shadows, rhythm guitarist and backing vocalist Zacky Vengeance, lead guitarist and backing vocalist Synyster Gates, bass guitarist Johnny Christ and drummer Arin Ilejay."
        ]);

        //list 2
    }
}
