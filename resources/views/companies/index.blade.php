@extends('layouts.app')

@section('content')
    <div class="app-main__inner">
        <div class="app-page-title">
            <div class="page-title-wrapper">
                <div class="page-title-heading">
                    <div class="page-title-icon">
                        <i class="pe-7s-drawer icon-gradient bg-happy-itmeo">
                        </i>
                    </div>
                    <div>
                        @lang('user.title_index')
                        <div class="page-title-subheading">
                            @lang('user.desc_index')
                        </div>
                    </div>
                </div>
                <div class="page-title-actions">
                    <div class="d-inline-block dropdown">
                        <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                class="btn-shadow btn btn-info">
                            Buttons
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="main-card mb-3 card">
                    <div class="card-body"><h5 class="card-title">Table striped</h5>
                        <table class="mb-0 table table-striped">
                            <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Active</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($companies as $company)
                            <tr>
                                <td>{{ $company->image }}</td>
                                <td>{{ $company->name }}</td>
                                <td>{{ ($company->is_active == 1) ? 'Active' : 'Not Active'}}</td>
                            </tr>
                            @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </div>
    </div>
@endsection
