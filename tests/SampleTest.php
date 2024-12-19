<?php
use PHPUnit\Framework\TestCase;

class SampleTest extends TestCase
{
    public function testHelloWorld()
    {
        $output = "Hello from PHP!";
        $this->assertEquals("Hello from PHP!", $output);
    }
}
