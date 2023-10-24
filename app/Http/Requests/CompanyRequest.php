<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CompanyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required|string|max:255',
            "email" => "nullable|email|unique:companies,email,".$this->id.",id",  
            'logo' => 'nullable|image|dimensions:min_width=100,min_height=100',
            'website' => 'nullable|url',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'The name field is required.',
            'name.max' => 'The name may not be greater than 255 characters.',
            'email.email' => 'Please provide a valid email address.',
            'email.unique' => 'Please provide a unique email address.',
            'logo.dimensions' => 'The logo must have a minimum size of 100x100 pixels.',
            'website.url' => 'Please provide a valid URL for the website.',
        ];
    }
}
