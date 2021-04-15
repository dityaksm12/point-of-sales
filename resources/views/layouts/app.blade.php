<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
<div id="app">
    <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
        @include('layouts.navbar')
        <div class="app-main">
            @include('layouts.sidebar')
            <div class="app-main__outer">
                @yield('content')
                @include('layouts.footer')
            </div>
        </div>
    </div>

</div>
</body>

</html>
