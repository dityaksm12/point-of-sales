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
                    <div class="card-body"><h5 class="card-title">User</h5>
                        <form class="" method="POST" action="/user/store">
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
                                    <input name="name" id="UserName" type="text"
                                           class="form-control">
                                </div>
                            </div>

                            <div class="position-relative row form-group">
                                <label for="username" class="col-sm-2 col-form-label">
                                    Username
                                </label>
                                <div class="col-sm-10">
                                    <input name="username" id="UserUsername" type="text"
                                           class="form-control">
                                </div>
                            </div>

                            <div class="position-relative row form-group">
                                <label for="role" class="col-sm-2 col-form-label">
                                    Role
                                </label>
                                <div class="col-sm-10">
                                    <select name="role_id" id="role" class="form-control">
                                        @foreach($roles as $role)
                                            <option value="{{ $role->id }}">{{ $role->name }}</option>
                                        @endforeach
                                    </select>
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
