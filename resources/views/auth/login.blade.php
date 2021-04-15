<!DOCTYPE html>
<html lang="en">
<head>
    <title>Aplikasi Point Of Sales</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Styles -->
    <link href="{{ asset('template/login/css/main.css') }}" rel="stylesheet">
    <link href="{{ asset('template/login/css/util.css') }}" rel="stylesheet">
    <link href="{{ asset('template/login/fonts/iconic/css/material-design-iconic-font.min.css') }}" rel="stylesheet">
    <link href="{{ asset('template/login/fonts/font-awesome-4.7.0/css/font-awesome.min.css') }}" rel="stylesheet">


    <!--===============================================================================================-->
</head>
<body>

<div class="limiter">
    <div class="container-login100">
        <div class="wrap-login100">
            <form class="login100-form validate-form" method="POST" action="{{ route('login') }}">
                @csrf
                <span class="login100-form-title p-b-26">
						Welcome
					</span>
                <span class="login100-form-title p-b-48">
						<i class="zmdi zmdi-font"></i>
					</span>

                <div class="wrap-input100 validate-input" data-validate="Valid username is: mercubuana">
                    <input id="username" type="text" class="input100 @error('username') is-invalid @enderror" name="username"
                           value="{{ old('username') }}" autocomplete="username" autofocus>

                    <span class="focus-input100" data-placeholder="username"></span>
                </div>

                <div class="wrap-input100 validate-input" data-validate="Enter password">
						<span class="btn-show-pass">
							<i class="zmdi zmdi-eye"></i>
						</span>
                    <input id="password" type="password" class="input100 @error('password') is-invalid @enderror"
                           name="password" autocomplete="current-password">
                    <span class="focus-input100" data-placeholder="Password"></span>
                </div>
                @error('username')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
                @enderror

                @error('password')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
                @enderror

                <div class="container-login100-form-btn">
                    <div class="wrap-login100-form-btn">
                        <div class="login100-form-bgbtn"></div>
                        <button class="login100-form-btn">
                            Login
                        </button>
                    </div>
                </div>

                {{--                <div class="text-center p-t-115">--}}
                {{--						<span class="txt1">--}}
                {{--							Don’t have an account?--}}
                {{--						</span>--}}

                {{--                    <a class="txt2" href="#">--}}
                {{--                        Sign Up--}}
                {{--                    </a>--}}
                {{--                </div>--}}
            </form>
        </div>
    </div>
</div>


<div id="dropDownSelect1"></div>

<!--===============================================================================================-->
<script src="{{ asset('template/login/vendor/jquery/jquery-3.2.1.min.js') }}" defer></script>
<script src="{{ asset('template/login/js/main.js') }}" defer></script>

</body>
</html>
