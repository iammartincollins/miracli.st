<?php

class ExampleTest extends TestCase {

	/**
	 * A basic functional test example.
	 *
	 * @return void
	 */
	public function testBasicExample()
	{
		$response = $this->call('GET', '/');
		// dd($response->getContent());

		$this->assertEquals(200, $response->getStatusCode());
	}

}
