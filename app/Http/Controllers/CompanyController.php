<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;
use App\Http\Requests\CompanyRequest;

class CompanyController extends Controller
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
        $companies = Company::paginate(10);
        return response()->json($companies);
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
    public function store(CompanyRequest $request)
    {
        $validatedData = $request->validated();
        $company = new Company($validatedData);
        // Check if a logo file was uploaded
        if ($request->hasFile('logo')) {
            $logoPath = $request->file('logo')->store('public/logos');
            $company->logo = str_replace('public/', '', $logoPath);
        }
        $company->save();

        $details = [
            'title' => 'Mail from info@xepos.com',
            'body' => 'This is to inform you that new company is created'
        ];
       
        \Mail::to('info@xepos@gmail.com')->send(new \App\Mail\CompanyMail($details));

        return response()->json(['message' => 'Company created successfully', 'data' => $company], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function show(Company $company)
    {
        if (!$company) {
            // Handle the case where the company does not exist
            return response()->json(['message' => 'Company not found'], 404);
        }
        // Return the company details in a JSON response
        return response()->json(['data' => $company]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function edit(Company $company)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Company $company)
    {
        if (!$company) {
            // Handle the case where the company does not exist
            return response()->json(['message' => 'Company not found'], 404);
        }
        // Validate the request data
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            "email" => "nullable|email|unique:companies,email,".$company->id.",id",  
            'logo' => 'nullable|image|dimensions:min_width=100,min_height=100',
            'website' => 'nullable|url',
        ]);
        // Check if a new logo file was uploaded
        if ($request->hasFile('logo')) {
            $logoPath = $request->file('logo')->store('public/logos');
            $validatedData['logo'] = str_replace('public/', '', $logoPath);
        }
        $company->update($validatedData);
        // Return a success response
        return response()->json(['message' => 'Company updated successfully', 'data' => $company]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function destroy(Company $company)
    {
        if (!$company) {
            // Handle the case where the company does not exist
            return response()->json(['message' => 'Company not found'], 404);
        }
        // Delete the company
        $company->delete();
        // Return a success response
        return response()->json(['message' => 'Company deleted successfully']);
    }
}
