<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class EmployeeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'employee_name' => $this->faker->name(),
            'department' => $this->faker->department(),
            'task' => $this->faker->text(50),
        ];
    }
}
