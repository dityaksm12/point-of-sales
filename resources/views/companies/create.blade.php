@extends('layouts.app')

@section('content')
    <div class="app-main__inner">
        <div class="app-page-title">
            <div class="page-title-wrapper">
                <div class="page-title-heading">
                    <div class="page-title-icon">
                        <i class="pe-7s-graph text-success">
                        </i>
                    </div>
                    <div>
                        @lang('user.title_create')
                        <div class="page-title-subheading">
                            @lang('user.desc_create')
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-content">
            <div class="tab-pane tabs-animation fade show active" id="tab-content-1" role="tabpanel">
                <div class="main-card mb-3 card">
                    <div class="card-body"><h5 class="card-title">Company</h5>
                        <form class="" method="POST" action="/company/store">
                            @if ($errors->any())
                                <div class="alert alert-danger">
                                    <ul>
                                        @foreach ($errors->all() as $error)
                                            <li>{{ $error }}</li>
                                        @endforeach
                                    </ul>
                                </div>
                            @endif
                            @csrf
                            <div class="position-relative row form-group">
                                <label for="name" class="col-sm-2 col-form-label">
                                    Nama
                                </label>
                                <div class="col-sm-10">
                                    <input name="name" id="CompanyName" type="text"
                                           class="form-control">
                                </div>
                            </div>

                            <div class="position-relative row form-group">
                                <label for="description" class="col-sm-2 col-form-label">
                                    Description
                                </label>
                                <div class="col-sm-10">
                                    <textarea name="description" id="CompanyDescription" cols="20" rows="3" class="form-control"></textarea>
                                </div>
                            </div>

                            <div class="position-relative row form-group">
                                <label for="image" class="col-sm-2 col-form-label">
                                    Image
                                </label>
                                <div class="col-sm-10">
                                    <input name="image" id="CompanyImage" type="text"
                                           class="form-control">
                                </div>
                            </div>

                            <div class="position-relative row form-check">
                                <div class="col-sm-10 offset-sm-2">
                                    <button class="btn btn-secondary">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
