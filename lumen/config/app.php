<?php

return [
    'user' => 'App\Member',
    
    'defaults' => [
        'guard' => 'api',
        'passwords' => 'members',
    ],
    
    'locale' => env('APP_LOCALE', 'en'),

    'guards' => [
        'api' => [
            'driver' => 'passport',
            'provider' => 'members',
        ],
    ],

    'providers' => [
        'users' => [
            'driver' => 'eloquent',
            'model' => \App\Members::class
        ]
    ],
    
    'test' => 'Test the config file'
];
