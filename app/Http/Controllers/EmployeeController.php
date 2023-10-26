<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;
use App\Http\Requests\EmployeeRequest;

class EmployeeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $employees = Employee::with('company')->paginate(10);
        return response()->json($employees);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(EmployeeRequest $request)
    {
        $validatedData = $request->validated();
        // Store the data in the database
        $employee = Employee::create($validatedData);
        return response()->json(['message' => 'Wmployee created successfully', 'data' => $employee], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function show(Employee $employee)
    {
          if (!$employee) {
              // Handle the case where the company does not exist
              return response()->json(['message' => 'Employee not found'], 404);
          }
          // Return the company details in a JSON response
          return response()->json(['data' => $employee]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function edit(Employee $employee)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Employee $employee)
    {
        if (!$employee) {
            // Handle the case where the company does not exist
            return response()->json(['message' => 'Employee not found'], 404);
        }
        // Validate the request data
        $validatedData = $request->validate([
                'first_name' => 'required|string|max:255',
                'last_name' => 'required|string|max:255',
                'company_id' => 'required|exists:companies,id',
                "email" => "required|email|unique:employees,email,".$employee->id.",id",  
                'phone' => 'required|string|max:20',
        ]);
        // Update the company's data
        $employee->update($validatedData);
        // Return a success response
        return response()->json(['message' => 'Employee updated successfully', 'data' => $employee]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function destroy(Employee $employee)
    {
        if (!$employee) {
            // Handle the case where the company does not exist
            return response()->json(['message' => 'Employee not found'], 404);
        }
        // Delete the company
        $employee->delete();
        // Return a success response
        return response()->json(['message' => 'Employee deleted successfully']);
    }
}
