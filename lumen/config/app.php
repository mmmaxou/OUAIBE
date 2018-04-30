<?php

return [
    'defaults' => [
        'guard' => 'api',
        'passwords' => 'members',
    ],

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