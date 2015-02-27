<?php

class ListTest extends TestCase {

	/**
	 * A basic functional test example.
	 *
	 * @return void
	 */
	public function testNewListSaves()
	{
		$list = new Mlist;
		$list->name = 'Test list';
		$list->description = "Description for test list";

		$this->assertTrue($list->save());
	}

}
