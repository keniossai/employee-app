<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Log;
use Exception;
use App\Models\Employee;

class EmployeesController extends Controller
{
    // Get employee list from database
    public function getEmployeeList(){
        try{

            $employees = Employee::orderBy('id', 'DESC')->get();
            return response()->json($employees);

        }catch(Exception $e){
            Log::error($e);
        }
    }

    // Get individual Emloyment details

    public function getEmployeeDetails (Request $request){
        try{

            $employeeData = Employee::findOrFail($request->get('employeeId'));
            return response()->json($employeeData);

        }catch(Exception $e){
            Log::error($e);
        }
    }

    public function updateEmployeeData(Request $request)
    {
        try
        {
            $employeeId     = $request->get('employeeId');
            $employeeName   = $request->get('employeeName');
            $employeeTask = $request->get('employeeTask');
            $employeeDepartment = $request->get('employeeDepartment');

            Employee::where('id', $employeeId)->update([
                'employee_name'   =>  $employeeName,
                'task' =>  $employeeTask,
                'department' =>  $employeeDepartment
            ]);

            return response()->json([
                'employee_name'   =>  $employeeName,
                'task' =>  $employeeTask,
                'department' =>  $employeeDepartment,
            ]);
        
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }
}
